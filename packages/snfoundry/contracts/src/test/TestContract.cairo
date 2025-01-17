use snforge_std::{
    declare, ContractClassTrait, DeclareResultTrait, Env, Account, felt252, u256,
};

use UserProfile::{IUserProfileDispatcher, IUserProfileDispatcherTrait, UserProfileTrait};
use openzeppelin_token::erc20::interface::{IERC20Dispatcher, IERC20DispatcherTrait};
use snforge_std::{CheatSpan, ContractClassTrait, DeclareResultTrait, cheat_caller_address, declare};
use starknet::{ContractAddress, contract_address_const};

// Test constants
fn TEST_USER() -> ContractAddress {
    contract_address_const::<0x01234567890abcdef>()
}

const USDC_ADDRESS: felt252 = 0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8;
const ETH_ADDRESS: felt252 = 0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7;

// Helper functions
fn deploy_user_profile() -> ContractAddress {
    let contract = declare("UserProfile");
    let contract_class = contract.unwrap().contract_class();
    let mut calldata = array![];
    let (contract_address, _) = contract_class.deploy(@calldata).unwrap();
    contract_address
}

// UserProfile Contract Tests
#[test]
fn test_user_profile_transactions() {
    let contract_address = deploy_user_profile();
    let dispatcher = IUserProfileDispatcher { contract_address };
    let user = TEST_USER();
    
    // Test recording a fiat expense
    cheat_caller_address(contract_address, user, CheatSpan::TargetCalls(1));
    dispatcher.record_transaction(
        'EXPENSE',
        'GROCERIES',
        1000, // $10.00
        'Weekly groceries',
        contract_address_const::<0x0>() // zero address for fiat
    );
    
    // Test recording a crypto transaction
    let eth_address = contract_address_const::<ETH_ADDRESS>();
    dispatcher.record_transaction(
        'CRYPTO_PURCHASE',
        'INVESTMENT',
        500000000, // 0.5 ETH
        'ETH investment',
        eth_address
    );
    
    // Verify transaction count
    assert(dispatcher.transaction_count(user) == 2, 'Should have 2 transactions');
    
    // Test budget limits
    dispatcher.set_category_limit('GROCERIES', 5000); // $50.00
    let (current, limit) = dispatcher.check_budget_status(user, 'GROCERIES');
    assert(current == 1000, 'Wrong current spending');
    assert(limit == 5000, 'Wrong spending limit');
}
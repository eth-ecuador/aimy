use starknet::{ContractAddress};

#[starknet::interface]
trait IUserProfile<TContractState> {

    fn record_transaction(
        self: @TContractState,
        transaction_type: felt252,
        category: felt252,

        amount: u256,

        description: felt252,

        token_address: ContractAddress,

    );

    fn transaction_count(self: @TContractState, user: ContractAddress) -> u256;

    fn set_category_limit(ref self: TContractState, category: felt252, limit: u256);

    fn check_budget_status(self: @TContractState, user: ContractAddress, category: felt252) -> (u256, u256);

    fn update_performance_score(ref self: TContractState, user: ContractAddress, new_score: u256);

    fn update_web3_portfolio(ref self: TContractState, token: ContractAddress, amount: u256);

    fn award_achievement(ref self: TContractState, user: ContractAddress, reward_id: u256);
}

#[starknet::contract]
mod UserProfile {
    use starknet::{ContractAddress, get_caller_address};
    use starknet::storage::Map;
    
    #[storage]
    struct Storage {
        // User basic info
        user_wallet: Map::<ContractAddress, bool>,
        performance_score: Map::<ContractAddress, u256>,
        // Transaction records - maps user to transaction array
        transactions: Map::<(ContractAddress, u256), Transaction>,
        transaction_count: Map::<ContractAddress, u256>,
        
        // Budget limits and categories
        category_limits: Map::<(ContractAddress, felt252), u256>,
        current_spending: Map::<(ContractAddress, felt252), u256>,
        
        // Portfolio tracking
        web3_assets: Map::<(ContractAddress, ContractAddress), u256>, // user -> token -> amount
        
        // Rewards and achievements
        rewards: Map::<ContractAddress, u256>,

        admin: ContractAddress,
    }

    #[derive(Drop, Serde, Destruct, starknet::Store, Copy, PartialEq)]
    struct Transaction {
        timestamp: u64,
        transaction_type: felt252, // INCOME, EXPENSE, CRYPTO_PURCHASE, CRYPTO_SALE
        category: felt252,
        amount: u256,
        description: felt252,
        token_address: ContractAddress, // zero address for fiat
    }

    #[constructor]
    fn constructor(
        ref self: ContractState, admin : ContractAddress
    ) {
        self.admin.write(admin);
    }

    #[abi(embed_v0)]
    impl UserProfileImpl of super::IUserProfile<ContractState> {
        fn record_transaction(
            self: @ContractState,
            transaction_type: felt252,
            category: felt252,
            amount: u256,
            description: felt252,
            token_address: ContractAddress
        ) {
            let caller = get_caller_address();
            let current_count = self.transaction_count.read(caller);
            
            // Store transaction
            self.transactions.write(
                (caller, current_count),
                Transaction {
                    timestamp: starknet::get_block_timestamp(),
                    transaction_type,
                    category,
                    amount,
                    description,
                    token_address,
                }
            );
            
            // Update counts and amounts
            self.transaction_count.write(caller, current_count + 1);
            if transaction_type == 'EXPENSE' {
                let current = self.current_spending.read((caller, category));
                self.current_spending.write((caller, category), current + amount);
            }
        }
    
        fn set_category_limit(
            ref self: ContractState,
            category: felt252,
            limit: u256
        ) {
            let caller = get_caller_address();
            self.category_limits.write((caller, category), limit);
        }
    
        fn check_budget_status(
            self: @ContractState,
            user: ContractAddress,
            category: felt252
        ) -> (u256, u256) { // returns (current_spending, limit)
            (
                self.current_spending.read((user, category)),
                self.category_limits.read((user, category))
            )
        }
    
        fn update_performance_score(
            ref self: ContractState,
            user: ContractAddress,
            new_score: u256
        ) {
            // Only callable by authorized calculator contract
            self.performance_score.write(user, new_score);
        }
    
        fn update_web3_portfolio(
            ref self: ContractState,
            token: ContractAddress,
            amount: u256
        ) {
            let caller = get_caller_address();
            self.web3_assets.write((caller, token), amount);
        }
    

        fn award_achievement(
            ref self: ContractState,
            user: ContractAddress,
            reward_id: u256
        ) {
            let current_rewards = self.rewards.read(user);
            self.rewards.write(user, current_rewards + 1);
        }

        fn transaction_count(
            self: @ContractState,
            user: ContractAddress
        ) -> u256 {
            self.transaction_count.read(user)
        }
    }


}
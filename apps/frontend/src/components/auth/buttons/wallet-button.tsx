"use client";

import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";
import { useAccount, useConnect } from "@starknet-react/core";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";
import ConnectedButton from "./connected-button";

export default function WalletButton() {
  const { connect, connectors } = useConnect();
  const { address, status } = useAccount();
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as StarknetkitConnector[],
  });

  async function connectWallet() {
    const { connector } = await starknetkitConnectModal();
    if (!connector) {
      return;
    }

    await connect({ connector });
  }

  if (status === "connected") {
    return <ConnectedButton />;
  }

  if (status === "connecting") {
    return <span>connecting...</span>;
  }

  if (status === "disconnected") {
    return (
      <Button size="sm" onClick={connectWallet}>
        Connect Wallet
      </Button>
    );
  }
}

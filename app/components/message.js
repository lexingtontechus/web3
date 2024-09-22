"use client";
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { ChatUIProvider, darkChatTheme } from "@pushprotocol/uiweb";
import { ethers } from "ethers";

const ethersProvider = new ethers.providers.Web3Provider(provider, "any");

const signer = ethersProvider.getSigner();
const account = process.env.pushaccount;
const pushchatId = process.env.pushchatID;
// Creating a random signer from a wallet, ideally this is the wallet you will connect
//const signer = ethers.Wallet.createRandom();

// Initialize wallet user
// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps
const userAlice = await PushAPI.initialize(signer, {
  env: CONSTANTS.ENV.STAGING,
});

export default function Message() {
  return (
    <ChatUIProvider theme={darkChatTheme} signer={signer} account={account}>
      <ChatWidget chatId={pushchatId} />
    </ChatUIProvider>
  );
}

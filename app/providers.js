"use client";
import { ThemeProvider } from "next-themes";
import web3Onboard from "../context/web3-onboard";
import { Web3OnboardProvider, init } from "@web3-onboard/react";
import {
  ChatUIProvider,
  darkChatTheme,
} from "@pushprotocol/uiweb";

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import * as PushAPI from "@pushprotocol/restapi";


export function Providers({ children }) {
  const account =
    process.env.pushaccount || "0x39660eEC3FBf0982ae11A1A0D4e69F4Aa79FCC31";
  const env = process.env.pushenv;
  const [pvtKey, setPvtKey] = useState(null);
  const signer = { ethers };

  useEffect(() => {
    async () => {
      const user = await PushAPI.user.get({ account: account, env });
      //const pvtkey = null;
      if (user?.encryptedPrivateKey) {
        const response = await PushAPI.chat.decryptPGPKey({
          encryptedPGPPrivateKey: user.encryptedPrivateKey,
          account: { account },
          signer: { signer },
          env,
          toUpgrade: true,
        });
        setPvtKey(response);
      }
    };
  }, [account, env]);
  const onClose = () => {
    console.log("in here widget");
  };
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <ChatUIProvider
        theme={darkChatTheme}
        signer={ethers}
        account={account}
        env={env}
        pgpPrivatekey={setPvtKey}
      >
        <ThemeProvider defaultTheme="dim">
          {children}
          
        </ThemeProvider>
      </ChatUIProvider>
    </Web3OnboardProvider>
  );
}

"use client";
import { ChatWidget } from "@pushprotocol/uiweb";
export default function Home() {
  const pushchatID =
    process.env.pushchatID || "0x39660eEC3FBf0982ae11A1A0D4e69F4Aa79FCC31";
  return (
    <ChatWidget
      chatId={pushchatID}
      modalTitle="Powered By Push Protocol"
      welcomeComponent="WEB3 Messaging"
    />
  );
}

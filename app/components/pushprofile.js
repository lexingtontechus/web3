import { ChatProfile } from "@pushprotocol/uiweb";

export default function PushProfile() {
  const { CHAT_ID } = process.env.ChatID;

  return (
    <ChatProfile
      //chatProfileLeftHelperComponent={<div>left component</div>}
      //chatProfileRightHelperComponent={<div>right component</div>}
      chatId="66822288c33fc818da59e2ab13b7feb046908d6ee86fac04d5c936fbd57b11e7"
    />
  );
}

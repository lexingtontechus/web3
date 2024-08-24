"use client"
import {
    UnstoppableMessaging,
    useUnstoppableMessaging
} from "@unstoppabledomains/ui-components"

const UnstoppableMessagingDemo = () => {
    // Hook provides utility methods, such as opening the Unstoppable
    // Messaging window by clicking a button
    const { isChatReady, setOpenChat } = useUnstoppableMessaging()

    // Use a domain to demonstrate opening the chat window to a specific
    // conversation using a hook
    const myFriendDomain = "lexingtontechus.nft"

    // Open a chat window to a specific user
    const handleOpenChat = () => {
        setOpenChat(myFriendDomain)
    }

    return (
        <div className="container">
            <div className="h2">Unstoppable Messaging Demo</div>
            <div className="">
                The source code for this demo can be found{" "}
                <a href="https://github.com/unstoppabledomains/domain-profiles/tree/main/examples/unstoppable-messaging">
                    here
                </a>{" "}
                on GitHub.
            </div>
            <div >
                <UnstoppableMessaging />
                <div className="btn btn-secondary" onClick={handleOpenChat}>
                    {isChatReady ? `Message ${myFriendDomain}` : "Setup chat"}
                </div>
            </div>
        </div>
    )
}

export default UnstoppableMessagingDemo

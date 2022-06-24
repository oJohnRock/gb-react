import ChatList from "../components/ChatList";
import MessageList from "../components/MessageList";

const Chats = () => {
    return (
        <>
            <h2>Chats</h2>
            <div className="App-main-inner">
                <div className="chats-wrapper">
                    <ChatList />
                </div>
                <div className="message-wrapper">
                    <MessageList />
                </div>
            </div>
        </>
    );
};

export default Chats;

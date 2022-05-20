import ChatList from "../components/ChatList";
import MessageList from "../components/MessageList";

const Chats = ({ chats, updateMessages }) => {
    return (
        <>
            <h2>Chats</h2>
            <div className="App-main-inner">
                <div className="chats-wrapper">
                    <ChatList chats={chats} />
                </div>
                <div className="message-wrapper">
                    <MessageList
                        chats={chats}
                        updateMessages={updateMessages}
                    />
                </div>
            </div>
        </>
    );
};

export default Chats;

import { useState } from "react";
import { useParams } from "react-router-dom";
import ChatList from "../components/ChatList";
import ControlPanel from "../components/ControlPanel";
import MessageList from "../components/MessageList";

const initialChats = {
    id1: {
        name: "study",
        messages: [
            { author: "max", text: "dvbfblvesbvbaes" },
            { author: "lex", text: "svnlkbnklb" },
        ],
    },
    id2: {
        name: "work",
        messages: [{ author: "max", text: "dvbfblvesbvbaes" }],
    },
    id3: {
        name: "enjoy",
        messages: [
            { author: "max", text: "dvbfblvesbvbaes" },
            { author: "lex", text: "svnlkbnklb" },
            { author: "max", text: "dvbfblvesbvbaes" },
            { author: "lex", text: "svnlkbnklb" },
        ],
    },
};

const Chats = () => {
    const { chatId } = useParams();
    const [chats, setChats] = useState(initialChats);

    if (!chatId) {
        return (
            <div className="main__body">
                <div className="main__wrapper">
                    <ChatList chatList={initialChats} />
                    <div className="messages__wrapper"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="main__body">
            <div className="main__wrapper">
                <ChatList chatList={initialChats} />
                <div className="messages__wrapper">
                    <ControlPanel
                        chatId={chatId}
                        chats={chats}
                        setChats={setChats}
                    />
                    <MessageList messages={initialChats[chatId].messages} />
                </div>
            </div>
        </div>
    );
};

export default Chats;

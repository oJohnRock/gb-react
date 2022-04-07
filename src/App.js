import React, { useEffect, useState, useRef } from "react";
import "./App.scss";
import Title from "./Title";
import Messages from "./Messages";
import ChatList from "./ChatList";

function App() {
    const title = "Урок 4. Children. Роутинг в React";

    const [author, setAuthor] = useState("");
    const authorChange = (e) => {
        setAuthor(e.target.value);
    };

    const [text, setText] = useState("");
    const textChange = (e) => {
        setText(e.target.value);
    };

    const [messageList, setMessageList] = useState([
        { author: "max", text: "dvbfblvesbvbaes" },
        { author: "lex", text: "svnlkbnklb" },
    ]);
    const inputRef = useRef(null);
    const addMessage = () => {
        if (author === "" || text === "") return;

        setMessageList((prevMessageList) => [
            ...prevMessageList,
            { author: author, text: text },
        ]);

        setAuthor("");
        setText("");
        inputRef.current?.focus();
    };

    useEffect(() => {
        const lastMessage = messageList[messageList.length - 1];
        if (lastMessage == undefined) return;

        const timerId = setTimeout(() => {
            if (lastMessage.author !== "BOT") {
                setMessageList((prevMessageList) => [
                    ...prevMessageList,
                    { author: "BOT", text: "BOT MESSAGE" },
                ]);
            }
        }, 1500);
    }, [messageList]);

    const chatList = [
        { id: "chat-1", name: "study" },
        { id: "chat-2", name: "work" },
        { id: "chat-3", name: "enjoy" },
    ];

    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <Title title={title} />
                    <div className="header__wrapper">
                        <ChatList chatList={chatList} />
                        <Messages
                            messageList={messageList}
                            author={author}
                            authorChange={authorChange}
                            text={text}
                            textChange={textChange}
                            addMessage={addMessage}
                            inputRef={inputRef}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default App;

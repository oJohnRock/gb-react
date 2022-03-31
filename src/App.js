import React, { useEffect, useState } from "react";
import "./App.scss";
import Message from "./Message";

function App() {
    const messageText = "Урок 2. Жизненный цикл компонента";

    const [messageList, setMessageList] = useState([
        { author: "max", text: "dvbfblvesbvbaes" },
        { author: "lex", text: "svnlkbnklb" },
    ]);
    const addMessage = () => {
        setMessageList((prevMessageList) => {
            const result = Object.assign([], prevMessageList);
            const newMessage = { author: author, text: text };
            result.push(newMessage);

            return result;
        });
    };
    const list = messageList.map((el) => {
        return (
            <>
                <li className="message__item">
                    <h4 className="message__author">{el.author}:</h4>
                    <p className="message__text">{el.text}</p>
                </li>
            </>
        );
    });

    const [author, setAuthor] = useState("");
    const authorChange = (e) => {
        setAuthor(e.target.value);
    };

    const [text, setText] = useState("");
    const textChange = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        const lastMessage = messageList[messageList.length - 1];

        if (lastMessage.author !== "bot") {
            setMessageList((prevMessageList) => {
                const result = Object.assign([], prevMessageList);
                const newMessage = {
                    author: "bot",
                    text: "message from bot for user " + author,
                };
                result.push(newMessage);

                return result;
            });
        }
    }, [messageList]);

    return (
        <div className="App">
            <header className="App-header">
                <Message messageText={messageText} />
                <div className="message__wrapper">
                    <form className="message__form">
                        <input
                            className="message__input"
                            type="text"
                            placeholder="name"
                            onChange={authorChange}
                        />
                        <input
                            className="message__input"
                            type="text"
                            placeholder="message"
                            onChange={textChange}
                        />
                        <button
                            type="button"
                            className="message__btn"
                            onClick={addMessage}
                        >
                            Add
                        </button>
                    </form>
                    <ul className="message__list">{list}</ul>
                </div>
            </header>
        </div>
    );
}

export default App;

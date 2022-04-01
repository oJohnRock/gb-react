import React, { useEffect, useState } from "react";
import "./App.scss";
import Title from "./Title";

function App() {
    const title = "Урок 3. Virtual DOM. Material UI. PropTypes";

    const [messageList, setMessageList] = useState([
        { author: "max", text: "dvbfblvesbvbaes" },
        { author: "lex", text: "svnlkbnklb" },
    ]);
    const addMessage = () => {
        if (author.length < 3 || text.length === 0) return;

        setMessageList((prevMessageList) => {
            const result = Object.assign([], prevMessageList);
            const newMessage = { author: author, text: text };
            result.push(newMessage);

            return result;
        });
    };
    const list = messageList.map((el) => {
        return (
            <li className="messages__item">
                <h4 className="messages__author">{el.author}:</h4>
                <p className="messages__text">{el.text}</p>
            </li>
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

        const timerId = setTimeout(() => {
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
        }, 1500);
    }, [messageList]);

    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <Title title={title} />
                    <div className="messages">
                        <form className="messages__form">
                            <input
                                className="messages__input"
                                type="text"
                                placeholder="name"
                                onChange={authorChange}
                            />
                            <input
                                className="messages__input"
                                type="text"
                                placeholder="message"
                                onChange={textChange}
                            />
                            <button
                                type="button"
                                className="messages__btn"
                                onClick={addMessage}
                            >
                                Add
                            </button>
                        </form>
                        <ul className="messages__list">{list}</ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default App;

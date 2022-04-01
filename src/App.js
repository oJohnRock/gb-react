import React, { useEffect, useState } from "react";
import "./App.scss";
import Title from "./Title";
import { Button, TextField } from "@material-ui/core";

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
                    <form className="messages__form">
                        <TextField
                            id="outlined-basic"
                            label="name"
                            variant="outlined"
                            className="messages__input"
                            onChange={authorChange}
                        />
                        <TextField
                            id="outlined-basic"
                            label="message"
                            variant="outlined"
                            className="messages__input"
                            onChange={textChange}
                        />
                        <Button
                            variant="contained"
                            type="button"
                            className="messages__btn"
                            onClick={addMessage}
                        >
                            Add
                        </Button>
                    </form>
                    <ul className="messages__list">{list}</ul>
                </div>
            </div>
        </header>
    );
}

export default App;

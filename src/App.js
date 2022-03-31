import React, { useState } from "react";
import "./App.scss";
import Message from "./Message";

function App() {
    const messageText = "Урок 2. Жизненный цикл компонента";

    const [messageList, setMessageList] = useState([
        { author: "max", text: "qweqweqweqwqweqwe" },
        { author: "lex", text: "mmlmblngln" },
    ]);
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

    return (
        <div className="App">
            <header className="App-header">
                <Message messageText={messageText} />
                <ul className="message__list">{list}</ul>
            </header>
        </div>
    );
}

export default App;

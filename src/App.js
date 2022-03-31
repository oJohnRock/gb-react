import React, { useState } from "react";
import "./App.scss";
import Message from "./Message";

function App() {
    const messageText = "Урок 2. Жизненный цикл компонента";

    const [messageList, setMessageList] = useState([]);

    return (
        <div className="App">
            <header className="App-header">
                <Message messageText={messageText} />
            </header>
        </div>
    );
}

export default App;

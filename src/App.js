import "./App.scss";
import Title from "./components/Title";
import Router from "./components/Router";
import React, { useState } from "react";
import Example from "./components/Example";

export const MyThemeContext = React.createContext({ theme: "dark" });

function App() {
    const titleText =
        "Урок 5. Контекст. Компоненты высшего порядка. Знакомство с Redux";

    const [theme, setTheme] = useState("dark");

    function withLogger(fn) {
        return function (...args) {
            console.log({ args });

            return fn(...args);
        };
    }

    return (
        <div className="App">
            <MyThemeContext.Provider
                value={{ theme: theme, setTheme: setTheme }}
            >
                <header className="App-header">
                    <div className="container">
                        <Title text={titleText} />
                    </div>
                </header>
                <main className="App-main">
                    <div className="container">
                        <Example message="HELL" />
                        <Router />
                    </div>
                </main>
            </MyThemeContext.Provider>
        </div>
    );
}

export default App;

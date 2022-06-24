import "./App.scss";
import Title from "./components/Title";
import Router from "./components/Router";
import React, { useState } from "react";

export const MyThemeContext = React.createContext({ theme: "dark" });

function App() {
    const titleText = "Урок 6. Погружение в react-redux";

    const [theme, setTheme] = useState("dark");

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
                        <Router />
                    </div>
                </main>
            </MyThemeContext.Provider>
        </div>
    );
}

export default App;

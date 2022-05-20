import "./App.scss";
import Title from "./components/Title";
import Router from "./components/Router";

function App() {
    const titleText =
        "Урок 5. Контекст. Компоненты высшего порядка. Знакомство с Redux";

    return (
        <div className="App">
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
        </div>
    );
}

export default App;

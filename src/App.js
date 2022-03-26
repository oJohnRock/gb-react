import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App() {
    const messageText = 'Урок 1. Знакомство с ReactJS. Первые компоненты';

    return (
        <div className="App">
            <header className="App-header">
                <Message messageText={messageText} />
            </header>
        </div>
    );
}

export default App;

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Title from "./Title";

function Router() {
    const title = "Урок 4. Children. Роутинг в React";

    return (
        <BrowserRouter>
            <header className="header">
                <Title title={title} />
                <ul className="header__menu">
                    <li className="header__menu-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/chats">Chats</Link>
                    </li>
                </ul>
            </header>

            <Routes>
                <Route path="/" />
                <Route path="/profile" />
                <Route path="/chats" />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

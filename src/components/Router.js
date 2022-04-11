import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Title from "./Title";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Chats from "../pages/Chats";

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
                    <li className="header__menu-item">
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li className="header__menu-item">
                        <Link to="/chats">Chats</Link>
                    </li>
                </ul>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chats/:chatId" element={<Chats />} />
                <Route path="*" element={<Chats />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

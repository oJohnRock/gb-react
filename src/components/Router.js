import { Routes, Route, Link } from "react-router-dom";
import Chats from "../pages/Chats";
import Gists from "../pages/Gists";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const Router = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/chats">Chats</Link>
                </li>
                <li>
                    <Link to="/gists">Gists</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chats">
                    <Route index element={<Chats />} />
                    <Route path="/chats/:chatId" element={<Chats />} />
                </Route>
                <Route path="/gists" element={<Gists />} />
                <Route path="*" element={<Home />}></Route>
            </Routes>
        </nav>
    );
};

export default Router;

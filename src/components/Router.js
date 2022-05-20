import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Chats from "../pages/Chats";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const initialChats = {
    id1: {
        name: "Study",
        messages: [
            { author: "max", text: "vfkjblfbljkfljdsbkd" },
            { author: "lex", text: "12312312132" },
        ],
    },
    id2: { name: "Enjoy", messages: [{ author: "mix", text: "sadvsdv" }] },
    id3: {
        name: "Other",
        messages: [
            { author: "qwetew", text: "sdbs33r233413" },
            { author: "ddb", text: "12141241534635fgndng" },
            { author: "qwetew", text: "sdbs33r233413" },
            { author: "ddb", text: "12141241534635fgndng" },
        ],
    },
};

const Router = () => {
    const [chats, setChats] = useState(initialChats);

    const updateMessages = (chatId, messages) => {
        setChats({
            ...chats,
            [chatId]: { name: chats[chatId].name, messages: messages },
        });
    };

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
            </ul>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chats">
                    <Route index element={<Chats chats={chats} />} />
                    <Route
                        path="/chats/:chatId"
                        element={
                            <Chats
                                chats={chats}
                                updateMessages={updateMessages}
                            />
                        }
                    />
                </Route>
                <Route path="*" element={<Home />}></Route>
            </Routes>
        </nav>
    );
};

export default Router;

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addChat } from "../store/chats/actions";
import { useState } from "react";

const ChatList = () => {
    const chats = useSelector((state) => state.chats.chatList);
    const dispatch = useDispatch();

    const [value, setValue] = useState("");
    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const saveChat = () => {
        dispatch(addChat(value));
        setValue("");
    };

    return (
        <div className="chat-list-wrapper">
            <List className="chat-list">
                {chats.map((chat) => (
                    <Link to={`/chats/${chat.id}`} key={chat.id}>
                        <ListItem className="chat-item">
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={chat.name}
                                className="chat-item-name"
                            />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <form className="chats-update">
                <TextField
                    id="outlined-basic"
                    label="Имя чата"
                    variant="outlined"
                    className="author-name"
                    value={value}
                    onChange={handleInput}
                    autoFocus
                />
                <Button
                    variant="contained"
                    className="author-save"
                    type="button"
                    onClick={saveChat}
                >
                    Добавить новый чат
                </Button>
            </form>
        </div>
    );
};

export default ChatList;

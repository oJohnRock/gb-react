import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ControlPanel from "../components/ControlPanel";
import { useParams } from "react-router-dom";

const MessageList = ({ chats, updateMessages }) => {
    const { chatId } = useParams();

    if (!chatId) return;

    return (
        <>
            <ControlPanel chats={chats} updateMessages={updateMessages} />
            <List className="message-list">
                {chats[chatId].messages.map((item, index) => (
                    <ListItem
                        alignItems="flex-start"
                        className="message-item"
                        key={index}
                    >
                        <ListItemAvatar>
                            <AccountCircleIcon />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.author}
                            secondary={item.text}
                        />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default MessageList;

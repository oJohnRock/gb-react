import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ControlPanel from "../components/ControlPanel";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const MessageList = () => {
    const { chatId } = useParams();
    const { messageList } = useSelector((state) => state.messages);
    const messages = messageList[chatId] || [];

    return (
        <>
            {chatId && <ControlPanel />}
            <List className="message-list">
                {messages.map((message) => (
                    <ListItem
                        alignItems="flex-start"
                        className="message-item"
                        key={message.id}
                    >
                        <ListItemAvatar>
                            <AccountCircleIcon />
                        </ListItemAvatar>
                        <ListItemText
                            primary={message.author}
                            secondary={message.text}
                        />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default MessageList;

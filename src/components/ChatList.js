import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { Link } from "react-router-dom";

const ChatList = ({ chats }) => {
    return (
        <List className="chat-list">
            {Object.keys(chats).map((chat, index) => (
                <Link to={`/chats/${chat}`} key={index}>
                    <ListItem className="chat-item">
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={chats[chat].name}
                            className="chat-item-name"
                        />
                    </ListItem>
                </Link>
            ))}
        </List>
    );
};

export default ChatList;

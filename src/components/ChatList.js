import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyThemeContext } from "../App";

const ChatList = ({ chats }) => {
    const contextValue = useContext(MyThemeContext);

    return (
        <>
            <MyThemeContext.Consumer>
                {(theme) => {
                    return (
                        <div>
                            <h1>{theme.theme}</h1>
                            <button
                                onClick={() =>
                                    theme.setTheme(
                                        theme.theme === "dark"
                                            ? "light"
                                            : "dark"
                                    )
                                }
                            >
                                Change
                            </button>
                        </div>
                    );
                }}
            </MyThemeContext.Consumer>

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
        </>
    );
};

export default ChatList;

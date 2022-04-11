import React from "react";
import "../App.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

export default function ChatList({ chatList }) {
    const theme = useTheme();
    const list = Object.keys(chatList).map((el) => {
        return (
            <Link to={`/chats/${el}`}>
                <ListItem
                    className="chat__item"
                    key={el}
                    disablePadding
                    style={{
                        backgroundColor: theme.palette.primary.main,
                        borderColor: theme.palette.secondary.main,
                        borderRadius: "3px",
                        marginBottom: "10px",
                    }}
                >
                    <ListItemButton>
                        <ListItemText>
                            {/* <Route></Route> */}
                            <h4 className="chat__name">{chatList[el].name}</h4>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </Link>
        );
    });

    return <List className="chat__list">{list}</List>;
}

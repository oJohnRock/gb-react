import React from "react";
import "../App.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@emotion/react";

export default function MessageList({ messages }) {
    const theme = useTheme();

    const list = messages.map((el, idx) => {
        return (
            <ListItem className="messages__item" key={idx} disablePadding>
                <ListItemText>
                    <h4 className="messages__author">{el.author}:</h4>
                    <p className="messages__text">{el.text}</p>
                </ListItemText>
            </ListItem>
        );
    });

    return <List className="messages__list">{list}</List>;
}

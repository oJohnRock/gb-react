import React from "react";
import "../App.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { useTheme } from "@emotion/react";

export default function ChatList({ chatList }) {
    const theme = useTheme();
    const list = chatList.map((el) => {
        return (
            <ListItem
                className="chat__item"
                key={el.id}
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
                        <h4 className="chat__name">{el.name}:</h4>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        );
    });

    return <List className="chat__list">{list}</List>;
}

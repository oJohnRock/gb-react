import React from "react";
import "./App.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@emotion/react";

export default function Messages({
    messageList,
    author,
    authorChange,
    text,
    textChange,
    addMessage,
    inputRef,
}) {
    const theme = useTheme();

    const list = messageList.map((el, idx) => {
        return (
            <ListItem className="messages__item" key={idx} disablePadding>
                <ListItemText>
                    <h4 className="messages__author">{el.author}:</h4>
                    <p className="messages__text">{el.text}</p>
                </ListItemText>
            </ListItem>
        );
    });

    return (
        <div className="messages__wrapper">
            <form className="messages__form">
                <TextField
                    id="outlined-basic"
                    label="Author"
                    variant="outlined"
                    onChange={authorChange}
                    value={author}
                    style={{
                        backgroundColor: theme.palette.primary.main,
                        borderColor: theme.palette.secondary.main,
                        borderRadius: "3px",
                        marginBottom: "10px",
                    }}
                    inputRef={inputRef}
                    autoFocus
                />
                <TextField
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                    onChange={textChange}
                    value={text}
                    style={{
                        backgroundColor: theme.palette.primary.main,
                        borderColor: theme.palette.secondary.main,
                        borderRadius: "3px",
                        marginBottom: "10px",
                    }}
                />
                <Button
                    variant="contained"
                    type="button"
                    onClick={addMessage}
                    style={{
                        backgroundColor: theme.palette.primary.main,
                        borderColor: theme.palette.secondary.main,
                        borderRadius: "3px",
                    }}
                >
                    Contained
                </Button>
            </form>
            <List className="messages__list">{list}</List>
        </div>
    );
}

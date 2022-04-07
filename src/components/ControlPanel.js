import React, { useEffect, useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import { useParams } from "react-router-dom";

const ControlPanel = ({ chatId, chats, setChats }) => {
    const theme = useTheme();

    const [author, setAuthor] = useState("");
    const authorChange = (e) => {
        setAuthor(e.target.value);
    };

    const [text, setText] = useState("");
    const textChange = (e) => {
        setText(e.target.value);
    };

    const [messageList, setMessageList] = useState(chats[chatId].messages);
    console.log(messageList);
    const inputRef = useRef(null);
    const addMessage = () => {
        if (author === "" || text === "") return;

        setMessageList((prevMessageList) => [
            ...prevMessageList,
            { author: author, text: text },
        ]);

        setAuthor("");
        setText("");
        inputRef.current?.focus();
    };

    useEffect(() => {
        const lastMessage = messageList[messageList.length - 1];
        if (lastMessage == undefined) return;

        const timerId = setTimeout(() => {
            if (lastMessage.author !== "BOT") {
                setMessageList((prevMessageList) => [
                    ...prevMessageList,
                    { author: "BOT", text: "BOT MESSAGE" },
                ]);
            }
        }, 1500);
    }, [messageList]);

    return (
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
    );
};

export default ControlPanel;

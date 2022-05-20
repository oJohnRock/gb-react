import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AUTHOR } from "../constants/common";

const ControlPanel = ({ chats, updateMessages }) => {
    const { chatId } = useParams();

    const [author, setAuthor] = useState("");
    const handleAuthor = (event) => {
        setAuthor(event.target.value);
    };

    const [message, setMessage] = useState("");
    const handleMessage = (event) => {
        setMessage(event.target.value);
    };

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const [messages, setMessages] = useState(chats[chatId].messages);

    const addMessage = () => {
        if (author.length >= 3 && message !== "") {
            setMessages([...messages, { author: author, text: message }]);
        }

        setAuthor("");
        setMessage("");
    };

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (
                messages.length > 0 &&
                messages[messages.length - 1].author !== AUTHOR.bot
            ) {
                setMessages([
                    ...messages,
                    { author: "BOT", text: "BOT MESSAGE" },
                ]);
            }
        }, 1500);
    }, [messages]);

    useEffect(() => {
        updateMessages(chatId, messages);
    }, [messages]);

    return (
        <form className="message-form">
            <TextField
                id="outlined-basic"
                label="name"
                variant="outlined"
                className="message-text"
                placeholder="name"
                value={author}
                onChange={handleAuthor}
                autoFocus
                inputRef={inputRef}
            />
            <TextField
                id="outlined-basic"
                label="message"
                variant="outlined"
                className="message-text"
                placeholder="message"
                value={message}
                onChange={handleMessage}
            />
            <Button
                variant="contained"
                className="message-btn"
                type="button"
                onClick={addMessage}
            >
                Send <SendIcon />
            </Button>
        </form>
    );
};

export default ControlPanel;

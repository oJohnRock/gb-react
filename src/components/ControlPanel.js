import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    addMessageWithThunk,
    addMessage,
    addMessageWithSaga,
} from "../store/messages/actions";

const ControlPanel = () => {
    const { chatId } = useParams();
    const { name } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const [value, setValue] = useState("");
    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const inputRef = useRef(null);
    const handleClick = () => {
        if (name.length >= 3 && value !== "") {
            dispatch(
                addMessageWithThunk(chatId, { author: name, text: value })
            );
        }

        setValue("");
        inputRef.current?.focus();
    };

    return (
        <form className="message-form">
            <TextField
                id="outlined-basic"
                label="Введите сообщение"
                variant="outlined"
                className="message-text"
                placeholder="message"
                value={value}
                onChange={handleInput}
                inputRef={inputRef}
            />
            <Button
                variant="contained"
                className="message-btn"
                type="button"
                onClick={handleClick}
            >
                Отправить
                <SendIcon />
            </Button>
        </form>
    );
};

export default ControlPanel;

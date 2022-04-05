import React, { useEffect, useState, useRef } from "react";
import "./App.scss";
import Title from "./Title";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ThemeProvider, useTheme, createTheme } from "@material-ui/core/styles";

function App() {
    const title = "Урок 3. Virtual DOM. Material UI. PropTypes";

    const chats = [
        { id: "chat-1", name: "study" },
        { id: "chat-2", name: "work" },
        { id: "chat-3", name: "enjoy" },
    ];

    const [messageList, setMessageList] = useState([
        { author: "max", text: "dvbfblvesbvbaes" },
        { author: "lex", text: "svnlkbnklb" },
    ]);
    const addMessage = () => {
        if (author.length < 3 || text.length === 0) return;

        setMessageList((prevMessageList) => {
            const result = Object.assign([], prevMessageList);
            const newMessage = { author: author, text: text };
            result.push(newMessage);

            return result;
        });
    };
    const list = messageList.map((el, idx) => {
        return (
            <li className="messages__item" key={idx}>
                <h4 className="messages__author">{el.author}:</h4>
                <p className="messages__text">{el.text}</p>
            </li>
        );
    });

    const [author, setAuthor] = useState("");
    const authorChange = (e) => {
        setAuthor(e.target.value);
    };

    const [text, setText] = useState("");
    const textChange = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        const lastMessage = messageList[messageList.length - 1];
        if (lastMessage == undefined) return;

        const timerId = setTimeout(() => {
            if (lastMessage.author !== "bot") {
                setMessageList((prevMessageList) => {
                    const result = Object.assign([], prevMessageList);
                    const newMessage = {
                        author: "bot",
                        text: "message from bot for user " + author,
                    };
                    result.push(newMessage);

                    return result;
                });
            }
        }, 1500);
    }, [messageList]);

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const theme = createTheme({
        palette: {
            primary: {
                main: "#08ffc8",
            },
            secondary: {
                main: "#204969",
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <header className="header">
                <div className="container">
                    <div className="header__body">
                        <Title title={title} />
                        <div className="header__wrapper">
                            <List className="chats">
                                <ListItem
                                    disablePadding
                                    style={{
                                        backgroundColor:
                                            theme.palette.primary.main,
                                        borderColor:
                                            theme.palette.secondary.main,
                                        borderRadius: 3,
                                        marginBottom: 10,
                                    }}
                                >
                                    <ListItemButton>
                                        <ListItemText primary="Study" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    disablePadding
                                    style={{
                                        backgroundColor:
                                            theme.palette.primary.main,
                                        borderColor:
                                            theme.palette.secondary.main,
                                        borderRadius: 3,
                                        marginBottom: 10,
                                    }}
                                >
                                    <ListItemButton>
                                        <ListItemText primary="Work" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem
                                    disablePadding
                                    style={{
                                        backgroundColor:
                                            theme.palette.primary.main,
                                        borderColor:
                                            theme.palette.secondary.main,
                                        borderRadius: 3,
                                        marginBottom: 10,
                                    }}
                                >
                                    <ListItemButton>
                                        <ListItemText primary="Enjoy" />
                                    </ListItemButton>
                                </ListItem>
                            </List>

                            <div className="messages">
                                <form className="messages__form">
                                    <TextField
                                        id="outlined-basic"
                                        label="name"
                                        variant="outlined"
                                        className="messages__input"
                                        onChange={authorChange}
                                        ref={inputRef}
                                        autoFocus
                                        style={{
                                            backgroundColor:
                                                theme.palette.primary.main,
                                            borderColor:
                                                theme.palette.secondary.main,
                                            borderRadius: 3,
                                            marginBottom: 10,
                                        }}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="message"
                                        variant="outlined"
                                        className="messages__input"
                                        onChange={textChange}
                                        style={{
                                            backgroundColor:
                                                theme.palette.primary.main,
                                            borderColor:
                                                theme.palette.secondary.main,
                                            borderRadius: 3,
                                            marginBottom: 10,
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        type="button"
                                        className="messages__btn"
                                        onClick={addMessage}
                                        style={{
                                            backgroundColor:
                                                theme.palette.primary.main,
                                            borderColor:
                                                theme.palette.secondary.main,
                                            borderRadius: 3,
                                        }}
                                    >
                                        Add
                                    </Button>
                                </form>
                                <ul className="messages__list">{list}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </ThemeProvider>
    );
}

export default App;

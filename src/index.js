import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

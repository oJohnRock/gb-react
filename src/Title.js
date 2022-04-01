import React from "react";
import "./App.scss";

export default function Title(props) {
    return <h1 className="header__title">{props.title}</h1>;
}

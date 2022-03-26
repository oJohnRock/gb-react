import './App.css';

function Message(props) {
    return (
        <p className="message-text">{props.messageText}</p>
    );
}

export default Message;
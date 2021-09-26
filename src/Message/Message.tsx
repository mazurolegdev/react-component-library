import React from "react";
import { MessageProps } from "./Message.types";
import "./Message.scss";

const Message: React.FC<MessageProps> = ({ type, text }) => (
    <div data-testid="Message" className={`message ${type ? type : ''}`}>{text}</div>
);

export default Message;


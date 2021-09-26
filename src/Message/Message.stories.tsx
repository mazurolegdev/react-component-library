import React from "react";
import Message from "./Message";

export default {
    title: "Message"
};

export const WithBar = () => <Message type="normal" text="This is a normal message" />;

export const WithBaz = () => <Message type="success" text="This is a success message" />;

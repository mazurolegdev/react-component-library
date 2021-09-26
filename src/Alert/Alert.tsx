import React from "react";
import { AlertProps } from "./Alert.types";
import "./Alert.scss";

const Alert: React.FC<AlertProps> = ({ type, message }) => (
    <div data-testid="Alert" className={`alert ${type ? type : ''}`}>{message}</div>
);

export default Alert;


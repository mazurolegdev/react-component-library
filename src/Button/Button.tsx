import React from "react";
import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button: React.FC<ButtonProps> = ({ type, label }) => (
    <button type="button" data-testid="Button" className={`button ${type}`}>{label}</button>
);

export default Button;


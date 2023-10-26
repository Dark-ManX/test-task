import { FC } from "react";

interface IProps {
  type: "submit" | "button" | "reset" | undefined;
  text: string;
  onClick?: () => any;
}

const Button = ({ text, ...otherProps }: IProps) => {
  return <button {...otherProps}>{text}</button>;
};

export default Button;

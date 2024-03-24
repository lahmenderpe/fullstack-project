import { FC } from "react";
import "./button.style.scss";
import { ChildrenType } from "../../@types/commonTypes";
const ButtonType = {};

const Button: FC<ChildrenType> = ({ children }) => {
  return <button className="btn">Button</button>;
};

export default Button;

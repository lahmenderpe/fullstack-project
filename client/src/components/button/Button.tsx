import { FC } from "react";
import "./button.style.scss";
import { ChildrenType } from "../../@types/commonTypes";
import { ButtonType } from "../../@types/components/componentTypes";

const Button: FC<ChildrenType & ButtonType> = ({
  children,
  secondary,
  primary,
}) => {
  return (
    <button
      className={`btn ${secondary ? "secondary" : ""}${
        primary ? "primary" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

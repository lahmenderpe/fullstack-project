import { FC } from "react";
import "./button.style.scss";
import { ChildrenType } from "../../@types/commonTypes";
import { ButtonType } from "../../@types/components/componentTypes";

const Button: FC<ChildrenType & ButtonType> = ({
  children,
  secondary,
  primary,
  action,
}) => {
  return (
    <button
      className={`btn ${secondary ? "secondary" : ""}${
        primary ? "primary" : ""
      }`}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;

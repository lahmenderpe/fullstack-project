import { FC } from "react";
import "./button.style.scss";
import { ChildrenType } from "../../@types/commonTypes";
import { ButtonType } from "../../@types/components/componentTypes";

const Button: FC<ChildrenType & ButtonType> = ({
  children,
  secondary,
  primary,
  small,
  deleteBtn,
  editBtn,
  action,
  logout,
}) => {
  const classNames = ["btn"];

  const genarateClassname = () => {
    if (secondary) classNames.push("secondary");
    if (primary) classNames.push("primary");
    if (small) classNames.push("small");
    if (deleteBtn) classNames.push("delete");
    if (editBtn) classNames.push("edit");
    if (logout) classNames.push("logout");

    return classNames.join(" ");
  };

  return (
    <button className={genarateClassname()} onClick={action}>
      {children}
    </button>
  );
};

export default Button;

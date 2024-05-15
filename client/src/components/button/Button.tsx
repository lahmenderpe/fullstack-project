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
  disabled,
  loading,
}) => {
  const classNames = ["btn"];

  const genarateClassname = () => {
    if (secondary) classNames.push("secondary");
    if (primary) classNames.push("primary");
    if (small) classNames.push("small");
    if (deleteBtn) classNames.push("delete");
    if (editBtn) classNames.push("edit");
    if (logout) classNames.push("logout");
    // if (disabled) classNames.push("disabled");

    return classNames.join(" ");
  };

  return (
    <button
      className={genarateClassname()}
      onClick={action}
      disabled={disabled}
    >
      {loading && (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;

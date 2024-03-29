import { FC } from "react";
import { ChildrenType } from "../../@types/commonTypes";
import { LinkButtonType } from "../../@types/components/componentTypes";
import "./link-btn.style.scss";

const LinkButton: FC<ChildrenType & LinkButtonType> = ({
  children,
  action,
}) => {
  return (
    <button className="link-btn" onClick={action}>
      {children}
    </button>
  );
};

export default LinkButton;

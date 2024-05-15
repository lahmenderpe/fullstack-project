import { FC } from "react";
import { ChildrenType } from "../../@types/commonTypes";

const Email: FC<ChildrenType> = ({ children }) => {
  return <div className="email">{children}</div>;
};

export default Email;

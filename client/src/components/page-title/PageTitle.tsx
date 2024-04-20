import { FC } from "react";
import { ChildrenType } from "../../@types/commonTypes";
import "./pagetitle.style.scss";

const PageTitle: FC<ChildrenType> = ({ children }) => {
  return <h1 className="page-title">{children}</h1>;
};

export default PageTitle;

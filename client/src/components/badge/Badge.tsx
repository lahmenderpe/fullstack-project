import { FC } from "react";
import { ChildrenType } from "../../@types/commonTypes";
import "./badge.styles.scss";

type BadgeType = {
  type: "pending" | "declined" | "interview" | "job offer";
};

const Badge: FC<ChildrenType & BadgeType> = ({ children, type }) => {
  const classNames = ["badge"];

  const generateClassName = (type: string, classNames: string[]) => {
    const temp = [...classNames];
    if (type === "pending") temp.push("pending");
    if (type === "declined") temp.push("declined");
    if (type === "interview") temp.push("interview");
    if (type === "job offer") temp.push("job-offer");

    return temp.join(" ");
  };

  return <div className={generateClassName(type, classNames)}>{children}</div>;
};

export default Badge;

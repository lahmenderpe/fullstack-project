import { FC } from "react";
import "./card.style.scss";
import { ChildrenType } from "../../@types/commonTypes";
import { CardType } from "../../@types/components/componentTypes";

const Card: FC<ChildrenType & CardType> = ({ children, height, width }) => {
  return (
    <section
      className="card"
      style={{ width, height: height ? height : "auto" }}
    >
      {children}
    </section>
  );
};

export default Card;

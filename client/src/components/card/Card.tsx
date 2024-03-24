import { FC } from "react";
import "./card.style.scss";
import { ChildrenType } from "../../@types/commonTypes";

type CardType = {
  height?: number;
  width: number;
};

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

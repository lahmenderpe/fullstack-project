import { FC } from "react";
import "./card.style.scss";

const Card: FC<JSX.IntrinsicElements["section"]> = ({ children }) => {
  return <section>{children}</section>;
};

export default Card;

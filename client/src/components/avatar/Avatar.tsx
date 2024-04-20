import { FC } from "react";
import { AvatarType } from "../../@types/components/componentTypes";
import "./avatar.style.scss";

const Avatar: FC<AvatarType> = ({
  name,
  secondName,
  isJob = true,
  size = "medium",
}) => {
  const getLetters = (name: string, secondName?: string) => {
    if (isJob) return name.charAt(0);

    return name.charAt(0) + secondName?.charAt(0);
  };

  return (
    <div className={`avatar ${size ? size : ""}`}>
      {getLetters(name, secondName)}
    </div>
  );
};

export default Avatar;

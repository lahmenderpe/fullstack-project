import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { LogoType } from "../../@types/components/componentTypes";

const Logo: FC<LogoType> = ({ width, link }) => {
  if (link) {
    return (
      <Link to="/">
        <img src={logo} alt="logo" style={{ width: width ? width : 100 }} />
      </Link>
    );
  }

  return <img src={logo} alt="logo" style={{ width: width ? width : 100 }} />;
};

export default Logo;

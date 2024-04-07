import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useTranslate from "../../hooks/useTranslate";
import Dropdown from "../dropdown/Dropdown";
import logo from "../../assets/logo.svg";
import "./header.style.scss";

const Header: FC = () => {
  const { language } = useTranslate();
  const { state } = useLocation();
  const isLogin = state?.target === "login";

  const langs = [
    {
      id: "en",
      text: "English",
    },
    {
      id: "fi",
      text: "Suomi",
    },
  ];

  const changeLanguage = () => {
    console.log(changeLanguage);
  };

  return (
    <header className="header">
      <section className="header__logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </section>
      <section className="header__links">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/about">{isLogin ? "Register" : "Login"}</NavLink>
        <Dropdown items={langs} selected={language} action={changeLanguage} />
      </section>
    </header>
  );
};

export default Header;

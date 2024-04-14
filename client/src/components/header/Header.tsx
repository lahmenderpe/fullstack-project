import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useTranslate from "../../hooks/useTranslate";
import Dropdown from "../dropdown/Dropdown";
import logo from "../../assets/logo.svg";
import "./header.style.scss";

const Header: FC = () => {
  const { language, changeLanguage } = useTranslate();
  const { isAuthenticated } = useAuth();
  const { state } = useLocation();
  const { translate } = useTranslate();
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

  const handleSelect = (id: string) => {
    changeLanguage(id);
  };

  const findSelected = () => {
    const selected = langs.find((lang) => lang.id === language);
    return selected || null;
  };

  return (
    <header className="header">
      <section className="header__logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </section>
      <section className="header__links">
        <NavLink to="/about">{translate("header_about_text")}</NavLink>
        {!isAuthenticated && (
          <NavLink to="/auth">
            {translate(isLogin ? "header_register_text" : "header_login_text")}
          </NavLink>
        )}
        <Dropdown
          items={langs}
          onSelect={handleSelect}
          selected={findSelected()}
        />
      </section>
    </header>
  );
};

export default Header;

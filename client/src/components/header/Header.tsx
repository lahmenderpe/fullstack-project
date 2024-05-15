import { FC } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import useTranslate from "../../hooks/useTranslate";
import useAppContext from "../../hooks/useAppContext";
import useAuth from "../../hooks/useAuth";
import Dropdown from "../dropdown/Dropdown";
import Email from "../email/Email";
import logo from "../../assets/logo.svg";
import "./header.style.scss";

const Header: FC = () => {
  const { language, changeLanguage, translate } = useTranslate();
  const { isAuthenticated } = useAuth();
  const { user } = useAuth();
  const { isLogin, updateIsLogin, setSelectedPage } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    updateIsLogin(!isLogin);
    if (location.pathname === "/about") navigate("/auth");
  };

  const handleSelect = (item: {
    name: string;
    item: { id: string; text: string };
  }) => {
    changeLanguage(item.item.id);
  };

  const findSelected = () => {
    const selected = langs.find((lang) => lang.id === language);
    return selected || null;
  };

  const updateCurrentPage = () => {
    setSelectedPage("jobs");
  };

  return (
    <header className="header">
      <section className="header__logo">
        <NavLink to="/" onClick={updateCurrentPage}>
          <img src={logo} alt="logo" />
        </NavLink>
      </section>
      <section className="header__links">
        <NavLink to="/about">{translate("header_about_text")}</NavLink>
        {!isAuthenticated && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a href="" onClick={handleNav}>
            {translate(isLogin ? "header_register_text" : "header_login_text")}
          </a>
        )}
        <Dropdown
          name="translation"
          items={langs}
          onSelect={handleSelect}
          selected={findSelected()}
        />
        <Email>{user?.email}</Email>
      </section>
    </header>
  );
};

export default Header;

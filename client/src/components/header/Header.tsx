import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Header: FC = () => {
  const { state } = useLocation();
  const isLogin = state?.target === "login";

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
      </section>
    </header>
  );
};

export default Header;

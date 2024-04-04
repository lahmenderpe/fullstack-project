import { useState, FC, useEffect } from "react";
import { Card, LoginContent } from "../../components";
import { setPageTitle } from "../../utils/utils";
import useTranslate from "../../hooks/useTranslate";
import cover from "../../assets/login-cover.jpg";
import "./authpage.style.scss";

const AuthPage: FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { translate, language } = useTranslate();

  const handleRegister = () => {
    setIsLogin(false);
  };

  const handleLogin = () => {};

  const handleDemo = () => {};

  useEffect(() => {
    const title = isLogin ? "page_title_login" : "page_title_register";

    setPageTitle(translate(title));
  }, [translate, language, isLogin]);

  return (
    <section className="login-page page">
      <Card width={1000}>
        {isLogin ? (
          <LoginContent
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleDemo={handleDemo}
            handleLogin={handleLogin}
            handleRegister={handleRegister}
          />
        ) : (
          ""
        )}
        <section>
          <img src={cover} alt="cover" />
        </section>
      </Card>
    </section>
  );
};

export default AuthPage;

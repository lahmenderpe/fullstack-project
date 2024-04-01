import { useState, FC, useEffect } from "react";
import { Card, Input, Button, LinkButton } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";
import { setPageTitle } from "../../utils/utils";
import useTranslate from "../../hooks/useTranslate";
import cover from "../../assets/login-cover.jpg";
import "./authpage.style.scss";

const AuthPage: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { translate, language } = useTranslate();
  const { state } = location;
  const routeState = state?.target || "login";

  const handleRegister = () => {
    navigate("/auth", { state: { target: "register" }, replace: true });
  };

  useEffect(() => {
    const title =
      routeState === "login" ? "page_title_login" : "page_title_register";

    setPageTitle(translate(title));
  }, [routeState, translate, language]);

  return (
    <section className="login-page page">
      <Card width={1000}>
        <section>
          <div className="card__form-group">
            <Input
              id="email"
              name="email"
              label="Email"
              placeholder="Enter your email address"
              value={email}
              onchange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              id="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onchange={(e) => setPassword(e.target.value)}
              required
            />
            <Button primary>Login</Button>
            <div className="card__register">
              Don't have an account?{" "}
              <LinkButton action={handleRegister}>Register here</LinkButton>
            </div>
            <div className="card__seperator">
              <span className="seperator__line"></span>
              <span>Or try demo</span>
              <span className="seperator__line"></span>
            </div>
            <Button secondary>Try Demo</Button>
          </div>
        </section>
        <section>
          <img src={cover} alt="cover" />
        </section>
      </Card>
    </section>
  );
};

export default AuthPage;

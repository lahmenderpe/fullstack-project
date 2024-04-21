import { FC } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import LinkButton from "../link-button/LinkButton";
import useTranslate from "../../hooks/useTranslate";
import { LoginContentType } from "../../@types/components/componentTypes";

const LoginContent: FC<LoginContentType> = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleRegister,
  handleDemo,
}) => {
  const { translate } = useTranslate();

  return (
    <section>
      <div className="card__form-group">
        <Input
          id="email"
          name="email"
          label={translate("login_email_label")}
          placeholder={translate("login_email_placeholder")}
          value={email}
          onchange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          id="password"
          name="password"
          label={translate("login_password_label")}
          type="password"
          placeholder={translate("login_password_placeholder")}
          value={password}
          onchange={(e) => setPassword(e.target.value)}
          required
        />
        <Button primary action={handleLogin}>
          {translate("login_button")}
        </Button>
        <div className="card__register">
          {translate("login_dont_have_account_text")}{" "}
          <LinkButton action={handleRegister}>
            {translate("login_try_demo_text")}
          </LinkButton>
        </div>
        <div className="card__seperator">
          <span className="seperator__line"></span>
          <span>{translate("try_demo_text")}</span>
          <span className="seperator__line"></span>
        </div>
        <Button secondary action={handleDemo}>
          {translate("demo_button")}
        </Button>
      </div>
    </section>
  );
};

export default LoginContent;

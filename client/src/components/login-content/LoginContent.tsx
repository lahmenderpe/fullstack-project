import { FC, useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import LinkButton from "../link-button/LinkButton";
import useTranslate from "../../hooks/useTranslate";
import { LoginContentType } from "../../@types/components/componentTypes";

const LoginContent: FC<LoginContentType> = ({
  handleLogin,
  handleRegister,
  handleDemo,
}) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { translate } = useTranslate();

  const isDisabled = !!state.email && !!state.password;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newState = { ...state, [name]: value };
    setState(newState);
  };

  return (
    <section>
      <div className="card__form-group">
        <Input
          id="email"
          name="email"
          label={translate("login_email_label")}
          placeholder={translate("login_email_placeholder")}
          value={state.email}
          onchange={handleChange}
          required
        />
        <Input
          id="password"
          name="password"
          label={translate("login_password_label")}
          type="password"
          placeholder={translate("login_password_placeholder")}
          value={state.password}
          onchange={handleChange}
          required
        />
        <Button
          primary
          action={() => handleLogin(state)}
          disabled={!isDisabled}
        >
          {translate("login_button")}
        </Button>
        <div className="card__register">
          {translate("login_dont_have_account_text")}{" "}
          <LinkButton action={handleRegister}>
            {translate("register_text")}
          </LinkButton>
        </div>
        {/* <div className="card__seperator">
          <span className="seperator__line"></span>
          <span>{translate("try_demo_text")}</span>
          <span className="seperator__line"></span>
        </div>
        <Button secondary action={handleDemo}>
          {translate("demo_button")}
        </Button> */}
      </div>
    </section>
  );
};

export default LoginContent;

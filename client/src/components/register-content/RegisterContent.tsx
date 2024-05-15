import { FC, useState, useEffect } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import LinkButton from "../link-button/LinkButton";
import "./registerContent.style.scss";

export type RegisterContentType = {
  handleRegister: (data: any) => void;
  handleLogin: () => void;
  isProcessing: boolean;
};

const RegisterContent: FC<RegisterContentType> = ({
  handleRegister,
  handleLogin,
  isProcessing,
}) => {
  const [state, setState] = useState({
    email: "",
    userName: "",
    password: "",
  });
  const isDisabled =
    !!state.email &&
    !!state.userName &&
    !!state.password &&
    !isProcessing &&
    !isProcessing;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newState = { ...state, [name]: value };
    setState(newState);
  };

  useEffect(() => {
    const handleKeyup = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleRegister(state);
      }
    };

    document.addEventListener("keyup", handleKeyup);

    return () => document.removeEventListener("keyup", handleKeyup);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <section>
      <div className="card__form-group">
        <Input
          id="email"
          name="email"
          label="Email"
          placeholder="Enter your email address"
          value={state.email}
          onchange={(e) => handleChange(e)}
          required
        />
        <Input
          id="userName"
          name="userName"
          label="User Name"
          type="text"
          placeholder="Enter your user name"
          value={state.userName}
          onchange={(e) => handleChange(e)}
          required
        />
        <Input
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Enter password"
          value={state.password}
          onchange={(e) => handleChange(e)}
          required
        />
        <Button
          primary
          action={() => handleRegister(state)}
          disabled={!isDisabled}
          loading={isProcessing}
        >
          Create Account
        </Button>
        <div className="have-account">
          <span>Already have an account?</span>
          <LinkButton action={handleLogin}>Login here</LinkButton>
        </div>
      </div>
    </section>
  );
};

export default RegisterContent;

import { FC } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import LinkButton from "../link-button/LinkButton";
import { RegisterContentType } from "../../@types/components/componentTypes";

const RegisterContent: FC<RegisterContentType> = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleRegister,
  handleDemo,
}) => {
  return (
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
          type="password"
          placeholder="Enter your password"
          value={password}
          onchange={(e) => setPassword(e.target.value)}
          required
        />
        <Button primary action={handleLogin}>
          Login
        </Button>
        <div className="card__register">
          Don't have an account?{" "}
          <LinkButton action={handleRegister}>Register here</LinkButton>
        </div>
        <div className="card__seperator">
          <span className="seperator__line"></span>
          <span>Or try demo</span>
          <span className="seperator__line"></span>
        </div>
        <Button secondary action={handleDemo}>
          Try Demo
        </Button>
      </div>
    </section>
  );
};

export default RegisterContent;

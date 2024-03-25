import { useState } from "react";
import { Card, Input, Button, Logo } from "../../components";
import { Link } from "react-router-dom";
import cover from "../../assets/login-cover.jpg";
import "./loginpage.style.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="login-page page">
      <Card width={1000}>
        <section>
          <div className="card__logo">
            <Logo width={200} />
          </div>
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
              Don't have an account? <Link to="/register">Register here</Link>
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

export default LoginPage;

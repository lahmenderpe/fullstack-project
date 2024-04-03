import { FC } from "react";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
import "./404.style.scss";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <section className="not-found-page content-page">
      <div>
        <h1>404</h1>
        <p>The page you are looking for does not exist</p>
        <Button primary action={handleNavigate}>
          Go back
        </Button>
      </div>
    </section>
  );
};

export default NotFoundPage;

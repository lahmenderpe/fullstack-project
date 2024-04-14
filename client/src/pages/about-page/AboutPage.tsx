import { FC } from "react";
import useTranslate from "../../hooks/useTranslate";
import "./aboutpage.style.scss";
import aboutImage from "../../assets/login-cover.jpg";

const AboutPage: FC = () => {
  const { translate } = useTranslate();
  return (
    <section className="about-page page-content">
      <div>
        <div>
          <h1>{translate("about_page_title")}</h1>
          <p>{translate("about_page_text")}</p>
        </div>
        <div>
          <img src={aboutImage} alt="about" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

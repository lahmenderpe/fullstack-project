import { FC } from "react";
import "./footer.style.scss";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <section className="footer__content">
        <div>
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/cihanerenler/"
            target="_blank"
            rel="noreferrer"
          >
            Cihan Erenler
          </a>
        </div>
        <div>JobHunder © {new Date().getUTCFullYear()}</div>
      </section>
    </footer>
  );
};

export default Footer;

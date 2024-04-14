import { FC } from "react";
import sidebarLinks from "./siderbar-links";
import { useNavigate } from "react-router-dom";
import useTranslate from "../../hooks/useTranslate";
import useAppContext from "../../hooks/useAppContext";
import "./sidebar.style.scss";

type SidebarLinkType = {
  id: number;
  title: string;
  name: string;
  icon: JSX.Element;
  to: string;
};

const SideBar: FC = () => {
  const { selectedPage, setSelectedPage } = useAppContext();
  const navigate = useNavigate();
  const { translate } = useTranslate();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: SidebarLinkType
  ) => {
    e.preventDefault();
    setSelectedPage(link.name);
    navigate(link.to);
  };

  return (
    <section className="sidebar">
      {sidebarLinks.map((link) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          className={`${selectedPage === link.name ? "selected" : ""}`}
          key={link.id}
          onClick={(e) => handleLinkClick(e, link)}
        >
          <i>{link.icon}</i>
          {translate(link.translationKey)}
        </a>
      ))}
    </section>
  );
};

export default SideBar;

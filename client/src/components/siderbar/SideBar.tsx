import { FC, useEffect } from "react";
import sidebarLinks from "./siderbar-links";
import { useNavigate, useLocation } from "react-router-dom";
import useTranslate from "../../hooks/useTranslate";
import useAppContext from "../../hooks/useAppContext";
import { SidebarLinkType } from "../../@types/components/componentTypes";
import Button from "../button/Button";
import { IoLogOutOutline } from "react-icons/io5";
import useLocalStorage from "../../hooks/useLocalStorage";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import "./sidebar.style.scss";

const SideBar: FC = () => {
  const {
    selectedPage,
    setSelectedPage,
    setAllJobs,
    resetFilters,
    resetAddJobs,
  } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { translate } = useTranslate();
  const { setUser, setIsAuthenticated } = useAuth();
  const { removeItem } = useLocalStorage("user");

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    removeItem();
    setAllJobs([]);
    resetFilters();
    resetAddJobs();
    setSelectedPage("jobs");
    toast.success(translate("notification_logout"));
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: SidebarLinkType
  ) => {
    e.preventDefault();
    setSelectedPage(link.name);
    navigate(link.to);
  };

  useEffect(() => {
    const path = location.pathname;
    if (path === "/add-job") setSelectedPage("add-job");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="sidebar">
      <div>
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
      </div>
      <Button action={handleLogout} logout>
        <IoLogOutOutline size={24} />
        {translate("logout_button")}
      </Button>
    </section>
  );
};

export default SideBar;

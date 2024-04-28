import { MdOutlineWork } from "react-icons/md";
import { BiSolidBookAdd } from "react-icons/bi";

const links = [
  {
    id: 1,
    title: "All Jobs",
    name: "jobs",
    icon: <MdOutlineWork size={20} />,
    translationKey: "sidebar_all_jobs",
    to: "/",
  },
  {
    id: 2,
    title: "Add Job",
    name: "add-job",
    icon: <BiSolidBookAdd size={20} />,
    translationKey: "sidebar_add_job",
    to: "/add-job",
  },
];

export default links;

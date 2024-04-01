import { MdOutlineWork } from "react-icons/md";
import { BiSolidBookAdd } from "react-icons/bi";
import { FaFilter } from "react-icons/fa6";

const links = [
  {
    id: 1,
    title: "All Jobs",
    name: "jobs",
    icon: <MdOutlineWork size={20} />,
    to: "/",
  },
  {
    id: 2,
    title: "Add Job",
    name: "add-job",
    icon: <BiSolidBookAdd size={20} />,
    to: "/add-job",
  },
  {
    id: 3,
    title: "Filter",
    name: "filter",
    icon: <FaFilter size={20} />,
    to: "/filter",
  },
];

export default links;

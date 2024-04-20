export type ButtonType = {
  secondary?: boolean;
  primary?: boolean;
  small?: boolean;
  deleteBtn?: boolean;
  editBtn?: boolean;
  action: () => void;
};

export type CardType = {
  height?: number;
  width: number;
};

export type LinkButtonType = {
  action: () => void;
};

export type JobItemTypes = {
  id: string | number;
  jobTitle: string;
  companyName: string;
  location?: string;
  jobType?: string;
  createdAt?: Date;
  isUpdated: boolean;
  updatedAt?: Date | null | undefined;
  user: string;
  jobStatus: "pending" | "declined" | "interview" | "job offer";
};

export type SidebarLinkType = {
  id: number;
  title: string;
  name: string;
  icon: JSX.Element;
  to: string;
};

export type RegisterContentType = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => void;
  handleRegister: () => void;
  handleDemo: () => void;
};

export type LoginContentType = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => void;
  handleRegister: () => void;
  handleDemo: () => void;
};

export type LogoType = {
  width?: number;
  link?: boolean;
};

export type InputType = {
  value: string;
  type?: "text" | "password" | "number";
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
};

export type DropdownItem = {
  id: string;
  text: string;
};

export type DropdownProps = {
  items: DropdownItem[];
  onSelect: (item: string) => void;
  selected: DropdownItem | null;
};

export type AvatarType = {
  name: string;
  secondName?: string;
  isJob?: boolean;
  size?: "small" | "medium";
};

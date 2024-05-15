export type ButtonType = {
  secondary?: boolean;
  primary?: boolean;
  small?: boolean;
  deleteBtn?: boolean;
  editBtn?: boolean;
  logout?: boolean;
  disabled?: boolean;
  loading?: boolean;
  action: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type CardType = {
  height?: number;
  width: number | string;
};

export type LinkButtonType = {
  action: () => void;
};

export type JobItemTypes = {
  id: string | number;
  jobTitle: string;
  companyName: string;
  location?: string;
  jobType?: {
    name: string;
    translationKey: string;
  };
  user: string;
  jobStatus: {
    name: string;
    translationKey: string;
  };
};

export type SidebarLinkType = {
  id: number;
  title: string;
  name: string;
  icon: JSX.Element;
  to: string;
};

export type LoginContentType = {
  handleLogin: (data: any) => void;
  handleRegister: () => void;
  handleDemo: () => void;
  isProcessing: boolean;
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
  small?: boolean;
};

export type DropdownItem = {
  id: string;
  text: string;
};

export type DropdownProps = {
  name: string;
  items: DropdownItem[];
  onSelect: (item: {
    name: string;
    item: { id: string; text: string };
  }) => void;
  selected: DropdownItem | null;
  label?: string;
};

export type AvatarType = {
  name: string;
  secondName?: string;
  isJob?: boolean;
  size?: "small" | "medium";
};

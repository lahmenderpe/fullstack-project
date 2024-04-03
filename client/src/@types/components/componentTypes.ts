export type ButtonType = {
  secondary?: boolean;
  primary?: boolean;
  action: () => void;
};

export type CardType = {
  height?: number;
  width: number;
};

export type LinkButtonType = {
  action: () => void;
};

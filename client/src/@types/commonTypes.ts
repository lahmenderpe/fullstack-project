export type ActionType = {
  state: string;
  action: any;
};

export type ReducerType<state> = {
  state: state;
  action: ActionType;
};

export type ChildrenType = {
  children: React.ReactNode;
};

import { createContext, useState } from "react";

type UserType = {
  id: string;
  email: string;
  token: string;
};

type AuthContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<null | UserType>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  setUserAuthenticated: (user: UserType) => void;
};

export const AuthContext = createContext<null | AuthContextType>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<null | UserType>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setUserAuthenticated = (user: UserType) => {
    setUser(user);
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        setUserAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

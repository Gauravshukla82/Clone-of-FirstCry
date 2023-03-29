import React from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false);
  const [token, setToken] = React.useState("");

  const loginUser = (token) => {
    setIsAuth(true);
    setToken(token);
  };

  const logoutUser = () => {
    setIsAuth(false);
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ isAuth, loginUser, logoutUser, token }}>
      {children}
    </AuthContext.Provider>
  );
}

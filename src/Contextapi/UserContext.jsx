import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    fullName: localStorage.getItem("LoggedUser") || "",
    email: localStorage.getItem("email") || "",
  });

  const login = (token, fullName, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("LoggedUser", fullName);
    localStorage.setItem("email", email);
    setUser({ fullName, email });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("LoggedUser");
    localStorage.removeItem("email");
    setUser({ fullName: "", email: "" }); // This should trigger a re-render
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// import React, { createContext, useState, useContext, useEffect } from "react";

// // Create a context for authentication
// const AuthContext = createContext();

// // Create a provider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // Check if there's a logged-in user in localStorage on initial load
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser)); // Restore user from localStorage
//     }
//   }, []);

//   // Login function
//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem("user", JSON.stringify(userData)); // Save to localStorage
//   };

//   // Logout function
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user"); // Remove from localStorage
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use auth context
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

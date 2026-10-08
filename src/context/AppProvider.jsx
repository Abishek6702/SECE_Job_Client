import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [resetEmail, setResetEmail] = useState("");
  //  Get userId  from token
  const getUserIdFromToken = () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = jwtDecode(token);
        console.log("Decoded token:", decoded);
        return decoded.id;
      }
    } catch (error) {
      console.error("Invalid token", error);
    }
    return null;
  };

  // Fetch jobs on component mount with valid user ID
  useEffect(() => {
    getUserIdFromToken();
  }, []);

  const value = {
    resetEmail,
    setResetEmail,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);   //store user info like access token nd all..
  const [loading, setLoading] = useState(true); //it will tell the user to wait while checking if the user is logged in..

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/api/auth/refresh", {
          withCredentials: true,
        });
        console.log(res.data);
        setAuth({
          accessToken: res.data.accessToken,
          role: res.data.user.role,
          email: res.data.user.email,
        });
      } catch (error) {
        setAuth(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const apiUrl = import.meta.env.VITE_API_URL;

axios.defaults.baseURL = apiUrl;
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [authUser, setAuthUser] = useState(null);

  const auth = async (state, credentials) => {
    try {
      const { data } = await axios.post(`/api/auth/${state}`, credentials);

      if (data.success) {
        setToken(data.token);
        setAuthUser(data.userData);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["token"] = data.token;
        console.log(data);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const checkAuth = async () => {
    try {
      const { data } =await axios.get("/api/auth/checkAuth");
      if (data.success) {
        console.log(data.userData)
        setAuthUser(data.userData);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(()=>{
    if(token){
        axios.defaults.headers.common["token"]=token
    }
    checkAuth();

  },[])

  const value = {
    auth,
    token,
    setToken,
    authUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

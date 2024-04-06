"use client";

import React, { useState } from "react";
import AuthServices from "@/services/AuthServices";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

export interface IAuthContext {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  login: (email: string, password: string) => void;
  registration: (
    name: string,
    age: number,
    email: string,
    password: string,
  ) => void;
  logout: () => void;
  checkAuth: () => void;
  status: { isLoading: boolean; error: any[] };
}

export const authContext = React.createContext<IAuthContext>({
  isAuth: false,
  setIsAuth: () => {},
  login: () => {},
  registration: () => {},
  logout: () => {},
  checkAuth: () => {},
  status: { isLoading: false, error: [] },
});

const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [status, setStatus] = useState({ isLoading: false, error: [] });

  const login = async (email: string, password: string) => {
    setStatus({ isLoading: true, error: [] });
    try {
      const response = await AuthServices.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      setIsAuth(true);
      setStatus({ isLoading: false, error: [] });
    } catch (e: any) {
      setStatus({ isLoading: false, error: e });
      console.log("Error login", error);
      // console.log(e?.response?.data?.message);
    }
  };

  const registration = async (
    name: string,
    age: number,
    email: string,
    password: string,
  ) => {
    setStatus({ isLoading: true, error: [] });
    try {
      console.log("registration", 222);
      const response = await AuthServices.registration(
        name,
        age,
        email,
        password,
      );
      console.log("response", response);
      localStorage.setItem("token", response.data.accessToken);
      setIsAuth(true);
      setStatus({ isLoading: false, error: [] });
    } catch (e: any) {
      setStatus({ isLoading: false, error: e });
      console.log("Error registration", error);
      // console.log(e?.response?.data?.message);
    }
  };

  const logout = async () => {
    setStatus({ isLoading: true, error: [] });
    try {
      // const response = await AuthServices.logout();
      localStorage.removeItem("token");
      setIsAuth(false);
      setStatus({ isLoading: false, error: [] });
    } catch (e: any) {
      setStatus({ isLoading: false, error: e });
      console.log("Error logout", error);
      // console.log(e?.response?.data?.message);
    }
  };

  const checkAuth = async () => {
    setStatus({ isLoading: true, error: [] });
    try {
      const response = await AuthServices.checkAuth();
      localStorage.setItem("token", response.data.accessToken);
      setIsAuth(true);
      setStatus({ isLoading: false, error: [] });
    } catch (e: any) {
      setStatus({ isLoading: false, error: e });
      console.log(444);
    }
  };

  return (
    <authContext.Provider
      value={{
        isAuth,
        setIsAuth,
        login,
        registration,
        logout,
        checkAuth,
        status,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;

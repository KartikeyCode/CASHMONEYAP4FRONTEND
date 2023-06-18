"use client";
import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";

export const GlobalState = ({ children }) => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [userUuid, setUserUuid] = useState();

  const getUserData = async () => {
    try {
      const url = "http://127.0.0.1:8000/api/v1/get-user-data";
      const resp = await axios.get(url, { withCredentials: true });
      setName(resp.data.name);
      setEmail(resp.data.email);
      setUsername(resp.data.username);
      setUserUuid(resp.data.user_uuid);

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${resp.data.access_token}`;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        email,
        name,
        username,
        userUuid,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// todo: use the get user data route

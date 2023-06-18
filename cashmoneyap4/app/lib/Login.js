import axios from "axios";
import React from "react";

export default async function login(formdata) {
  const url = `http://127.0.0.1:8000/api/v1/login`;
  try {
    const resp = await axios.post(url, formdata, { withCredentials: true });
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
}

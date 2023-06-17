import axios from "axios";
import React from "react";

export default async function makePurchase(formdata) {
  const url = "http://127.0.0.1:8000/api/v1/make-purchase";
  try {
    const resp = await axios.post(url, formdata);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
}

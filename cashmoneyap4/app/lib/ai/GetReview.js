import axios from "axios";
import React from "react";

export default async function getReview(formdata) {
  const url = "/api/generate";
  try {
    const resp = await axios.post(url, formdata);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
}

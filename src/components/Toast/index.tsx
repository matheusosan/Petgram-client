import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  return (
    <ToastContainer
      progressStyle={{ backgroundColor: "#E84A5F" }}
      autoClose={3000}
    />
  );
};

export default Toast;

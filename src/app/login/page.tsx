import LoginForm from "@/components/Login";
import Toast from "@/components/toast";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <LoginForm />
      <Toast />
    </div>
  );
};

export default page;

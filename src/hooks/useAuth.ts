"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { LoginSchema, LoginType } from "@/validations/login.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface ErrorResponse {
  message: string;
}

export const useAuth = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const onLogin = async (data: LoginType) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!response.ok) {
        const errorResponse: ErrorResponse = await response.json();
        toast.error(errorResponse.message);
        return;
      }

      toast.success("Login bem sucedido!");
      router.push("/");
      return;
    } catch (error) {
      console.error(`Ocorreu um erro! ${error}`);
    }
  };

  const onLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/logout", {
        credentials: "include",
        headers: { "Content-Type": "application/json" },

        cache: "no-store",
      });

      if (response.ok) {
        router.push("/login");
      }
    } catch (error) {
      toast(`Ocorreu um erro: ${error}`);
    }
  };

  return {
    onLogin,
    onLogout,
    errors,
    isSubmitting,
    isSubmitSuccessful,
    register,
    handleSubmit,
  };
};

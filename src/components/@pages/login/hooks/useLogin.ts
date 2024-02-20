"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email("O contéudo deve ser um endereço de email válido.")
    .nonempty("O campo email é obrigatório."),
  password: z
    .string()
    .min(3, "O campo senha deve conter no mínimo 3 caracteres"),
});

export type LoginType = z.infer<typeof LoginSchema>;

interface ErrorResponse {
  message: string;
}

export const useLogin = () => {
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

  return {
    onLogin,
    errors,
    isSubmitting,
    isSubmitSuccessful,
    register,
    handleSubmit,
  };
};

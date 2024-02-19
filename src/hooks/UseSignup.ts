"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { SignUpType, SignUpSchema } from "@/validations/signup.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useSignup = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSignup = async (data: SignUpType) => {
    try {
      const response = await fetch("http://localhost:3000/user/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast("Cadastro realizado!", {
          theme: "dark",
        });
        router.push("/login");
      }
    } catch (error) {
      toast.error(`Ocorreu um erro: ${error}`);
    }
  };

  return {
    onSignup,
    errors,
    isSubmitting,
    isSubmitSuccessful,
    register,
    handleSubmit,
  };
};

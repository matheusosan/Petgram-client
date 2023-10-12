"use client";
import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUp, SignUpSchema } from "@/schemas/Signup.schema";
import { useHandleSignup } from "@/hooks/useHandleSignup";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUp>({
    resolver: zodResolver(SignUpSchema),
  });

  const { onSubmit } = useHandleSignup();

  return (
    <div className="flex flex-col items-center justify-between h-[500px] w-[350px] rounded-lg bg-[#fff] py-12">
      <h2 className="text-pet-contrast text-2xl font-bold">Criar Conta</h2>
      <form
        id="signup"
        action=""
        className="flex flex-col items-center justify-center gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Email"
          className="rounded-lg text-sm pl-4 py-2 border border-gray-400 outline-pet-contrast"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
        <input
          type="text"
          placeholder="Nome de usuário"
          className="rounded-lg text-sm pl-4 py-2 border border-gray-400 outline-pet-contrast"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-xs text-red-500">{errors.username.message}</p>
        )}

        <input
          type="password"
          placeholder="Senha"
          className="rounded-lg text-sm pl-4 py-2 border border-gray-400 outline-pet-contrast"
          {...register("password")}
        />
        {errors.password && (
          <p className=" text-xs text-red-500">{errors.password.message}</p>
        )}
      </form>
      <button
        form="signup"
        type="submit"
        className="bg-pet-contrast w-[80%] py-2 rounded-lg text-white"
      >
        CADASTRAR
      </button>
    </div>
  );
};

export default SignupForm;

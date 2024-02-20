"use client";

import React from "react";
import Link from "next/link";
import { useLogin } from "./hooks/useLogin";

const LoginForm = () => {
  const { onLogin, register, handleSubmit, errors, isSubmitting } = useLogin();

  return (
    <div className="flex items-center justify-center w-full h-screen gap-12 ">
      <div className="flex flex-col items-center justify-between h-[500px] w-[350px] rounded-lg py-12 border border-pet-contrast">
        <h2 className="text-pet-contrast text-2xl font-bold">Realizar Login</h2>
        <form
          id="signup"
          action=""
          className="flex flex-col items-center justify-center gap-6"
          onSubmit={handleSubmit(onLogin)}
        >
          <input
            type="text"
            placeholder="Email"
            autoComplete="off"
            className="rounded-lg text-sm text-white pl-4 py-2 border border-pet-contrast bg-[#09090B]"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}

          <input
            type="password"
            autoComplete="off"
            placeholder="Senha"
            className="rounded-lg text-sm text-white pl-4 py-2 border border-pet-contrast  bg-[#09090B]"
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
          {isSubmitting ? "Entrando" : "Entrar"}
        </button>

        <p className="text-sm text-[#71767b] ">
          Não tem uma conta?{" "}
          <Link href="/signup" className="font-bold text-[#1d9bf0]">
            Inscreva-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

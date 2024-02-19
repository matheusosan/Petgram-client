"use client";
import React from "react";
import Link from "next/link";
import { useSignup } from "@/hooks/UseSignup";

const SignupForm = () => {
  const { errors, onSignup, handleSubmit, register } = useSignup();

  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <div className="flex flex-col items-center justify-between h-[500px] w-[350px] rounded-lg bg-[#fff] border border-slate-300 py-12">
        <h2 className="text-pet-contrast text-2xl font-bold">Criar Conta</h2>
        <form
          id="signup"
          action=""
          className="flex flex-col items-center justify-center gap-6"
          onSubmit={handleSubmit(onSignup)}
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

        <p className="text-sm text-[#71767b] ">
          Já possui uma conta?{" "}
          <Link href="/login" className="font-bold text-[#1d9bf0]">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;

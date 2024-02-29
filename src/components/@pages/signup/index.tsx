"use client";
import React from "react";
import Link from "next/link";
import { useSignup } from "./hooks/UseSignup";
import { AiOutlineLoading3Quarters as LoadingSpinner } from "react-icons/ai";

const SignupForm = () => {
  const { errors, onSignup, handleSubmit, register, isSubmitting } =
    useSignup();

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#fff]">
      <div className="flex h-[500px] w-[350px] flex-col items-center justify-between rounded-lg border border-slate-300 bg-[#fff] py-12">
        <h2 className="text-2xl font-bold text-pet-contrast">Criar Conta</h2>
        <form
          id="signup"
          action=""
          className="flex flex-col items-center justify-center gap-4 px-12"
          onSubmit={handleSubmit(onSignup)}
        >
          <input
            type="text"
            placeholder="Email"
            className="rounded-lg border border-gray-400 py-2 pl-4 text-sm outline-pet-contrast"
            {...register("email")}
          />
          <input
            type="text"
            placeholder="Nome de usuário"
            className="rounded-lg border border-gray-400 py-2 pl-4 text-sm outline-pet-contrast"
            {...register("username")}
          />

          <input
            type="password"
            placeholder="Senha"
            className="rounded-lg border border-gray-400 py-2 pl-4 text-sm outline-pet-contrast"
            {...register("password")}
          />
        </form>

        {errors && (
          <div className="flex flex-col gap-2 px-9 font-semibold">
            {errors.email && (
              <p className=" text-xs text-pet-contrast">
                {errors.email.message}
              </p>
            )}
            {errors.username && (
              <p className=" text-xs text-pet-contrast">
                {errors.username.message}
              </p>
            )}
            {errors.password && (
              <p className=" text-xs text-pet-contrast">
                {errors.password.message}
              </p>
            )}
          </div>
        )}
        <button
          form="signup"
          type="submit"
          className="w-[80%] rounded-lg bg-pet-contrast py-2 text-white"
        >
          {isSubmitting ? (
            <LoadingSpinner className="animate-spin" />
          ) : (
            "Cadastrar"
          )}
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

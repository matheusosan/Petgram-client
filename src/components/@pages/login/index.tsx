"use client";

import React from "react";
import Link from "next/link";
import { useLogin } from "./hooks/useLogin";
import { AiOutlineLoading3Quarters as LoadSpinner } from "react-icons/ai";

const LoginForm = () => {
  const { onLogin, register, handleSubmit, errors, isSubmitting } = useLogin();

  return (
    <div className="flex h-screen w-full items-center justify-center gap-12 bg-[#fff] ">
      <div className="flex h-[500px] w-[350px] flex-col items-center justify-between rounded-lg border border-slate-300 bg-[#fff] py-12">
        <h2 className="text-2xl font-bold text-pet-contrast">Realizar Login</h2>
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
            className="rounded-lg border border-gray-400 py-2 pl-4 text-sm outline-pet-contrast"
            {...register("email")}
          />

          <input
            type="password"
            autoComplete="off"
            placeholder="Senha"
            className="rounded-lg border border-gray-400 py-2 pl-4 text-sm outline-pet-contrast "
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
          className="flex w-[80%] items-center justify-center rounded-lg bg-pet-contrast py-2 text-white"
        >
          {isSubmitting ? (
            <LoadSpinner className="h-4 w-4 animate-spin" />
          ) : (
            "Entrar"
          )}
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

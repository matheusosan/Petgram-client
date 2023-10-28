"use client";
import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useHandleLogin } from "@/hooks/useHandleLogin";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginType = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const { onSubmit } = useHandleLogin();

  return (
    <div className="flex flex-col items-center justify-between h-[500px] w-[350px] rounded-lg bg-[#fff] py-12">
      <h2 className="text-pet-contrast text-2xl font-bold">Realizar Login</h2>
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
        LOGIN
      </button>

      <p className="text-sm text-[#71767b] ">
        Não tem uma conta?{" "}
        <Link href="/signup" className="font-bold text-[#1d9bf0]">
          Inscreva-se
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;

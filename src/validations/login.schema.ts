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

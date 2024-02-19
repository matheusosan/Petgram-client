import { z } from "zod";

export const SignUpSchema = z.object({
  email: z
    .string()
    .email("O contéudo deve ser um endereço de email válido.")
    .nonempty("O campo email é obrigatório."),
  username: z.string().nonempty("O campo usuário é obrigatório"),
  password: z
    .string()
    .min(3, "O campo senha deve conter no mínimo 3 caracteres"),
});

export type SignUpType = z.infer<typeof SignUpSchema>;

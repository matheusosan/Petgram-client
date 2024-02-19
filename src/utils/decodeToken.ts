import * as jwt from "jsonwebtoken";
import { getJwt } from "./getJwt";

export const decode_token = async () => {
  const { token } = await getJwt();

  if (!token) {
    throw new Error("Você deve estar logado");
  }

  const secret = process.env.JWT_SECRET;

  const payload = jwt.verify(token, secret!);

  return {
    tokenUserId: Number(payload.sub),
  };
};

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export const getJwt = async () => {
  const cookieStore = cookies();

  const token = cookieStore.get("access_token");

  if (!token) {
    toast.error("Você deve estar logado para realizar esta ação.");
    redirect("/login");
  }

  return {
    token: token?.value,
  };
};

import { LoginType } from "@/components/Login";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const useHandleLogin = () => {
  const router = useRouter();

  const onSubmit = async (data: LoginType) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (response.ok) {
        toast("Login bem sucedido!", {
          theme: "dark",
        });
        router.push("/");
      }
    } catch (error) {
      toast(`Ocorreu um erro: ${error}`);
    }
  };

  const onLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
      }

      console.log(response);
    } catch (error) {
      toast(`Ocorreu um erro: ${error}`);
    }
  };

  return {
    onSubmit,
    onLogout,
  };
};

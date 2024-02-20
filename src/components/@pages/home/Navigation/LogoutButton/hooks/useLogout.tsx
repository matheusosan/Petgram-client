import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useLogout = () => {
  const router = useRouter();

  const onLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/logout", {
        credentials: "include",
        headers: { "Content-Type": "application/json" },

        cache: "no-store",
      });

      if (response.ok) {
        router.push("/login");
      }
    } catch (error) {
      toast(`Ocorreu um erro: ${error}`);
    }
  };

  return {
    onLogout,
  };
};

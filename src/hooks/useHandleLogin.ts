import { LoginType } from "@/components/Login";

export const useHandleLogin = () => {
  const onSubmit = async (data: LoginType) => {
    try {
      const response = await fetch(
        "https://petgram-server.onrender.com/auth/login",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );

      const dados = await response.json();

      console.log(dados);
    } catch (error) {
      console.log(`Ocorreu um erro: ${error}`);
    }
  };
  return {
    onSubmit,
  };
};

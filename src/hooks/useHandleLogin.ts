import { LoginType } from "@/components/Login";

export const useHandleLogin = () => {
  const onSubmit = async (data: LoginType) => {
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

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

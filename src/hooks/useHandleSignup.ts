import { SignUp } from "@/schemas/Signup.schema";

export const useHandleSignup = () => {
  const onSubmit = async (data: SignUp) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };

      const response = await fetch(
        "https://petgram-server.onrender.com/user/create",
        requestOptions
      );

      await response.json();
    } catch (error) {
      console.log(`Ocorreu um erro: ${error}`);
    }
  };
  return {
    onSubmit,
  };
};

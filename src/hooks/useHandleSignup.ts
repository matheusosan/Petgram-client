import { SignUp } from "@/schemas/Signup.schema";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const useHandleSignup = () => {
  const router = useRouter();

  const onSubmit = async (data: SignUp) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };

      const response = await fetch(
        "http://localhost:3000/user/create",
        requestOptions
      );

      if (response.ok) {
        toast("Cadastro realizado!", {
          theme: "dark",
        });
        router.push("/login");
      }
    } catch (error) {
      console.log(`Ocorreu um erro: ${error}`);
    }
  };
  return {
    onSubmit,
  };
};

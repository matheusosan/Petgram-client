import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const useDeletePost = () => {
  const router = useRouter();

  const deletePost = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/post/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        toast.success("Post Excluído!", {
          theme: "dark",
        });
        router.refresh();
        return;
      }
    } catch (e) {
      toast.error(`Ocorreu um erro: ${e}.`);
    }
  };

  return {
    deletePost,
  };
};

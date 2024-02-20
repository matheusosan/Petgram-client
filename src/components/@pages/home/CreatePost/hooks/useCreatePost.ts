import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useModalStore } from "@/state/modal-state";

export const useCreatePost = () => {
  const { isModalOpen, closeModal } = useModalStore();
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);
  };

  const cleanFile = () => {
    setSelectedFile(undefined);
  };

  const handleSubmitPost = async (event: FormEvent) => {
    event.preventDefault();

    if (!selectedFile) {
      toast.error("Selecione uma foto ou vídeo para postar!", {
        theme: "dark",
      });
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("description", description);

    try {
      const response = await fetch("http://localhost:3000/post", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (response.ok) {
        closeModal();
        setDescription("");
        cleanFile();
        toast.success("Post criado!", {
          theme: "dark",
        });
      }
    } catch (e) {
      console.log(e);
      toast.error(`Ocorreu um erro: ${e}.`);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return {
    loading,
    description,
    selectedFile,
    handleDescriptionChange,
    handleFileChange,
    cleanFile,
    handleSubmitPost,
    onDrop,
  };
};

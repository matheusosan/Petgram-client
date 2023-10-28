import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useModalStore } from "@/state/modal-state";

export const useHandlePost = () => {
  const { closeModal } = useModalStore();
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

  const cleanFile = () => {
    setSelectedFile(undefined);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!selectedFile) {
      console.error("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("description", description);

    try {
      const response = await fetch("http://localhost:3000/post", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        closeModal();
        toast("Post criado!");
        setDescription("");
        cleanFile();
      } else {
        console.error("Error creating post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return {
    description,
    selectedFile,
    handleDescriptionChange,
    handleFileChange,
    cleanFile,
    handleSubmit,
  };
};

"use client";

import React from "react";
import Image from "next/image";
import profile from "@/public/profile.png";
import { useCreatePost } from "./hooks/useCreatePost";
import { useModalStore } from "@/state/modal-state";
import { AiOutlineClose } from "react-icons/ai";
import { useDropzone } from "react-dropzone";

function CreatePost() {
  const {
    loading,
    description,
    cleanFile,
    handleFileChange,
    selectedFile,
    onDrop,
    handleDescriptionChange,
    handleSubmitPost,
  } = useCreatePost();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [], "video/*": [] },
    maxFiles: 1,
  });

  const { isModalOpen, closeModal } = useModalStore();

  return (
    <>
      {isModalOpen && (
        <div className="fixed top-0 flex flex-col w-full lg:w-[85%] lg:ml-[15%] h-screen items-center bg-[#000000] z-50">
          <div className="flex flex-col items-start justify-center w-full h-[8vh] px-6 py-4 ">
            <button
              className="text-white text-2xl"
              onClick={() => closeModal()}
            >
              <AiOutlineClose />
            </button>
          </div>

          <form
            id="post-form"
            className="flex h-full flex-col items-center w-full overflow-y-auto py-6 md:px-6"
            onSubmit={(e) => handleSubmitPost(e)}
            method="post"
            encType="multipart/form-data"
          >
            <div className="flex flex-col md:w-[70%] px-8">
              <div className="flex items-center">
                <Image
                  width={480}
                  height={920}
                  className="h-8 w-8 rounded-full"
                  src={profile}
                  alt="Imagem de perfil do usuário"
                />
                <h2 className="text-white ml-2">matheusosan</h2>
              </div>
              <textarea
                className="break-words w-full h-auto bg-inherit text-base py-4 mb-2 lg:mb-6 text-white text-left placeholder:text-white focus:outline-none resize-none"
                value={description}
                placeholder="Digite a descrição da postagem"
                onChange={handleDescriptionChange}
              />

              <>
                {!selectedFile && (
                  <div
                    className="flex items-center justify-center border-2 border-dashed border-[#ccc] p-5 text-center h-[250px] lg:h-[320px]"
                    {...getRootProps()}
                  >
                    <input
                      value={selectedFile}
                      onChange={handleFileChange}
                      {...getInputProps()}
                    />
                    {isDragActive ? (
                      <p className="text-white">Solte a foto/video aqui</p>
                    ) : (
                      <p className="text-white select-none cursor-pointer">
                        Arraste uma foto ou vídeo aqui ou clique para
                        selecionar.
                      </p>
                    )}
                  </div>
                )}

                {selectedFile && (
                  <div className="relative flex items-center justify-center">
                    <Image
                      className="w-full aspect-auto"
                      src={URL.createObjectURL(selectedFile)}
                      alt="Imagem para postar"
                      width={500}
                      height={500}
                    />
                    <button
                      className="absolute right-4 top-4 p-4"
                      onClick={cleanFile}
                    >
                      <AiOutlineClose size={28} className="text-white" />
                    </button>
                  </div>
                )}
              </>
            </div>
          </form>

          <div className="flex justify-center items-center w-full h-[7vh] bottom-0 px-10 py-6 border-t-[1px] border-gray-200">
            <button type="submit" form="post-form" className="text-white">
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CreatePost;

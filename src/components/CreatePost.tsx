"use client";

import React from "react";
import { useHandlePost } from "@/hooks/useHandlePost";
import * as Ibs from "react-icons/bs";
import * as Iai from "react-icons/ai";
import { useModalStore } from "@/state/modal-state";
import Image from "next/image";

function CreatePost() {
  const {
    description,
    selectedFile,
    handleDescriptionChange,
    handleFileChange,
    cleanFile,
    handleSubmit,
  } = useHandlePost();

  const { closeModal } = useModalStore();

  return (
    <div className="flex flex-col w-full h-full items-center z-50">
      <div className="flex flex-col items-start justify-center w-full h-[8vh] px-6 py-4 ">
        <button className="text-white text-2xl" onClick={() => closeModal()}>
          <Iai.AiOutlineClose />
        </button>
      </div>

      <form
        id="post-form"
        className="flex h-full flex-col items-center   w-full overflow-y-auto py-6"
        onSubmit={handleSubmit}
        method="post"
        encType="multipart/form-data"
      >
        <div className="flex items-center w-full px-12">
          <Image
            width={480}
            height={920}
            className="h-8 w-8 rounded-full"
            src=""
            alt="Imagem de perfil do usuário"
          />
          <h2 className="text-white ml-2">matheusosan</h2>
        </div>

        <textarea
          className="break-words w-full h-auto bg-inherit text-xs px-12 py-4 mb-6 text-white text-left  placeholder:text-white focus:outline-none resize-none"
          value={description}
          placeholder="Digite a descrição da postagem"
          onChange={handleDescriptionChange}
        />

        <input
          className="hidden"
          id="file-input"
          name="file"
          type="file"
          onChange={handleFileChange}
        />

        {selectedFile && (
          <div className="relative border-[1px] border-gray-200 w-[80%] h-auto">
            <Image
              width={480}
              height={920}
              src={selectedFile && URL.createObjectURL(selectedFile)}
              className="w-full bg-fit aspect-auto"
              alt=""
            />
            <Iai.AiOutlineClose
              className="absolute top-0 right-0 p-2 text-white cursor:pointer
              "
              size={32}
              onClick={() => cleanFile()}
            />
          </div>
        )}

        {!selectedFile && (
          <div className="relative flex items-center justify-center border-[1px] rounded-md border-gray-200 w-[80%] h-[300px]">
            <label htmlFor="file-input" className="text-white cursor:pointer">
              <Ibs.BsFillImageFill size={64} className="text-white/75 " />
            </label>
          </div>
        )}
      </form>

      <div className="flex justify-center items-center w-full h-[7vh] bottom-0 px-10 py-6 border-t-[1px] border-gray-200">
        <button type="submit" form="post-form" className="text-white">
          Publicar
        </button>
      </div>
    </div>
  );
}

export default CreatePost;

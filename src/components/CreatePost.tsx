"use client";

import React from "react";
import useHandleInput from "@/hooks/useHandleInput";
import * as I from "react-icons/bs";
import { useModalStore } from "@/app/state/modal-state";

function CreatePost() {
  const {
    description,
    selectedFile,
    handleDescriptionChange,
    handleFileChange,
    handleSubmit,
  } = useHandleInput();

  const { closeModal } = useModalStore();

  return (
    <div className="flex flex-col w-full h-full items-center z-50">
      <div className="relative top-0 flex flex-col items-start justify-center w-full px-6 py-4">
        <button className="text-white text-2xl" onClick={() => closeModal()}>
          X
        </button>
      </div>
      <div className="flex items-center w-full px-12">
        <img
          className="h-8 w-8 rounded-full"
          src="https://media.licdn.com/dms/image/D4D03AQEf783BDuouxg/profile-displayphoto-shrink_800_800/0/1671417760869?e=1698883200&v=beta&t=B0Sk36YmlVlqxq3uuX0qk9gEGYwM_ODBPKwAtOZo35w"
          alt=""
        />
        <h2 className="text-white ml-2">matheusosan</h2>
      </div>

      <form
        className="flex flex-col items-center w-full overflow-y-auto"
        onSubmit={handleSubmit}
        method="post"
        encType="multipart/form-data"
      >
        <textarea
          className="break-words w-full h-auto bg-inherit text-xs px-12 py-4 text-white text-left  placeholder:text-white focus:outline-none resize-y"
          value={description}
          placeholder="Digite a descrição da postagem"
          onChange={handleDescriptionChange}
        />
        <div className="flex-1 w-[90%] flex items-center justify-center border-2 border-gray-200">
          {selectedFile && (
            <img
              src={selectedFile && URL.createObjectURL(selectedFile)}
              className="w-full aspect-auto"
              alt=""
            />
          )}

          {!selectedFile && (
            <h2 className="text-white text-center py-16">Paste a file here!</h2>
          )}
        </div>

        <div className="absolute flex justify-between items-center w-full bottom-0 px-10 py-2 border-t-2 border-gray-200">
          <input
            className="hidden"
            id="file-input"
            name="file"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <label htmlFor="file-input" className="text-white">
            <I.BsFillImageFill size={24} />
          </label>
          <button type="submit" className="text-white">
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;

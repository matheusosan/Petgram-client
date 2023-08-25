"use client";

import React from "react";
import useHandleInput from "@/hooks/useHandleInput";

function CreatePost() {
  const {
    description,
    selectedFile,
    handleDescriptionChange,
    handleFileChange,
    handleSubmit,
  } = useHandleInput();

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <input
            name="file"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;

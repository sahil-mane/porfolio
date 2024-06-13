// import React from 'react'

import { useState } from "react"
import { uploadImage } from "../../../helpers/uploadImage";
import axios from "axios";

const CreateProject = () => {
  
  const [name , setName] = useState("");
  const [desc , setDesc] = useState("");
  const [selectedImg, setSelectedImg] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [hostedUrl, setHostedUrl] = useState("");

  const handleImg = (e) => {
    const file = e.target.files[0];
    setSelectedImg(file);
    console.log(file);
  }

  const addProject = async (e) => {
    e.preventDefault(); 

    if(!name || !desc || !selectedImg) {
      return console.log("Please fill all the required fields");
    }

    const uploadedImg = await uploadImage(selectedImg);

    if(!uploadedImg) {
      return console.log("image not uploaded");
    }

    try {
      const res = await axios.post("http://localhost:9000/api/addProject",{
        name,
        desc,
        githubUrl,
        hostedUrl,
        secureUrl: uploadedImg.secureUrl,
        publicId: uploadedImg.publicId,
        deleteToken: uploadedImg.deleteToken,
      });
      console.log(res)
      alert(res.data.message);

      setName("");
      setDesc("");
      setSelectedImg("");
      setGithubUrl("");
      setHostedUrl("");

    } catch (error) {
      console.log(error);
    }

  }



  return (
    <div className="p-3 backdrop-blur-3xl rounded-md w-fit mx-auto md:mt-10">
      <h1 className="text-3xl lg:text-5xl text-white mb-5 gradient-text">Create Project</h1>
      <form className="flex flex-col gap-3" onSubmit={addProject}>
        <input
          className="rounded-full bg-transparent text-white text-xl border-2 border-purple-500 p-4 placeholder-purple-400 focus:text-white focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full lg:w-[40vw]"
          type="text"
          name="name"
          id="name"
          placeholder="Project Name"
          onChange={(e)=> setName(e.target.value)}
          value={name}
          required
        />
        <textarea
          className="rounded-lg bg-transparent text-white text-xl border-2 border-purple-500 p-4 placeholder-purple-400 focus:text-white focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full lg:w-[40vw]"
          name="desc"
          id="desc"
          cols="30"
          rows="5"
          placeholder="Project Description"
          onChange={(e)=> setDesc(e.target.value)}
          value={desc}
          required
        />
        <div>
          <label
            htmlFor="img"
            className="text-white text-xl gradient-text">
            Project Image:
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-purple-700 bg-transparent px-3 py-2 text-sm text-white file:border-0 file:bg-transparent file:text-purple-400 file:text-sm file:font-medium"
            type="file"
            name="img"
            id="img"
            accept="image"
            onChange={handleImg}
            required />
        </div>
        <input
          className="rounded-full bg-transparent text-white text-xl border-2 border-purple-500 p-4 placeholder-purple-400 focus:text-white focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full lg:w-[40vw]"
          type="url"
          name="githubUrl"
          id="githubUrl"
          onChange={(e)=> setGithubUrl(e.target.value)}
          value={githubUrl}
          placeholder="Github Url"
        />
        <input
          className="rounded-full bg-transparent text-white text-xl border-2 border-purple-500 p-4 placeholder-purple-400 focus:text-white focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full lg:w-[40vw]"
          type="url"
          name="hostedUrl"
          id="hostedUrl"
          onChange={(e)=> setHostedUrl(e.target.value)}
          value={hostedUrl}
          placeholder="hosted Url"
        />        
        <button
        className="cursor-pointer text-white w-1/2 mx-auto font-bold shadow-md hover:scale-[1.2] transition-all shadow-purple-400 rounded-full px-5 py-2 bg-gradient-to-bl from-purple-500 to-purple-800" 
        type="submit">
          Add Project
        </button>
      </form>
    </div>
  )
}

export default CreateProject
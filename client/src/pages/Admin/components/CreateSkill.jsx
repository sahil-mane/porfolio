// import React from 'react'
import axios from "axios";

import { useState } from "react"

const CreateSkill = () => {
    const [skill, setSkill] = useState("");
    const [level, setLevel] = useState(0);

  const onSubmitSkill = async (e) =>{    
    e.preventDefault();
    if( skill === "" || level === 0)
      {
        alert("please fill all the fields");
        return; // exit the function to avoid making the api call
      }
     
    if(level>=1 && level <= 5)
      {
        try{
          const res = await axios.post("http://localhost:9000/api/addSkill",{
            skill,
            level,
          });
          console.log(res.data);
          alert(res.data.message);
          setSkill("");
          setLevel(0);
        } catch (error) {
          console.log(error)
        }    
      } else
      {
        alert("Level should be between 1 and 5");
      } 
  };

  return (
    <div className="p-3 backdrop-blur-3xl rounded-md w-fit mx-auto lg:mt-10">
      <h1 className="text-3xl lg:text-5xl text-white mb-5 gradient-text">Create Skill</h1>
      <form className="flex flex-col gap-3" onSubmit={onSubmitSkill}>
        <input
          type="text"
          name="skill"
          id="skill"
          onChange={(e)=> setSkill(e.target.value)}
          value={skill}
          className="rounded-full bg-transparent text-white text-xl border-2 border-purple-500 p-4 placeholder-purple-400 focus:text-white focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full lg:w-[40vw]"
          placeholder="Enter New Skill"
          required
        />
        <input
          type="tel"
          name="level"
          id="level"
          onChange={(e)=> setLevel(e.target.value)}
          value={level}
          className="rounded-full bg-transparent text-white text-xl border-2 border-purple-500 p-4 placeholder-purple-400 focus:text-white focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full lg:w-[40vw]"
          placeholder="Not More than 5"
          required
        />
        {/* <button type="submit">Add Skill</button> */}
        <button
        type="submit"
          className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-purple-500 bg-purple-500 group hover:bg-purple-600 active:bg-purple-700 mx-auto"
        >
          <span
            className="text-gray-200 font-semibold ml-8 transform group-hover:translate-x-10 transition-all duration-300"
          >
            Add Skill
          </span>
          <span
            className="absolute right-0 h-full w-10 rounded-lg bg-purple-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
          >
            <svg
              className="svg w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </span>
        </button>
      </form>
    </div>
  )
}

export default CreateSkill
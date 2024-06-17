// import React from 'react'

// import { useState } from "react"
import { useEffect, useState } from "react"
import SkillsCard from "./SkillsCard"
import axios from "axios";
// import Realcard from "./Realcard";
// import kamal from "../assets/kamal_bhaiya.png"


const SkiilsSection = () => {

  const [data, setData] = useState([]);

  const getAllSkills = async () => {
    try {
      const res = await axios.get("http://localhost:9000/api/getSkills");
      if (res.data.success) {
        console.log(res.data.skills);
        setData(res.data.skills);
      }
      else {
        console.log("Failed to fetch skills");
      }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getAllSkills();
  }, [])

  //  console.log(data)
  return (
    <>
      <div data-aos="fade-right" className="mb-20 lg:mb-36">
        <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Skills</h1>
        {/* <button
          onClick={toggleView}
          className="mb-4 px-4 py bg-violet-600 text-white rounded"
        >
          {card ? "card" : "list"}
        </button>
        
          {card ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Realcard title={"ReactJs"} img={kamal} value={45} />
              <Realcard title={"ReactJs"} img={kamal} value={45} />
              <Realcard title={"ReactJs"} img={kamal} value={45} />
              <Realcard title={"ReactJs"} img={kamal} value={45} />
            </div>
          ) : (
            <div className="h-[300px] overflow-y-scroll select-none scroll-bar">
            <SkillsCard title={"ReactJS"} value={75} />
            <SkillsCard title={"NextJS"} value={40} />
            <SkillsCard title={"MongoDB"} value={65} />
            <SkillsCard title={"TailwindCss"} value={80} />
            <SkillsCard title={"NodeJS"} value={70} />
            </div>
          )}          */}
        <div className="h-[300px] overflow-y-scroll select-none scroll-bar">
          {/* <SkillsCard title={"ReactJS"} value={75} />
            <SkillsCard title={"NextJS"} value={40} />
            <SkillsCard title={"MongoDB"} value={65} />
            <SkillsCard title={"TailwindCss"} value={80} />
            <SkillsCard title={"NodeJS"} value={70} /> */}
          {data.map((data,index) => (
              <SkillsCard key={index} title={data.skill} value={data.level} />
            ))}
        </div>
      </div>
    </>
  )
}

export default SkiilsSection
// import React from 'react'

// import { useState } from "react"
import SkillsCard from "./SkillsCard"
// import Realcard from "./Realcard";
// import kamal from "../assets/kamal_bhaiya.png"


const SkiilsSection = () => {
   const data = [
    {
      title:"ReactJs",
      value:75
    },
    {
      title:"NextJs",
      value:40
    },
    {
      title:"MongoDB",
      value:65
    },
    {
      title:"TailwindCss",
      value:80
    },
    {
      title:"NodeJS",
      value:70
    },    
   ]

   console.log(data)
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
              <SkillsCard key={index} title={data.title} value={data.value} />
            ))}
            </div>
      </div>
    </>
  )
}

export default SkiilsSection
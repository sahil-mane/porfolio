// import React from 'react'

import ProjectCard from "./ProjectCard"

const ProjectSection = () => {   
    const data = [
        {   name:"portfolio",
            description:"A portfolio website for a web developer",
            tech:"MERN STACK"
        },
        {   name:"portfolio 2",
            description:"A portfolio website for a web developer",
            tech:"MERN STACK"
        },
        {   name:"portfolio 3",
            description:"A portfolio website for a web developer",
            tech:"MERN STACK"
        },
        {   name:"portfolio 4",
            description:"A portfolio website for a web developer",
            tech:"MERN STACK"
        },
        {   name:"portfolio 5",
            description:"A portfolio website for a web developer",
            tech:"MERN STACK"
        }
    ] 
  return (
    <>
<div className="">
    <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Project</h1>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-10 mx-3 lg:mx-0">
        {/* <ProjectCard name={"portfolio"} tech="MERN STACK" description="this webaite is for starter's" />
        <ProjectCard name={"portfolio 2"} tech="MERN STACK" description="this webaite is for starter's" />
        <ProjectCard name={"portfolio 3"} tech="MERN STACK" description="this webaite is for starter's" />
        <ProjectCard name={"portfolio 4"} tech="MERN STACK" description="this webaite is for starter's" />
        <ProjectCard name={"portfolio 5"} tech="MERN STACK" description="this webaite is for starter's" />
        <ProjectCard name={"portfolio 6"} tech="MERN STACK" description="this webaite is for starter's" /> */}
        {data.map((data,index)=>(
            <ProjectCard key={index} name={data.name} tech={data.tech} description={data.description} />
        ))}
    </div>
</div>
    </>
  )
}

export default ProjectSection

/*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=7b29bf&c2=3a017f&gt=l&gd=dcl
*/
// background: #7B29BF;
// background: linear-gradient(90deg, #7B29BF, #3A017F);
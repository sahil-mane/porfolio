// import React from 'react'

import ProjectCard from "./ProjectCard"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";

const ProjectSection = () => {
    const scrollRefs = useRef(null);

    const LeftScroll = () => {
        scrollRefs.current.scrollLeft -= 500;
    }

    const RightScroll = () => {
        scrollRefs.current.scrollLeft += 500;
    }

    const data = [
        {
            name: "portfolio",
            description: "A portfolio website for a web developer",
            tech: "MERN STACK"
        },
        {
            name: "portfolio 2",
            description: "A portfolio website for a web developer",
            tech: "MERN STACK"
        },
        {
            name: "portfolio 3",
            description: "A portfolio website for a web developer",
            tech: "MERN STACK"
        },
        {
            name: "portfolio 4",
            description: "A portfolio website for a web developer",
            tech: "MERN STACK"
        },
        {
            name: "portfolio 5",
            description: "A portfolio website for a web developer",
            tech: "MERN STACK"
        },
        {
            name: "portfolio 6",
            description: "A portfolio website for a web developer",
            tech: "MERN STACK"
        },
        {
            name: "portfolio 7",
            description: "A portfolio website for a web developer",
            tech: "MERN STACK"
        },
    ]
    return (
        <>
            <div data-aos="fade-down" className="mb-20 lg:mb-36">
                <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Project</h1>
                <div ref={scrollRefs} className="flex gap-5 lg:gap-20  overflow-x-auto overflow-y-hidden lg:p-4 scroll-hide ">
                    {data.map((data, index) => (
                        <ProjectCard key={index} name={data.name} tech={data.tech} description={data.description} />
                    ))}
                </div>
                <div className="flex justify-center gap-2 items-center mt-3">
                    <FaArrowLeft onClick={LeftScroll} className="text-yellow-400 hidden lg:block" />
                    <h3 className="text-2xl font-bold gradient-text ">Slide for more</h3>
                    <FaArrowRightLong onClick={RightScroll} className="text-yellow-400 hidden lg:block" />
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
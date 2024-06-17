// import React from 'react'

import ProjectCard from "./ProjectCard"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const ProjectSection = () => {
    const [data,setData] = useState([]);
    const scrollRefs = useRef(null);

    const LeftScroll = () => {
        scrollRefs.current.scrollLeft -= 500;
    }

    const RightScroll = () => {
        scrollRefs.current.scrollLeft += 500;
    }

    const getAllProject = async() => {
        try {
            const res = await axios.get("http://localhost:9000/api/getProjects");
            console.log(res.data.projects[0].name);
            console.log(res.data.projects[0].img);
            console.log(res.data.projects[0].desc);
            console.log(res.data.projects[0].githubUrl);
            console.log(res.data.projects[0].hostedUrl);
            if(res.data.success)
                {
                    setData(res.data.projects);
                }
                else
                {
                    console.log("Failed to fetch projects");
                }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {       
        getAllProject();
    }, []);
    

   
    return (
        <>
            <div data-aos="fade-down" className="mb-20 lg:mb-36">
                <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Project</h1>
                <div ref={scrollRefs} className="flex gap-5 lg:gap-12  overflow-x-auto overflow-y-hidden lg:p-4 scroll-hide ">
                    {data.map((data, index) => (
                        <ProjectCard key={index} name={data.name} description={data.desc} image={data.img} githubUrl={data.githubUrl} hostedUrl={data.hostedUrl} />
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
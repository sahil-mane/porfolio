/* eslint-disable react/prop-types */
// import React from 'react'
import { FaGithub } from "react-icons/fa";
import { RiSignalTowerFill } from "react-icons/ri";

const ProjectCard = ({ name, tech, description }) => {
    return (
        <>
            <div className="p-5 -m-4">
                <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-72 w-56  rounded-2xl hover:duration-700 lg:hover:scale-110 transition-all">
                    <div className="w-56 h-72 text-gray-800" style={{ background: 'linear-gradient(90deg, #7B29BF, #3A017F)' }}>
                        <img src="" alt="remain" />
                    </div>
                    <div className="absolute bg-transparent -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                        <span className="text-gray-200 font-bold text-3xl">{name}</span>
                        <span className="font-bold text-xs ">{tech}</span>
                        <p className="text-neutral-200">{description}</p>
                        <div className="flex justify-center gap-3">
                            <button type="button" className="px-4 py-2 rounded-md flex items-center gap-2 border-2 border-white hover:underline hover:capitalize" style={{ background: 'linear-gradient(90deg, #7B29BF, #3A017F)' }}><FaGithub />github</button>
                            <button type="button" className="px-4 py-2 rounded-md flex items-center gap-2 border-2 border-white hover:underline hover:capitalize" style={{ background: 'linear-gradient(90deg, #7B29BF, #3A017F)' }}><RiSignalTowerFill />live</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RiSignalTowerFill } from "react-icons/ri";
import { MdOutlineInfo } from "react-icons/md";

// Modal Component
const Modal = ({ show, onClose, description,name }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-transparent backdrop-blur-xl flex justify-center items-center">
            <div className="bg-transparent text-white p-5 rounded-lg w-1/2  border-2 border-white">
                <h2 className="text-xl font-semibold mb-4">Project Details</h2>
                <hr />
                <h1 className="text-3xl text-center my-2">{name}</h1>
                <p>{description}</p>
                <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

const ProjectCard = ({ name, description, image, githubUrl, hostedUrl }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    // height: 327px;
    // width: 224px;
    // https://vahan-client.vercel.app/
    // https://porfolio-api-alpha.vercel.app/

    return (
        <>
            <div className="p-5 m-4">
                <div className="border-2 border-white bg-transparent backdrop-blur-xl text-white p-3 rounded-xl w-[224px] h-[327px]">
                    <img src={image} className="h-32 w-40 mx-auto rounded-xl" alt={name} />
                    <div className="flex flex-col gap-3 my-4">
                        <button>
                            <a href={githubUrl} className="flex items-center gap-2 cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                                border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" target="_blank" rel="noopener noreferrer">
                                <FaGithub /> GitHub
                            </a>
                        </button>
                        <button>
                            <a href={hostedUrl} className="flex items-center gap-2 cursor-pointer transition-all bg-purple-500 text-white px-6 py-2 rounded-lg
                                border-purple-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" target="_blank" rel="noopener noreferrer">
                                <RiSignalTowerFill /> Live Demo
                            </a>
                        </button>
                        <button onClick={toggleModal} className="flex items-center gap-2 cursor-pointer transition-all bg-indigo-500 text-white px-6 py-2 rounded-lg
                            border-indigo-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                            <MdOutlineInfo /> More Info
                        </button>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onClose={toggleModal} description={description} name={name} />
        </>
    );
};

export default ProjectCard;

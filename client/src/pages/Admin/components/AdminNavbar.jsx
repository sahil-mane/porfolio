// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { toggle } from "../../../redux/slices/navSlice"
import { setPage } from "../../../redux/slices/pageSlice";
import { logout } from "../../../redux/slices/authSlice";
import axios from "axios";
axios.defaults.withCredentials = true;

const AdminNavbar = () => {
    const toggleNav = useSelector((state)=> state.nav.toggleNav);
    const dispatch = useDispatch();
    console.log(toggleNav);

    const logoutUser = async() => {
        alert("Are you sure to Logout")
        const res = await axios.get("http://localhost:9000/api/logout",{
            withCredentials: true,
        });
        if(res.data.success)
            {
                dispatch(logout());
            }
    }; 
    
    return (
        <>
            <nav className={`bg-white bg-opacity-10 backdrop-blur-xl text-white w-screen z-10 rounded-xl lg:rounded-none fixed lg:static h-screen lg:h-fit flex flex-col lg:flex-row justify-evenly items-center lg:justify-between border border-none lg:border-gray-500 py-10 lg:py-3 lg:px-2 lg:translate-x-0 transition-all delay-100 ease-in-out ${toggleNav ? "translate-x-0" : "-translate-x-full"}`}>
            <AiOutlineClose className="absolute top-5 right-5 text-lg hover:scale-125 cursor-pointer hover:text-pink-500 transition-all lg:hidden" onClick={()=> dispatch(toggle())} />
                <ul className="text-2xl flex justify-center flex-col lg:flex-row gap-3 lg:gap-2">
                    <li className="text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60 hover:shadow-lg px-2 py-1 transition-all outline-none rounded-md" 
                    onClick={()=>{
                        dispatch(setPage("CreateProject"))
                        dispatch(toggle())
                    }}
                    >Create Project</li>
                    <li className="text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60 hover:shadow-lg px-2 py-1 transition-all outline-none rounded-md"
                    onClick={()=>{
                        dispatch(setPage("CreateSkill"))
                        dispatch(toggle())
                    }}
                    >Create Skill</li>
                    <li className="text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60 hover:shadow-lg px-2 py-1 transition-all outline-none rounded-md"
                    onClick={()=>{
                        dispatch(setPage("AllProjects"))
                        dispatch(toggle())
                    }}
                    >All Projects</li>
                    <li className="text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60 hover:shadow-lg px-2 py-1 transition-all outline-none rounded-md"
                    onClick={()=>{
                        dispatch(setPage("AllSkills"))
                        dispatch(toggle())
                    }}
                    >All Skills</li>
                </ul>
                <button className="text-2xl px-2 py-1 text-center hover:bg-gradient-to-tr from-purple-800 to-indigo-800  hover:bg-opacity-60 hover:shadow-lg rounded-lg transition-all outline-none " onClick={logoutUser}>Logout</button>
            </nav>
        </>
    )
}

export default AdminNavbar;
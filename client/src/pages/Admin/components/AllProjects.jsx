// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../../../redux/slices/userSlice";
import { MdDelete, MdEdit } from "react-icons/md"
import { TiTick } from "react-icons/ti"
import { getSignature } from "../../../helpers/getSignature";
import { deleteImage } from "../../../helpers/deleteImage";

const AllProjects = () => {

  const [edit, setEdit] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newGithubUrl, setNewGithubUrl] = useState("");
  const [newHostedUrl, setNewHostedUrl] = useState("");
  const [selectedImg, setSelectedImg] = useState("");

  const dispatch = useDispatch();
  const projects = useSelector((state) => state.user.projects);

  const deleteProject = async (id,public_id) => {
    alert("Are you sure you want to delete this project?");
    const signature = await getSignature(public_id);
    console.log("Signature generated while deleting",
      signature
    );

    // Delete image from cloudinary 
    const newData = await deleteImage(public_id, signature);

    //Delete project from database
    const delProj = await axios.delete(
      `http://localhost:9000/api/removeProject/${id}`
    );

    const data = await delProj.data;
    alert(data.message);

    getAllProject(); 

    };
    // try {
    //   const res = await axios.delete("http://localhost:9000/api/removeProject/" + id);
    //   console.log(res);
    //   // setData(data.filter(project => project._id !== id));
    // } catch (error) {
    //   console.log(error);
    // }

  const getAllProject = async () => {
    const res = await axios.get("http://localhost:9000/api/getProjects");
    if (res.data.success) {
      // console.log(res.data.projects);
      // setData(res.data.projects);
      dispatch(setProjects(res.data.projects));
    }
    else {
      return alert("Data not found");
    }
  };

  const handleImg = (e) => {
    const file = e.target.files[0];
    setSelectedImg(file);
    console.log(file);
  }

  const updateProject = async(id , public_id) =>{

  }


  useEffect(() => {


    getAllProject();
  }, [])

  console.log("projects======>>>>>", projects)

  return (
    <div className="flex flex-col justify-center items-center gap-5 text-white lg:h-[80vh]">
      {projects.map((project) => {
        return (
          <div key={project._id} className="flex flex-col border-2 w-[80vw] lg:w-[45vw] rounded-lg px-2 py-2 gap-3">
            <div className="flex flex-col lg:flex-row justify-between gap-5">
              <img src={project.img} alt={project.name}  className={` w-fit h-[180px] lg:w-[200px] lg:h-52 lg:my-auto mx-auto lg:mx-0  ${edit && "hidden"  }`} />
              <input type="file" name="img" id="img" accept="img" className={` lg:my-auto ${edit ? "block" : "hidden"}`} onChange={handleImg} />
              <div className="flex flex-col gap-1">
                <h1 className={`text-xl lg:text-3xl ${edit && selectedProject === project._id && "bg-indigo-500 bg-opacity-30"}`}>
                  {edit ? (<input type="text" name="name" id="name" value={selectedProject === project._id ? newName : project.name} className="w-full bg-transparent" onChange={(e)=>setNewName(e.target.value)} />) : (project.name)}
                </h1>
                <div>
                  <label htmlFor="desc">Desc : </label>
                  <h1 className={`text-sm lg:text-base text-gray-300 ${ edit && selectedProject === project._id && "bg-indigo-500 bg-opacity-30"}`}>
                    {edit ? (<input type="text" name="desc" id="desc" value={selectedProject===project._id ? newDesc : project.desc} className="w-full bg-transparent" onChange={(e)=>setNewDesc(e.target.value)} />) : (project.desc)}
                  </h1>
                </div>
                <div>
                  <label htmlFor="githubUrl">Github : </label>
                  <h1 className={`text-sm lg:text-base text-gray-300 ${edit && selectedProject === project._id && "bg-indigo-500 bg-opacity-30"}`}>
                    {edit ? (<input type="text" name="githubUrl" id="githubUrl" value={selectedProject === project._id ? newGithubUrl : project.githubUrl} className="w-full bg-transparent" onChange={(e)=>setNewGithubUrl(e.target.value)} />) : (project.githubUrl)}
                  </h1>
                </div>
                <div>
                  <label htmlFor="hostedUrl">Hosted : </label>
                  <h1 className={`text-sm lg:text-base text-gray-300 ${edit && selectedProject === project._id && "bg-indigo-500 bg-opacity-30"}`}>
                    {edit ? (<input type="text" name="hostedUrl" id="hostedUrl" value={selectedProject === project._id ? newHostedUrl : project.hostedUrl} className="w-full bg-transparent" onChange={(e)=>setNewHostedUrl(e.target.value)} />) : (project.hostedUrl)}
                  </h1>
                </div>
              </div>
              <div className="flex lg:flex-col justify-between items-center rounded-lg gap-3 px-3 lg:px-1 py-2 bg-indigo-500 bg-opacity-30">
                <MdEdit
                className={`text-lg hover:scale-125 transition-all ease-in-out delay-100 cursor-pointer hover:text-red-500 ${edit && selectedProject === project._id ? "hidden":"block"}`}
                onClick={()=>{
                  setEdit(!edit);
                  setSelectedProject(project._id);
                  setNewName(project.name);
                  setNewDesc(project.desc);
                  setNewGithubUrl(project.githubUrl);
                  setNewHostedUrl(project.hostedUrl);
                }}
                 />
                <TiTick
                className={`text-lg hover:scale-125 transition-all ease-in-out delay-100 cursor-pointer hover:text-red-500 ${edit && selectedProject === project._id ? "block":"hidden"}`}
                onClick={()=> updateProject(project._id, project.publicId)}
                />
                <MdDelete
                  className={`text-lg hover:scale-125 transition-all ease-in-out delay-100 cursor-pointer hover:text-red-500 ${edit && selectedProject === project._id ? "hidden":"block"}`}
                  onClick={()=> deleteProject(project._id,project.publicId)}
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
    // <div className="p-3 backdrop-blur-lg rounded-md lg:w-3/4 mx-auto md:mt-10 flex flex-col items-center overflow-x-auto">
    //   <h1 className="text-3xl lg:text-5xl text-white mb-5 gradient-text w-full">All Projects ({data.length})</h1>
    //   <table className="mx-auto w-1/2 lg:w-full border-spacing-4 text-center text-white border-separate ">
    //     <thead>
    //       <tr>
    //         <th className="border border-slate-300 rounded-lg lg:text-2xl px-4 py-2">no.</th>
    //         <th className="border border-slate-300 rounded-lg text-2xl px-4 py-2">Name</th>
    //         <th className="border border-slate-300 rounded-lg text-2xl px-4 py-2 hidden lg:block">Description</th>
    //         <th className="border border-slate-300 rounded-lg text-2xl px-4 py-2">Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data &&
    //         Object.values(data).map((data, index) => {
    //           return (
    //             <tr key={data._id}>
    //               <td className="border border-slate-300 rounded-lg px-4 py-2 ">{index + 1}</td>
    //               <td className="border border-slate-300 rounded-lg px-4 py-2 ">{data.name}</td>
    //               <td className="border border-slate-300 rounded-lg  px-4 py-4 hidden lg:block">{data.desc}</td>
    //               <td className="border border-none rounded-lg px-4 py-2">
    //                 <div className="flex gap-2">
    //                 <button
    //                   type="button"
    //                   className="bg-purple-500 hover:scale-110 transition-transform  p-2 border-2 border-white w-full rounded-lg  lg:hover:scale-x-125"
    //                   onClick={()=> editProject(data)}
    //                 >
    //                   update
    //                 </button>
    //                 <button
    //                   type="button"
    //                   className="bg-purple-500 hover:scale-110 transition-transform  p-2 border-2 border-white w-full rounded-lg  lg:hover:scale-x-125"
    //                   onClick={()=> deleteProject(data._id)}
    //                 >
    //                   Delete
    //                 </button>
    //                 </div>
    //               </td>
    //             </tr>
    //           )
    //         })
    //       }

    //     </tbody>
    //   </table>
    // </div>
  )
}
// 1:05:04 hr:min:sec
export default AllProjects
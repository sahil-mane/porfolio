// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";

const AllProjects = () => {

  const [data, setData] = useState([]);

  const deleteProject = async (id) => {
    try {
      const res = await axios.delete("http://localhost:9000/api/removeProject/"+id);
    console.log(res);
    setData(data.filter(project => project._id !== id));
    } catch (error) {
      console.log(error);
    }    
  };

  const editProject = (data) => {
    console.log(data);
  }

  useEffect(() => {
    const getAllProject = async () => {
      const res = await axios.get("http://localhost:9000/api/getProjects");
      if (res.data.success) {
        // console.log(res.data.projects);
        setData(res.data.projects);
      }
      else {
        return alert("Data not found");
      }
    };

    getAllProject();
  }, [])

  console.log(data)

  return (
    <div className="p-3 backdrop-blur-lg rounded-md lg:w-3/4 mx-auto md:mt-10 flex flex-col items-center overflow-x-auto">
      <h1 className="text-3xl lg:text-5xl text-white mb-5 gradient-text w-full">All Projects ({data.length})</h1>
      <table className="mx-auto w-1/2 lg:w-full border-spacing-4 text-center text-white border-separate ">
        <thead>
          <tr>
            <th className="border border-slate-300 rounded-lg lg:text-2xl px-4 py-2">no.</th>
            <th className="border border-slate-300 rounded-lg text-2xl px-4 py-2">Name</th>
            <th className="border border-slate-300 rounded-lg text-2xl px-4 py-2 hidden lg:block">Description</th>
            <th className="border border-slate-300 rounded-lg text-2xl px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            Object.values(data).map((data, index) => {
              return (
                <tr key={data._id}>
                  <td className="border border-slate-300 rounded-lg px-4 py-2 ">{index + 1}</td>
                  <td className="border border-slate-300 rounded-lg px-4 py-2 ">{data.name}</td>
                  <td className="border border-slate-300 rounded-lg  px-4 py-4 hidden lg:block">{data.desc}</td>
                  <td className="border border-none rounded-lg px-4 py-2">
                    <div className="flex gap-2">
                    <button
                      type="button"
                      className="bg-purple-500 hover:scale-110 transition-transform  p-2 border-2 border-white w-full rounded-lg  lg:hover:scale-x-125"
                      onClick={()=> editProject(data)}
                    >
                      update
                    </button>
                    <button
                      type="button"
                      className="bg-purple-500 hover:scale-110 transition-transform  p-2 border-2 border-white w-full rounded-lg  lg:hover:scale-x-125"
                      onClick={()=> deleteProject(data._id)}
                    >
                      Delete
                    </button>
                    </div>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}
// 1:05:04 hr:min:sec
export default AllProjects
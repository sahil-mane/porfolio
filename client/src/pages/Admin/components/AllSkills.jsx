// import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios";

const AllSkills = () => {
  const [data, setData] = useState([]);

  const deleteSkill = async (id) => {
    if (!window.confirm("Are you sure you want to delete this skill?")) return;

    try {
      const res = await axios.delete("http://localhost:9000/api/removeSkill/" + id);
      console.log(res);
      setData(data.filter(skill => skill._id !== id));
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    const getAllSkill = async () => {
      try {
        const res = await axios.get("http://localhost:9000/api/getSkills");

        if (res.data.success) {
          console.log(res.data.skills);
          setData(res.data.skills);
        }
        else {
          return console.warn("data not found");
        }
      } catch (error) {
        console.log(error)
      }
    };
    getAllSkill();
  }, []);

  return (
    <div className="p-3 backdrop-blur-lg rounded-md lg:w-1/2 mx-auto md:mt-10 flex flex-col items-center overflow-x-auto">
      <h1 className="text-3xl lg:text-5xl text-white mb-5 gradient-text w-full">All Skills({data.length})</h1>
      <table className="mx-auto w-1/2 lg:w-full border-spacing-4 text-center text-white border-separate ">
        <thead>
          <tr>
            <th className="border border-slate-300 rounded-lg lg:text-2xl px-4 py-2">no.</th>
            <th className="border border-slate-300 rounded-lg text-2xl px-4 py-2">Skill</th>
            <th className="border border-slate-300 rounded-lg text-2xl px-4 py-2">level</th>
            <th className="border border-slate-300 rounded-lg text-2xl px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            Object.values(data).map((data, index) => (
              <tr key={data._id}>
                <td className="border border-slate-300 rounded-lg px-4 py-2">{index + 1}</td>
                <td className="border border-slate-300 rounded-lg px-4 py-2">{data.skill}</td>
                <td className="border border-slate-300 rounded-lg px-4 py-2">{data.level}</td>
                <td className="border border-none rounded-lg px-4 py-2">
                  <button
                    type="button"
                    className="bg-purple-500 hover:scale-110 transition-transform  p-2 border-2 border-white w-full rounded-lg  lg:hover:scale-x-125"
                    onClick={() => deleteSkill(data._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>

    // <div className="p-3 backdrop-blur-lg rounded-md lg:w-1/2  mx-auto md:mt-10 flex flex-col items-center overflow-x-auto">
    //   <h1 className="text-3xl lg:text-5xl text-white mb-5 gradient-text w-full">All Skills</h1>
    //   <table className=" mx-auto w-1/2 lg:w-full border-spacing-4 text-center text-white border-separate">
    //     <thead>
    //       <tr>
    //         <th className="border border-slate-300 rounded-lg lg:text-2xl ">no.</th>
    //         <th className="border border-slate-300 rounded-lg text-2xl ">Skill</th>
    //         <th className="border border-slate-300 rounded-lg text-2xl ">level</th>
    //         <th className="border border-slate-300 rounded-lg text-2xl ">Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {Object.values(data).map((data, index) => {
    //         return (
    //           <tr key={data._id}>
    //             <td className="border border-slate-300 rounded-lg">{index + 1}</td>
    //             <td className="border border-slate-300 rounded-lg px-2">{data.skill}</td>
    //             <td className="border border-slate-300 rounded-lg">{data.level}</td>
    //             <td className="border border-none rounded-lg "><button type="button" className="bg-purple-500 hover:scale-110 transition-all lg:hover:underline p-2 border-2 border-white w-full lg:transform rounded-lg lg:hover:text-xl lg:hover:scale-x-110">Delete</button></td>
    //           </tr>
    //         )
    //       })}

    //     </tbody>
    //   </table>
    // </div>
  )
}

export default AllSkills
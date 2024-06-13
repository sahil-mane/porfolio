// import React from 'react'
import { useEffect } from "react"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setSkills } from "../../../redux/slices/userSlice";
import { MdDelete } from "react-icons/md";


const AllSkills = () => { 

  const dispatch = useDispatch();
  const skills = useSelector((state) => state.user.skills);

  const deleteSkill = async (id) => {
    if (!window.confirm("Are you sure you want to delete this skill?")) return;

    dispatch(setSkills(skills.filter(skill => skill._id !== id)));
    try {
      const res = await axios.delete("http://localhost:9000/api/removeSkill/" + id);
      console.log(res);
     
    } catch (error) {
      console.log(error);
    }
  };

  const getAllSkill = async () => {
    try {
      const res = await axios.get("http://localhost:9000/api/getSkills");

      if (res.data.success) {
        console.log(res.data.skills);
        dispatch(setSkills(res.data.skills));
      }
      else {
        return console.warn("data not found");
      }
    } catch (error) {
      console.log(error)
    }
  };

  console.log("Skillls=====>>>>>>>", skills);

  useEffect(() => {
    getAllSkill();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[80vh] gap-3">

        {skills.map((data) => {
          return (
            <div key={data._id} className="flex justify-between items-center text-white px-3 py-2 border w-[80vw] lg:w-[30vw] rounded-full" >
              <span>{data.skill}</span>
              <progress max={100} value={data.level * 20} className="progress-bar border border-white rounded-full" />
              <MdDelete className="hover:scale-125 transition-all ease-in-out delay-100 cursor-pointer hover:text-red-500" onClick={()=> deleteSkill(data._id)} />
            </div>
          )
        })}
      </div>

    </>
  )
}

export default AllSkills
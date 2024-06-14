import { useEffect, useState } from 'react'
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from '../../redux/slices/authSlice';
axios.defaults.withCredentials = true;

const AdminLogin = () => {
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();

  const dispatch = useDispatch();
 const navigate = useNavigate();
  

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:9000/api/login",{
      email,password
    });

    if (res.data.success === true)
      {
        dispatch(login());
        navigate("/admin");
      }
  };

  const checkUser = async() => {
    const res = await axios.get("http://localhost:9000/api/checkUser",{
      withCredentials: true,
    });
    const data = await res.data;
    if(data.success)
      {
        dispatch(login());
        navigate("/admin");
      }
  };
  
  useEffect(() => {  
    checkUser();
  }, []);
  

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen dark mx-1">
        <div className="w-full max-w-md bg-transparent backdrop-blur-xl rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Login</h2>
          <form className="flex flex-col gap-3" onSubmit={loginUser}>
            <input 
            placeholder="Enter Email " 
            className="rounded-full bg-transparent text-xl border-2 border-purple-500 p-4 placeholder-white focus:text-white focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 " 
            type="email" 
            name="email" 
            id="email" 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            />
            <input 
            placeholder="Enter Password" 
            className="rounded-full bg-transparent text-xl border-2 border-purple-500 p-4 placeholder-white focus:text-white focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 " 
            type="password" 
            name="password" 
            id="password"  
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            />
            <button 
            className="w-40 mx-auto h-12 bg-transparent cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out font-medium text-purple-400 hover:text-white"           
            type="submit"
            >             
              Submit              
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AdminLogin
//2:00:00 hrs:min:sec
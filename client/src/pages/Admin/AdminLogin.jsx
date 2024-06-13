// import React from 'react'

const AdminLogin = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen dark mx-1">
        <div className="w-full max-w-md bg-transparent backdrop-blur-xl rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Login</h2>
          <form className="flex flex-col gap-3">
            <input placeholder="Enter Email " className="rounded-full bg-transparent text-xl border-2 border-purple-500 p-4 placeholder-white focus:text-white focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 " type="email" name="email" id="email" />
            <input placeholder="Enter Password" className="rounded-full bg-transparent text-xl border-2 border-purple-500 p-4 placeholder-white focus:text-white focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 " type="password" name="password" id="password"  />
            <button className="w-40 mx-auto h-12 bg-transparent cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out" type="submit">
              <span className="font-medium text-purple-400 group-hover:text-white">Submit</span>
            </button>
          </form>
        </div>
      </div>

    </>
  )
}

export default AdminLogin
//2:00:00 hrs:min:sec
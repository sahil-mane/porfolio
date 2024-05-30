// import React from 'react'
// import { GoDownload } from "react-icons/go";

const PortfolioCard = () => {
  return (
    <div className="px-5 lg:p-5 text-white w-[80vw] lg:w-[30vw] backdrop-blur-md border border-gray-500 select-none rounded-2xl my-20 lg:my-[200px]
    hover:scale-110 transition-all delay-100 hover:border-white shadow-lg Portfolio-Card">
      <h3 className="text-4xl lg:text-6xl font-bold py-3 border-2 border-transparent border-b-gray-400">Portfolio*</h3>
      <h3 className="text-xl lg:text-2xl font-bold py-3 border-2 border-transparent border-b-gray-400 mb-2">SAHIL MANE</h3>
      <div className="flex justify-between">
        <h3 className="text-xl lg:text-2xl py-3">FRONTEND DEVELOPER</h3>
        {/* <button className="border-2 rounded-md hover:rounded-full px-2 "><a href="/assets/resume.pdf" download="CV.pdf" className="flex items-center gap-2"> download CV <GoDownload /></a></button> */}
      </div>
    </div>
  )
}

export default PortfolioCard
/* eslint-disable react/prop-types */
// import React from 'react'

const Realcard = ({img,title,value}) => {
  return (
    <div
  className="transform transition duration-300 hover:scale-110 rounded-lg hover:rounded-full shadow-lg h-56 w-56 hover:shadow-xl bg-white"
>
  <div
    className="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 h-3/6 rounded-lg"
  ><img src={img} alt="img" className="hover:rounded-full" /></div>

  <div className="px-5 pt-2 flex flex-col">
    <h2 className="font-semibold">{title}</h2>
    <progress max="100" value={value} className="progress-bar" />
    
  </div>
</div>

  )
}

export default Realcard
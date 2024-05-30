// import React from 'react'

const ContactForm = () => {
  return (
    <>
    <form className="flex flex-col gap-4">
      <input 
      type="text" 
      className="bg-transparent text-gray-200 border-2 border-gray-600 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:border-purple-500 transition ease-in-out duration-150" 
      placeholder="Full Name"
      name="name"
      id="name"
      />
      <input 
      type="email" 
      className="bg-transparent text-gray-200 border-2 border-gray-600 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:border-purple-500 transition ease-in-out duration-150" 
      placeholder="Email"
      name="email"
      id="email"
      />      
      <textarea 
      className="bg-transparent text-gray-200 border-2 border-gray-600 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:border-purple-500 transition ease-in-out duration-150" 
      placeholder="Message" 
      name="message" 
      id="message"
      rows="3"
      />

      <button 
      type="submit" 
      className="relative text-white px-8 py-2 rounded-md bg-transparent hover:bg-purple-700 isolation-auto z-10 border-2 border-purple-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-purple-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
        Submit
        </button>
    </form>
    </>
    
  )
}

export default ContactForm
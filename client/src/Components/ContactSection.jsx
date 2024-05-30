// import React from 'react'

import { FaGithub } from "react-icons/fa"
import ContactForm from "./ContactForm"

const ContactSection = () => {
  
  return (
    <>
      <div data-aos="fade-left" className="flex flex-col lg:flex-row lg:items-center mb-20 lg:mb-36">
        <span className="uppercase text-3xl lg:text-2xl font-bold gradient-text mb-8 lg:mb-0 rotate-0 lg:-rotate-90">Get Started!</span>
        <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-36">
          <div className="mb-5 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl gradient-text mb-5 lg:mb-10">Contact me</h1>
            <div className="flex flex-col gap-2">
              <a href="mailto:sahilmane1302@gmail.com" className="text-white font-mono underline text-lg lg:text-2xl">sahilmane1302@gmail.com</a>
              <a href="tel:+919898989898" className="text-white font-mono underline text-lg lg:text-2xl">+91 9898989898</a>
            </div>
            <div className="mt-2">
            <a href="https://github.com/sahil-mane" className="text-white text-2xl hover:text-purple-300" target="_blank"> <FaGithub /></a>
            </div>
            <h2 className="text-2xl font-bold font-mono text-white text-center">Or</h2>
          </div>
          <div className="w-full bg-transparent rounded-lg shadow-md p-6 lg:w-[40vw]">
          
              <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSection
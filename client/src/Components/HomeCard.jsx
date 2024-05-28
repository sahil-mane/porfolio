/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import kamal from '../assets/kamal_bhaiya.png'
import join_hand from '../assets/join_hand.png'
const HomeCard = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36'>
                <div className='flex flex-col gap-5 lg:w-[50%]'>
                    <div className='flex items-center mb-10 gap-3'>
                        <h1 className='text-5xl lg:text-7xl gradient-text'>Namaste!</h1>
                        <span ><img src={join_hand} alt="join hand" className='h-10' /></span>
                    </div>
                    <p className='text-gray-300 text-xl lg:text-2xl capitalize'>
                        My name is sahil mane, and I am a Frontend Developer. I am 21 years old from
                        <span className="block underline">Mumbai,Maharashtra</span>
                        Over these year, I have developed various websites,conducted workshops and collaborated on diverse projects
                    </p>
                    <p className='text-gray-300 text-xl lg:text-2xl'>
                        I'm committed to futhering my skills an achieving new milestones in my career.
                        Let's connect and create something amazing together!
                    </p>
                </div>
                <div>
                    <img src={kamal} alt="kamal_bhaiya" className='rounded-full h-[200px] w-[200px] lg:w-[450px] lg:h-[450px] mx-auto' />
                </div>
            </div>
        </>
    )
}

//31:23 min:sec

export default HomeCard
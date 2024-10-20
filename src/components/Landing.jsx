import { FiLinkedin, FiInstagram, FiGithub  } from 'react-icons/fi';
import { SiFrontendmentor } from "react-icons/si";
import { FaHandBackFist, FaHandsClapping } from "react-icons/fa6";
import Video from '../assets/bg.mp4'

const Landing = () => {
  return (
    <div id='home' className='h-screen w-full flex justify-center items-center'>
        {/* Bg Video */}
        <video src={Video} autoPlay loop muted className='absolute h-full w-full top-0 object-cover z-[-1]'></video>
        {/* Social Icons */}
        <div className='absolute left-3 flex flex-col gap-y-4 text-2xl text-gray-700'>
            <a href="https://github.com/Siva-OO7" target='_blank'>
              <FiGithub />  
            </a>
            <a href="https://www.linkedin.com/in/siva-maguluri-384a09249" target='_blank'>
              <FiLinkedin />  
            </a>
            <a href="https://www.frontendmentor.io/profile/Siva-OO7" target='_blank'>
              <SiFrontendmentor />  
            </a>
            <a href="https://www.instagram.com/__siva007/" target='_blank'>
              <FiInstagram />  
            </a>
        </div>
        {/* Hero */}
        <div>
            <h1 className='flex flex-col items-center gap-y-4 text-gray-700'>
                <span className='sm:text-xl text-2xl flex items-center gap-x-3 font-normal'>
                    Hello <FaHandsClapping />
                </span>
                <span className='text-5xl font-medium uppercase sm:text-base md:text-xl lg:text-2xl  lg:text-center '>
                    I am a Frontend Developer 
                </span>
                {/* <button className='block w-24 bg-white mt-5 text-gray font-normal px-2 py-1 border border-gray-600 rounded-2xl hover:bg-gray-100 transition-colors'>
                    Hire Me
                </button> */}
            </h1>
        </div>
    </div>
  )
}

export default Landing
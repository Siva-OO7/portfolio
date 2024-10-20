import myPic from '../assets/profile-pic.jpg';
import CV from '../assets/CV.pdf';

import { FiFileText } from 'react-icons/fi'

const About = () => {
  return (
    <div id='about' className='flex justify-around gap-x-5 py-20 md:flex-col md:items-center md:gap-y-10'>
       {/*Design Image  */}
       <img src={myPic} alt="profile-pic" className='w-[300px] rounded-md sm:w-[270px]'/>
       {/* About me text */}
       <div className='w-1/2 flex flex-col justify-between gap-y-5 md:gap-y-8'>
        <div>
            <h2 className='text-2xl font-bold uppercase mb-3'>I am a Frontend Developer </h2>
            <p className='text-xs leading-5 first-letter:ml-3'>
            I am a passionate Frontend Developer with a strong focus on creating responsive and intuitive user interfaces. Skilled in building web applications using modern technologies such as React, Next.js, and JavaScript, I enjoy crafting visually appealing designs that offer seamless user experiences. With a background in working on e-commerce platforms and task management applications, I thrive in dynamic environments where I can constantly learn and grow. Currently, I am honing my backend skills to become a well-rounded Fullstack Developer, while pursuing my B.Tech at VIT AP University.
            </p>
        </div>
        {/* Download CV */}
        <a href={CV} download="" className='w-[160px] h-[30px] bg-slate-300 flex justify-around items-center rounded-sm text-sm'>
            <span>Download CV</span>
            <FiFileText />
        </a>

        {/* Info */}
        <div className='flex justify-between text-sm lg:flex-col lg:gap-y-3'>
            <ul className='font-semibold uppercase'>
                <li>Name:</li>
                <li>Age:</li> 
            </ul>
            <ul>
                <li>Siva Maguluri</li>
                <li>21</li> 
            </ul>
            <ul className='font-semibold uppercase'>
                <li>Email:</li>
                <li>Address:</li> 
            </ul>
            <ul>
                <li>sivaramakrishnamag253@gmail.com</li>
                <li>Guntur,Andhra Pradesh </li> 
            </ul>
        </div>

       </div>
    </div>
  )
}

export default About
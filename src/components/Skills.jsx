
import skills from '../data/skills.json'
import Html from '../assets/skills/html.png';
import Css from '../assets/skills/css.png';
import Tailwind from '../assets/skills/tailwind.png';
import JavaScript from '../assets/skills/javascript.png';
import ReactJs from '../assets/skills/react.png';

const Skills = () => {
    const images = [
        Html,
        Css,
        Tailwind,
        JavaScript,
        ReactJs
    ];


  return (
    <div id='skills' className='my-12 px-12'>
        {/* Text for skills */}
        <div className='flex flex-col gap-y-2 mb-5 md:items-center'>
            <h1 className='text-2xl font-semibold uppercase'>Skills</h1>
            <p className='text-xl text-gray-600'>What I know best</p>
        </div>
        {/*Skill set  */}
        <div className='flex flex-wrap justify-between gap-5 md:justify-center'>
          {skills.map( (skill, i)=> {
            return (
                <div key={skill.id} className='bg-slate-200 w-[180px] aspect-square flex flex-col justify-center items-center gap-y-3 rounded-md shadow-sm hover:shadow-md transition-shadow'>
                  <img src={images[i]} alt={skill.name} width={60} />
                  <h3 className='text-[14px] tracking-wider'>{skill.name}</h3> 
                </div>
            )
          } )}  

        </div>
    </div>
  )
}

export default Skills
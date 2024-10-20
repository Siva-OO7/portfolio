import React from 'react'

import projectsData from '../data/projects.json';

import clipboard from '../assets/projects/clipboardLandingPage.png';
import bookmark from '../assets/projects/bookmarkLandingPage.png';
import fylo from '../assets/projects/fyloLandingPage.png';
import todoApp from '../assets/projects/TodoApp.png';
import translatorApp from '../assets/projects/TranslatorApp.png';

const projects  = [
    clipboard,
    fylo,
    bookmark,
    todoApp,
    translatorApp
]

const Projects = () => {

  return (
    <div id='projects' className='my-12 px-12'>
        <h1 className='text-center text-3xl mb-14 font-semibold uppercase'>Projects</h1>
        <div className='flex flex-wrap justify-center gap-14'>
            {projectsData.map( (project, i)=> {

                return (
                    <div key={project.id} className='flex justify-center relative bg-black rounded-md group'>
                        <h2 className='text-sm absolute top-[-28px]'>{project.name}</h2>
                        <img src={projects[i]} alt={project.name} width={300} className='group-hover:opacity-40 transition-opacity' />
                        <div className='absolute bottom-2 flex gap-x-3 underline text-white opacity-0 group-hover:opacity-100 transition-opacity'>
                            <a href={project.live} target='_blank'>Live</a>
                            <a href={project.code} target='_blank'>Code</a>
                        </div>
                    </div>
                )
            } )}
        </div>
    </div>
  )
}

export default Projects
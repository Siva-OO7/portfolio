import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='flex flex-col items-center gap-y-5 mt-20'>
       <h1 className='text-2xl uppercase font-semibold'>Contact</h1>
        <form 
             action="https://getform.io/f/bkkgmqdb"
             method='POST' 
             className='flex flex-col gap-y-3 text-sm w-[500px] md:w-[400px] sm:w-[270px]'
        >
            <input type="text" name="name" id="name" placeholder='Name..' className='outline-none border border-gray-400 p-2' />
            <input type="email" name="email" id="email" placeholder='Email' className='outline-none border border-gray-400 p-2' />
            <textarea name="message" id="message" placeholder='Message..' className='outline-none border border-gray-400 p-2 min-w-full min-h-[100px] max-h-[1500px]'></textarea>
            <input type="submit" name="send" id="send" value='Send Message' className='outline-none border border-gray-400 p-2 w-full bg-slate-400 text-white cursor-pointer' />
        </form>
        <p className='text-lg m-7 tracking-wider font-light'>Copyright Siva Maguluri <span>{new Date().getFullYear()}</span> </p>
    </div>
  )
}

export default Contact
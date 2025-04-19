import React from 'react'

const Skills = () => {
  const skills = [
    { name: "HTML5 & CSS3", level: 100 },
    { name: "JAVASCRIPT", level: 90 },
    { name: "NODEJS", level: 85 },
    { name: "REACT", level: 95 },
    { name: "EXPRESS", level: 90 },
    { name: "RELATIONAL DATABASES", level: 75 },
    { name: "NON RELATIONAL DATABASES", level: 80 },
  ];

  return (
    <div className='flex flex-col text-start border-2 bg-white h-[20rem] w-[30rem]'>
      <div className='flex w-full items-center justify-start p-10'>
        <h1 className='text-4xl text-blue-500 font-bold'>
          <span className='underline underline-offset-8'>Ski</span>lls
        </h1>
      </div>
      <hr className='text-gray-500' />

      <div className='flex flex-col gap-5 px-10 pt-5 pb-5 overflow-y-scroll'>
        {skills.map((skill, index) => (
          <div key={index}>
            <p className='text-lg font-medium'>{skill.name}</p>
            <div className='w-full bg-gray-200 h-2 rounded'>
              <div
                className='bg-blue-400 h-2 rounded'
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills

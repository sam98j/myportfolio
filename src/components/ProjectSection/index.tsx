import React from 'react'
import ProjectCard from '../ProjectCard';

const ProjectSection = () => {
  return (
    <main className='pt-12' id='projects'>
        {/* section title */}
        <h3 className='w-full text-center text-6xl font-bold'>Projects</h3>
        {/* projects list */}
        <div className='flex flex-wrap gap-10 justify-between mt-10'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </main>
  )
}

export default ProjectSection;
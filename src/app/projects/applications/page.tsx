import ProjectCard from '@/components/projects/ProjectCard'
import { applications } from '@/data/projects'
import React from 'react'

const ApplicationsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((project, index) => (
            <ProjectCard
                key={project.id}
                index={index}
                projectType="application"
                project={project}
            />
        ))}
    </div>
  )
}

export default ApplicationsList
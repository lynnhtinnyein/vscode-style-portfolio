import ProjectCard from '@/components/projects/ProjectCard'
import { packages } from '@/data/projects'
import React from 'react'

const PackagesList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((project, index) => (
            <ProjectCard
                key={project.id}
                index={index}
                projectType="package"
                project={project}
            />
        ))}
    </div>
  )
}

export default PackagesList
import React, { useEffect, useState } from 'react'
import { projects, Project } from '../data/projectsData'; // Update the import path as needed
import { useParams } from 'react-router-dom';

export default function ProjectDetails() {
    const { id } = useParams<{id: string}>();
    const [project, setProject] = useState<Project>();

    useEffect(() => {
        const prodectId = parseInt(id || '0' ,10);

        const foundProject = projects.find(item => item.id === prodectId);

        if(foundProject){
            setProject(foundProject);
        }
    }, [id]);

    console.log('project',project);
  return (
    <div>
        <div className="relative bg-gradient-to-t from-gray-700 to-orange-800 text-white py-20 px-6 md:px-10 lg:px-20 h-screen">
            <div className="">
                {project?.title}
            </div>
        </div>
    </div>
  )
}

import Image from "next/image";
import projects from "@/data/projects";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePageController } from "@/context/pages";

const Projects = () => {
    const [mounted, setMounted] = useState(false);
    const { openPage } = usePageController();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div>
                        This page is still under development and will not include all data.
                        <div className="flex flex-row flex-wrap flex-1 overflow-auto p-8">
            { projects.map( (project, index) => 
                <Link 
                    href={project.link ?? ''}
                    target="_blank"
                    key={project.id} 
                    className={`flex justify-center w-full md:w-1/3 transition-fade duration-500 ${
                        mounted ? 'opacity-96 mt-0' : 'opacity-0 mt-10'
                    }`}
                    style={{
                        transitionDelay: `${(index + 1) * 100}ms`
                    }}
                >
                    <div className="flex flex-col relative w-80 items-center p-5 cursor-pointer">
                        <Image
                            src="/images/mobile.png"
                            width={250}
                            height={200}
                            alt="Project Preview"
                            className="rounded-xl"
                            priority={true}
                        />
                        <div className="flex flex-row h-12 space-x-2 items-center justify-center">
                            <span className="text-white text-xl">
                                {project.name}
                            </span>
                            <span 
                                className={`text-2xs text-white rounded-full p-1 px-2
                                    ${ project.status === 'Released' ? 'bg-green-600' : 'bg-blue-600'}
                                `}
                            >
                                {project.status}
                            </span>
                        </div>
                        <span className="text-gray-300 text-sm text-center">
                            {project.short_desc}
                        </span>

                        {/* hover mask */}
                        <div className="absolute rounded-xl inset-0 hover:bg-white active:bg-black opacity-5 cursor-pointer"></div>
                    </div>
                </Link>
            )}
        </div>
        </div>
        
        
    );
}
 
export default Projects;
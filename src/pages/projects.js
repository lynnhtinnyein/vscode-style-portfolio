import Image from "next/image";
import projects from "@/data/projects";
import { useEffect, useState } from "react";
import Link from "next/link";

const Projects = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="flex flex-col flex-1 overflow-auto p-5 md:p-10 space-y-5">
            <span className="text-2xl font-mono">Here is what I&apos;ve built so far</span>
            <div className="flex flex-row justify-center flex-wrap flex-1">
                { projects.map( (project, index) => 
                    <Link 
                        href={'projects/' + project.id}
                        key={project.id} 
                        className={`flex justify-center max-w-80 min-w-64 w-full md:w-1/3 transition-fade duration-500 min-h-96 ${
                            mounted ? 'opacity-96 mt-0' : 'opacity-0 mt-10'
                        }`}
                        style={{
                            transitionDelay: `${(index + 1) * 100}ms`
                        }}
                    >
                        <div className="flex flex-col m-1 w-full bg-gray-400 bg-opacity-5 hover:bg-opacity-15 rounded-xl space-y-3 m- relative items-center px-4 py-5 cursor-pointer">
                            <Image
                                src={project.showcaseImage ? '/images/' + project.showcaseImage : '/images/demo.png'}
                                width={250}
                                height={200}
                                alt="Project Preview"
                                className="rounded-xl"
                                priority={true}
                            />
                            <div className="flex flex-row space-x-2 items-center justify-center">
                                <span className="text-white text-xl">
                                    {project.name}
                                </span>
                                <span 
                                    className={`text-2xs text-white rounded p-1 px-2
                                        ${ project.status === 'Released' ? 'bg-green-600' : 'bg-blue-600'}
                                    `}
                                >
                                    {project.status}
                                </span>
                            </div>
                            <span className="text-gray-300 text-sm text-center max-h-10 max-w-full overflow-hidden">
                                {project.shortDesc}
                            </span>
                            <div className="flex flex-row flex-wrap">
                                { project.teches.map( (tech, index) =>
                                    <div key={tech + index} className="m-1">
                                        <span className="text-white text-xs bg-purple-500 px-2 py-1 rounded-full">
                                            { tech }
                                        </span>
                                    </div>
                                )}
                            </div>

                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}
 
export default Projects;
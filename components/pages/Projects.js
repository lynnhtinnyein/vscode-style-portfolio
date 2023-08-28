"use client"
import Image from "next/image";
import projects from "@/data/projects";
import useMaxPageHeight from "@/hooks/useMaxPageHeight";
import { useEffect, useState } from "react";

const Projects = () => {

    const maxPageHeight = useMaxPageHeight();
    const [mounted, setMounted] = useState(false);

    useEffect( () => {
        setMounted(true);    
    });

    return (
        <div className="container flex flex-wrap justify-between overflow-auto pb-5"
            style={{
                maxHeight: maxPageHeight,
            }}
        >
            { projects.map( (project, index) => 
                <div 
                    key={index} 
                    className={`flex justify-center w-full md:w-1/3 transition-fadeup duration-700 ${
                        mounted ? 'opacity-96 mt-0' : 'opacity-0 mt-24'
                    }`}
                    style={{
                        transitionDelay: `${(index + 1) * 200}ms`
                    }}
                >
                    <div className="flex flex-col relative w-80 items-center p-5 mt-5 cursor-pointer">
                        <Image
                            src="/images/mobile.png"
                            width={250}
                            height={200}
                            priority={true}
                            alt="Picture of the author"
                            className="rounded-xl"
                        />
                        <span className="text-white text-xl mt-5">
                            {project.name}
                        </span>
                        <span className="text-gray-300 text-sm text-center mt-2">
                            {project.short_desc}
                        </span>

                        {/* hover mask */}
                        <div class="absolute rounded-xl inset-0 hover:bg-white opacity-5 cursor-pointer"></div>
                    </div>
                </div>
            )}
            
        </div>
    );
}
 
export default Projects;
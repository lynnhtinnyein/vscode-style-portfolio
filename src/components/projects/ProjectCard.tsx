import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    index: number;
    project: Project;
    projectType: "application" | "package";
}

const ProjectCard = ({ index, project, projectType }: ProjectCardProps ) => {
    return (
        <Link
            href={`${projectType}s/${project.id}`}
            className="project-card animate-fadeup opacity-0"
            style={{
                animationDelay: `${(index + 1) * 100}ms`,
            }}
        >
            <div className="bg-[var(--color-card)] border border-[var(--color-line)] rounded-lg overflow-hidden h-full shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {project.showcaseImage && (
                    <div className="h-48 overflow-hidden">
                        <Image
                            src={`/images/${project.showcaseImage}`}
                            alt={project.name}
                            width={400}
                            height={250}
                            className="w-full h-full object-cover"
                            priority={index < 4}
                        />
                    </div>
                )}
                <div className="p-4">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg text-cyan-400 font-medium">{project.name}</h3>
                        <span
                            className={`text-xs px-2 py-1 mt-1 rounded-full ${
                                project.status === "Released"
                                    ? "bg-green-900 text-green-200"
                                    : "bg-amber-900 text-amber-200"
                            }`}
                        >
                            {project.status}
                        </span>
                    </div>
                    <p className="text-sm mb-4 line-clamp-3 h-16">{project.about}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {project.teches.slice(0, 3).map((tech, index) => (
                            <span
                                key={index}
                                className="text-xs px-2 py-0.5 border border-gray-600 text-[var(--color-bubble-text)] rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.teches.length > 3 && (
                            <span className="text-xs px-2 py-0.5 text-[var(--color-bubble-text)] rounded-md">
                                and {project.teches.length - 3} more ...
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;

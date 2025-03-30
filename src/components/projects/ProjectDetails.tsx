import Image from "next/image";
import React from "react";

interface ProjectDetailsProps extends Project {
    projectType: string;
}

const ProjectDetails = ({
    name,
    about,
    numbersOfScreenshots,
    status,
    mainFeatures,
    teches,
    imageSource,
    link,
    projectType
} : ProjectDetailsProps ) => {
    const screenshots = {
        desktop: Array.from(
            { length: numbersOfScreenshots.desktop },
            (_, index) => index + 1 + ".png"
        ),
        mobile: Array.from(
            { length: numbersOfScreenshots.mobile },
            (_, index) => index + 1 + ".png"
        ),
    };

    return (
        <div className="flex flex-col animate-fadeup space-y-8">
            {/* image list */}
            <div className="flex flex-row space-x-4 overflow-auto mask-gradient pl-5 pr-10  -mx-5 sm:pl-10 sm:pr-20 sm:-mx-10">
                {screenshots.desktop.map((screenshot) => (
                    <div
                        key={screenshot}
                        className="min-h-60 max-h-60 min-w-96 max-w-96 rounded-xl overflow-hidden border border-1 border-gray-600"
                    >
                        <Image
                            alt="project screenshot"
                            width={384}
                            height={240}
                            className="w-full h-full border-red-400"
                            src={`/images/screenshots/${imageSource}/desktop/${screenshot}`}
                            priority
                        />
                    </div>
                ))}
                {screenshots.mobile.map((screenshot) => (
                    <div
                        key={screenshot}
                        className="min-h-60 max-h-60 min-w-28 max-w-28 rounded-xl overflow-hidden border border-1 border-gray-600"
                    >
                        <Image
                            alt="project screenshot"
                            width={120}
                            height={240}
                            className="w-full h-full"
                            src={`/images/screenshots/${imageSource}/mobile/${screenshot}`}
                            priority
                        />
                    </div>
                ))}
            </div>

            {/* Project Header */}
            <div className="flex flex-col md:flex-row w-full items-start space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex flex-col w-full">
                    <div className="flex justify-center space-x-3 items-center mb-4">
                        <h1 className="text-3xl text-indigo-400 font-bold">{name}</h1>
                        <span
                            className={`text-sm px-3 py-1 mt-1 rounded-full ${
                                status === "Released"
                                    ? "bg-green-900 text-green-200"
                                    : "bg-amber-900 text-amber-200"
                            }`}
                        >
                            {status}
                        </span>
                    </div>
                    <p className="mx-3">&emsp;{about}</p>
                </div>
            </div>

            {/* Main Features */}
            <div className="flex flex-col">
                <h2 className="text-2xl text-cyan-400 border-b-2 border-[var(--color-line)] pb-2 mb-4">
                    Main Features
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm ml-3">
                    {mainFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-col">
                <h2 className="text-2xl text-cyan-400 border-b-2 border-[var(--color-line)] pb-2 mb-4">
                    Technologies
                </h2>
                <div className="flex flex-wrap gap-2 ml-1">
                    {teches.map((tech, index) => (
                        <span
                            key={index}
                            className="text-sm px-3 py-1 border border-gray-600 text-[var(--color-bubble-text)] rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* link */}
            {link ? (
                <div className="flex flex-col">
                    <h2 className="text-2xl text-cyan-400 border-b-2 border-[var(--color-line)] pb-2 mb-4">
                        { projectType === "package" ? "View on NPM" : "Live Links"}
                    </h2>
                    <a href={link} className="text-sm ml-1">
                        {link}
                    </a>
                </div>
            ) : (
                ""
            )}

            <div className="relative flex justify-center mt-6">
                <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;

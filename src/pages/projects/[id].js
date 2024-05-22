import ArrowLeftCircle from "@public/icons/vs-code-icons/ArrowLeftCircle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = ({ name, about, numbersOfScreenshots, status, mainFeatures, teches, link }) => {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;

    const screenshots = {
        desktop: Array.from({ length: numbersOfScreenshots.desktop }, (_, index) => (index + 1) + '.PNG'),
        mobile: Array.from({ length: numbersOfScreenshots.mobile }, (_, index) => (index + 1) + '.PNG')
    }

    return (
        <div className="flex-1 flex flex-col overflow-hidden pt-4 space-y-3">
            <Link
                href={appUrl + "/projects"}
                className="flex flex-row space-x-2 items-center active:opacity-50 mx-3 md:mx-5"
            >
                <ArrowLeftCircle size={40} />
                <span className="text-lg">Back</span>
            </Link>
            <div className="overflow-auto pt-3 pb-14">
                <div className="flex flex-col animate-fadeup space-y-5">

                    <div className="flex flex-row space-x-4 overflow-auto mask-gradient px-6 md:px-10">
                        { screenshots.desktop.map( screenshot => 
                            <div
                                key={screenshot} 
                                className="min-h-60 max-h-60 min-w-96 max-w-96 rounded-xl overflow-hidden border border-1 border-gray-600"
                            >
                                <Image
                                    width={384}
                                    height={240}
                                    className="w-full h-full border-red-400"
                                    src={`/screenshots/${name}/desktop/${screenshot}`}
                                />
                            </div>
                        )}
                        { screenshots.mobile.map( screenshot => 
                            <div
                                key={screenshot} 
                                className="min-h-60 max-h-60 min-w-28 max-w-28 rounded-xl overflow-hidden border border-1 border-gray-600"
                            >
                                <Image
                                    width={120}
                                    height={240}
                                    className="w-full h-full"
                                    src={`/screenshots/${name}/mobile/${screenshot}`}
                                />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col space-y-5 px-10 md:px-14">
                        <div className="flex flex-row space-x-2 justify-center items-center">
                            <span className="text-3xl text-white">{ name }</span>
                            <span 
                                className={`text-2xs text-white rounded p-1 px-2
                                    ${status === 'Released' ? 'bg-green-600' : 'bg-blue-600'}
                                `}
                            >
                                {status}
                            </span>
                        </div>

                        <p className="text-balance">&emsp; &emsp;{about}</p>

                        <div className="flex flex-col space-y-2">
                            <div>
                                <span className="text-lg text-green-700 bg-green-200 px-1">
                                    Main Features
                                </span>
                            </div>
                            <ul className="list-disc px-5 text-sm">
                                { mainFeatures.map( feature => 
                                    <li key={feature}>
                                        { feature }
                                    </li>
                                )}
                            </ul>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <div>
                                <span className="text-lg text-purple-700 bg-purple-200 px-1">
                                    TechStack
                                </span>
                            </div>
                            <ul className="list-disc px-5 text-sm">
                                { teches.map( tech => 
                                    <li key={tech}>
                                        { tech }
                                    </li>
                                )}
                            </ul>
                        </div>

                        { link ? (
                            <div className="flex flex-col space-y-2">
                                <div>
                                    <span className="text-lg text-yellow-700 bg-yellow-200 px-1">
                                        Source
                                    </span>
                                </div>
                                <Link
                                    href={link}
                                    target="_blank"
                                    className="text-sm text-yellow-200"
                                >
                                    { link }
                                </Link>
                            </div>
                        ) : ''}
                    </div>

                </div>
            </div>
        </div>
    );
};

export async function getStaticPaths() {
    const { projects } = await import("@/data/projects");
    const paths = projects.map((project) => ({
        params: { id: project.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { projects } = await import("@/data/projects");
    const projectId = Number(params.id);
    const project = projects.find((e) => e.id === projectId);

    return {
        props: { ...project },
    };
}

export default Project;

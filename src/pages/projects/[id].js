import ArrowLeftCircle from "@public/icons/vs-code-icons/ArrowLeftCircle";
import Link from "next/link";
import React from "react";

const Project = ({ name, shortDesc }) => {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;

    return (
        <div className="flex-1 flex flex-col overflow-hidden px-5 pt-5 space-y-3">
            <Link
                href={appUrl + "/projects"}
                className="flex flex-row space-x-2 items-center active:opacity-50"
            >
                <ArrowLeftCircle size={40} />
                <span className="text-lg">Back</span>
            </Link>
            <div className="overflow-auto">
                <div className="flex flex-col animate-fadeup space-y-5">
                    <div className="flex justify-center">
                        <span className="text-3xl">{name}</span>
                    </div>
                    <div className="">&emsp; &emsp;{shortDesc}</div>

                    <div className="flex flex-row justify-center items-center space-x-2 overflow-auto h-32 border-y border-y-gray-500">
                        <span>This page is under development!</span>
                        {/* <div className="h-60 max-w-40 bg-red-600 overflow-hidden">
                            <img
                                className="w-full h-full"
                                src="/images/mobile.png"
                            />
                        </div> */}
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

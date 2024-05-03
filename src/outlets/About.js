import { usePages } from "@/context/pages";
import { pages } from "@/data/pages";
import React from "react";

const About = () => {
    const { openPage } = usePages();

    const startDate = new Date("2020-01-01");
    const endDate = new Date();

    const durationInMs = endDate - startDate;

    // Convert milliseconds to years
    const yearDuration = Math.floor(
        durationInMs / (1000 * 60 * 60 * 24 * 365.25)
    );

    return (
        <div className="animate-fadeup flex flex-col space-y-11 flex-1 p-10 overflow-auto font-mono">
            <div className="flex flex-col space-y-6">
                <div>
                    <span className="text-2xl text-orange-300 border-b-4 border-b-zinc-500">
                        About Me
                    </span>
                </div>

                <p>
                    &emsp; I'm Lin Htin Nyein, an indie app developer originally
                    from Myanmar, currently residing in Thailand, who is always
                    thinking about to solve people's real-life problems with
                    apps. Usually, I spend my day in front of my dev-desk doing
                    app-design and development. I've independently created
                    several web-based and mobile applications using web
                    technologies. I especially love to work on the frontend by
                    creating user interfaces with clean, efficient and reuseable
                    code.
                </p>
                <p>
                    &emsp; I've been thriving as a freelance developer in my
                    local (Myanmar) for almost {yearDuration} years. During this
                    period, I have been busy with creating clients' business
                    apps according to their needs and distributing my own
                    products.
                </p>

                <div>
                    <span
                        className="cursor-pointer text-blue-300 border-b-2 border-b-zinc-500"
                        onClick={() =>
                            openPage(
                                pages.find((e) => e.name === "projects.js").id
                            )
                        }
                    >
                        Take a look at my products in gallery
                    </span>
                </div>
            </div>

            <div className="flex flex-col space-y-6">
                <div>
                    <span className="text-2xl text-green-300 border-b-4 border-b-zinc-500">
                        Timeline
                    </span>
                </div>

                <div className="flex flex-col space-y-5">
                    <div className="flex flex-row items-center space-x-3">
                        <span className="max-w-10 min-w-10 text-center font-bold text-blue-200">
                            1996
                        </span>
                        <span className="text-sm">Born in Pyay, Myanmar.</span>
                    </div>
                    <div className="flex flex-row items-center space-x-3">
                        <span className="max-w-10 min-w-10 text-center font-bold text-blue-200">
                            2018
                        </span>
                        <span className="text-sm">
                            Completed Level 5 Diploma in Computing of NCC
                            Education UK.
                        </span>
                    </div>
                    <div className="flex flex-row items-center space-x-3">
                        <span className="max-w-10 min-w-10 text-center font-bold text-blue-200">
                            2019
                        </span>
                        <span className="text-sm">
                            Completed the Bachelor Degree of Business IT program
                            at the University of Greenwich.
                        </span>
                    </div>
                    <div className="flex flex-row items-center space-x-3">
                        <span className="max-w-10 min-w-10 text-center font-bold text-blue-200">
                            2019 | 2020
                        </span>
                        <span className="text-sm">
                            Worked as a Junior System Analyst at MCC (Myanmar Computer Company)
                        </span>
                    </div>
                    <div className="flex flex-row items-center space-x-3">
                        <span className="max-w-10 min-w-10 text-center font-bold text-blue-200">
                            2020 | Present
                        </span>
                        <span className="text-sm">
                            Working as a freelance developer and creating own products.                       
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

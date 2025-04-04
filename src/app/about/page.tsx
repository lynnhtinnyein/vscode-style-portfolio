import { timeline } from "@/data/timeline";
import Link from "next/link";

const About = () => {
    const calculateExperience = () => {
        const startDate = new Date("2017-05-01");
        const endDate = new Date();
        const durationInMs = Number(endDate) - Number(startDate);
        return Math.floor(durationInMs / (1000 * 60 * 60 * 24 * 365.25));
    };

    return (
        <div className="animate-fadeup flex flex-col space-y-12 flex-1 p-5 md:p-10 overflow-auto font-mono">
            <section className="flex flex-col space-y-6">
                <div className="flex">
                    <h1 className="text-2xl sm:text-3xl text-indigo-400 border-b-4 border-[var(--color-line)]">
                        About Me
                    </h1>
                </div>
                <p className="text-sm leading-relaxed">
                    &emsp; I&apos;m Lin Htin Nyein, a fullstack developer originally from Myanmar,
                    currently residing in Thailand, with over {calculateExperience()} years of
                    experience in building web and mobile applications, who is always thinking about
                    to solve people&apos;s real-life problems with technology. Most days, you can
                    find me at my dev-desk, focusing on app design and development. I&apos;ve
                    independently created several web and mobile applications, using modern
                    technologies. I especially love working on the frontend, crafting intuitive user
                    interfaces and reusable components with clean and efficient code.
                </p>
                <p className="text-sm leading-relaxed">
                    &emsp; In 2020, I made the decision to leave my job and pursue what I love most:
                    creating my own projects. This leap allowed me to focus on building efficient,
                    modular applications and reusable npm packages that showcase my development
                    philosophy. Since then, I&apos;ve been thriving as a freelance developer,
                    dividing my time between client business applications tailored to their specific
                    needs and distributing my own products. My work and personal projects reflect my
                    commitment to quality code and intuitive design.
                </p>
                <div>
                    <Link
                        href="/projects"
                        className="inline-block px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                    >
                        View My Projects
                    </Link>
                </div>
            </section>

            <section className="flex flex-col space-y-6">
                <div className="flex">
                    <h2 className="text-2xl sm:text-3xl text-emerald-400 border-b-4 border-b-[var(--color-line)]">
                        Timeline
                    </h2>
                </div>

                <div className="relative pl-8 border-l-2 border-[var(--color-line)] space-y-10">
                    {timeline.map((exp, index) => (
                        <div className="relative" key={index}>
                            <div
                                className={`absolute -left-11 w-6 h-6 rounded-full border-4 border-[var(--color-line)] ${
                                    index % 2 === 0 ? "bg-indigo-400" : "bg-emerald-400"
                                }`}
                            ></div>
                            <div className="flex flex-col">
                                <span className="text-indigo-400 font-bold">{exp.date}</span>
                                <span className="text-lg font-semibold mt-1">{exp.position}</span>
                                <span className="text-emerald-400 text-sm">{exp.company}</span>
                                {exp.location && (
                                    <span className="text-zinc-400 text-xs mb-2">
                                        {exp.location}
                                    </span>
                                )}
                                {exp.description && <p className="text-sm">{exp.description}</p>}
                                {exp.tasks && (
                                    <ul className="text-sm list-disc list-inside space-y-1 mt-2">
                                        {exp.tasks.map((task, i) => (
                                            <li key={i}>{task}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                    <div className="relative flex justify-center mt-6">
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

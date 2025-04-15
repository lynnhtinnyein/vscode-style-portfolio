import { expertiseAreas, languageAndFrameworks, tools } from "@/data/skills";
import { timeline } from "@/data/timeline";
import { GlobeAltIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import NextJsIcon from "@public/icons/language-icons/NextJsIcon";
import MailIcon from "@public/icons/vs-code-icons/MailIcon";

const PageOne = () => {
    const educations = timeline.filter((e) => e.type === "education");
    const bestPractices = expertiseAreas.find( e => e.title === "Best Practices");

    return (
        <div className="animate-fadeup flex flex-col w-[210mm] h-[295mm] shadow-md overflow-hidden">
            {/* header */}
            <header className="flex flex-row min-h-7 px-2 bg-[var(--color-header)]">
                <div className="flex flex-row items-center w-1/3 space-x-1">
                    <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                </div>
                <div className="flex items-center justify-center w-1/3">
                    <span className="text-2xs font-sans">@lynnhtinnyein</span>
                </div>
                <div className="flex mr-1 items-center justify-end w-1/3">
                    <span className="text-white">
                        <NextJsIcon size={12} className="text-[var(--color-text-active)]" />
                    </span>
                </div>
            </header>

            {/* main content */}
            <div className="flex-1 flex flex-col space-y-6 p-5 bg-[var(--color-content)]">
                {/* Name and contact */}
                <div className="flex flex-row">
                    {/* Name */}
                    <div className="flex-1 flex flex-col space-y-2">
                        <h1 className="text-4xl font-bold">Lin Htin Nyein</h1>
                        <p className="text-2xl text-emerald-400">Full Stack Developer</p>
                        <div className="flex text-sm flex-row gap-x-2 items-center">
                            <MapPinIcon className="size-5 text-sky-400" />
                            <span>Bangkok, Thailand</span>
                        </div>
                    </div>

                    {/* contact */}
                    <div className="flex flex-col space-y-2 justify-start items-end mt-3">
                        <div className="flex flex-row items-center space-x-2">
                            <PhoneIcon className="size-4" />
                            <span className="text-xs">+66 6-1830-0973</span>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <MailIcon className="size-5" />
                            <span className="text-xs">lynnhtinnyein@gmail.com</span>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <GlobeAltIcon className="size-5" />
                            <span className="text-xs">https://lynnhtinnyein.com</span>
                        </div>
                    </div>
                </div>

                {/* all data */}
                <div className="grid grid-cols-2 gap-x-3">
                    {/* left-side: about and education */}
                    <div className="flex flex-col space-y-6">
                        {/* profile */}
                        <div className="flex flex-col space-y-2">
                            <h2 className="text-xl text-[var(--color-section-title)] font-bold border-b-2 border-[var(--color-line)] pb-1">
                                <span className="flex items-center">Profile</span>
                            </h2>
                            <p className="leading-relaxed  text-sm text-[var(--color-text)]">
                                &emsp; Full stack developer with over 8 years of experience in
                                building web and mobile applications, focusing on solving real-life
                                problems with technology. Originally from Myanmar, currently
                                residing in Thailand. Specializing in creating intuitive user
                                interfaces and reusable components with clean, efficient code.
                            </p>

                            {/* personal info */}
                            <div className="flex flex-col text-sm">
                                <div className="flex items-center">
                                    <span className="text-[var(--color-text)]">{"{"}</span>
                                </div>

                                <div className="flex items-center">
                                    <span className="ml-8 text-[var(--color-text)]">
                                        born
                                    </span>
                                    <span className="text-[var(--color-text)] mx-2">:</span>
                                    <span className="text-orange-300">{`"June 1996"`}</span>
                                    <span className="text-[var(--color-text)]">,</span>
                                </div>

                                <div className="flex items-center">
                                    <span className="ml-8 text-[var(--color-text)]">
                                        nationality
                                    </span>
                                    <span className="text-[var(--color-text)] mx-2">:</span>
                                    <span className="text-orange-300">{`"Myanmar"`}</span>
                                    <span className="text-[var(--color-text)]">,</span>
                                </div>

                                <div className="flex items-center">
                                    <span className="ml-8 text-[var(--color-text)]">
                                        race
                                    </span>
                                    <span className="text-[var(--color-text)] mx-2">:</span>
                                    <span className="text-orange-300">{`"Burmese"`}</span>
                                    <span className="text-[var(--color-text)]">,</span>
                                </div>

                                <div className="flex items-center">
                                    <span className="ml-8 text-[var(--color-text)]">
                                        gender
                                    </span>
                                    <span className="text-[var(--color-text)] mx-2">:</span>
                                    <span className="text-orange-300">{`"Male"`}</span>
                                    <span className="text-[var(--color-text)]">,</span>
                                </div>

                                <div className="flex items-center">
                                    <span className="ml-8 text-[var(--color-text)]">
                                        maritalStatus
                                    </span>
                                    <span className="text-[var(--color-text)] mx-2">:</span>
                                    <span className="text-orange-300">{`"Single"`}</span>
                                </div>

                                <div className="flex items-center">
                                    <span className="text-[var(--color-text)]">{"}"}</span>
                                </div>
                            </div>
                        </div>

                        {/* education */}
                        <section className="flex flex-col space-y-3">
                            <h2 className="text-xl text-[var(--color-section-title)] font-bold border-b-2 border-[var(--color-line)] pb-1">
                                <span className="flex items-center">Education History</span>
                            </h2>

                            <div className="relative pl-6 border-l-2 border-[var(--color-line)] space-y-6">
                                {educations.map((exp, index) => (
                                    <div className="relative" key={index}>
                                        <div
                                            className={`absolute -left-8 w-4 h-4 rounded-full border-4 border-[var(--color-line)] ${
                                                index % 2 === 0 ? "bg-indigo-400" : "bg-emerald-400"
                                            }`}
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-indigo-400 font-bold">
                                                {exp.date}
                                            </span>
                                            <span className="font-semibold mt-1 text-sm">
                                                {exp.position}
                                            </span>
                                            <span className="text-emerald-400 text-sm">
                                                {exp.company}
                                            </span>
                                            {exp.location && (
                                                <span className="text-zinc-400 text-xs mb-2">
                                                    {exp.location}
                                                </span>
                                            )}
                                            {exp.description && (
                                                <p className="text-xs text-[var(--color-text)]">
                                                    {exp.description}
                                                </p>
                                            )}
                                            {exp.tasks && (
                                                <ul className="text-sm list-disc list-inside space-y-1 mt-2">
                                                    {exp.tasks.full.map((task, i) => (
                                                        <li key={i}>{task}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* right-side: skills */}
                    <div className="flex flex-col space-y-4">
                        <div
                            aria-labelledby="languages-frameworks"
                            className="flex flex-col space-y-3"
                        >
                            <h2 className="text-xl text-[var(--color-section-title)] font-bold border-b-2 border-[var(--color-line)] pb-1">
                                <span className="flex items-center">Languages & Frameworks</span>
                            </h2>
                            <div className="flex flex-row flex-wrap gap-2.5">
                                {languageAndFrameworks.map((skill) => (
                                    <div
                                        key={skill.id}
                                        className="py-2 px-3 text-sm space-x-2 rounded-md flex items-center transition-transform text-white"
                                        style={{ backgroundColor: skill.color }}
                                        itemProp="knowsAbout"
                                    >
                                        <skill.icon size={16} color="white" />
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            aria-labelledby="tools-libraries"
                            className="flex flex-col space-y-3"
                        >
                            <h2 className="text-xl text-[var(--color-section-title)] font-bold border-b-2 border-[var(--color-line)] pb-1">
                                <span className="flex items-center">Tools & Libraries</span>
                            </h2>
                            <div className="flex flex-row flex-wrap gap-2">
                                {tools.map((tool, index) => (
                                    <span
                                        key={index}
                                        className="py-2 px-3 text-xs bg-[var(--color-card)] border border-[var(--color-line)] shadow-sm text-[var(--color-text)] rounded-md transition-colors"
                                        itemProp="knowsAbout"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div aria-labelledby="best-practices" className="flex flex-col space-y-3">
                            <h2 className="text-xl text-[var(--color-section-title)] font-bold border-b-2 border-[var(--color-line)] pb-1">
                                <span className="flex items-center">Best Practices</span>
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex flex-col px-2 py-3 space-y-1 bg-[var(--color-card)] rounded-lg border border-[var(--color-line)] shadow-sm">
                                    {bestPractices.skills.map((skill, index) => (
                                        <div key={index} className="flex space-x-1 text-xs text-[var(--color-text)]">
                                            <span className="text-xl -mt-1.5">•</span>
                                            <span key={index} itemProp="knowsAbout">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageOne;

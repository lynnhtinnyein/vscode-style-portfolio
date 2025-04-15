import { expertiseAreas as allExpertiseAreas } from "@/data/skills";
import { timeline } from "@/data/timeline";
import NextJsIcon from "@public/icons/language-icons/NextJsIcon";

const PageTwo = () => {
    const workExperiences = timeline.filter((exp) => exp.type === "work-exp");
    const expertiseAreas = allExpertiseAreas.filter((e) => e.title !== "Best Practices" && e.title !== "DevOps & Tools");

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
                <div className="grid grid-cols-2 gap-x-3">
                    {/* left-side: work experiences */}
                    <div className="flex flex-col space-y-6">
                        <section className="flex flex-col space-y-3">
                            <h2 className="text-xl text-[var(--color-section-title)] font-bold border-b-2 border-[var(--color-line)] pb-1">
                                <span className="flex items-center">Work Experiences</span>
                            </h2>

                            <div className="relative pl-6 border-l-2 border-[var(--color-line)] space-y-6">
                                {workExperiences.map((exp, index) => (
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
                                                <ul className="text-xs text-[var(--color-text)] list-disc list-inside space-y-1 mt-2">
                                                    {exp.tasks.concice.map((task, i) => (
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

                    {/* right-side: work experiences */}
                    <div className="flex flex-col space-y-6">
                        <section className="flex flex-col space-y-3">
                            <h2 className="text-xl text-[var(--color-section-title)] font-bold border-b-2 border-[var(--color-line)] pb-1">
                                <span className="flex items-center">Expertise Areas</span>
                            </h2>

                            <div className="flex flex-col space-y-2">
                                {expertiseAreas.map((area, index) => (
                                    <div
                                        key={index}
                                        className="p-3 bg-[var(--color-card)] rounded-lg border border-[var(--color-line)] shadow-sm"
                                    >
                                        <h3 className="text-[var(--color-section-title)] font-medium mb-3">
                                            {area.title}
                                        </h3>
                                        {area.skills.map((skill, index) => (
                                            <div
                                                key={index}
                                                className="flex space-x-1 text-xs text-[var(--color-text)]"
                                            >
                                                <span className="text-xl -mt-1.5">•</span>
                                                <span key={index} itemProp="knowsAbout">
                                                    {skill}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTwo;

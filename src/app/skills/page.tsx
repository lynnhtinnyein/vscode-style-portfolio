import { expertiseAreas, languageAndFrameworks, tools } from "@/data/skills";

const SkillsPage = () => {
    return (
        <div className="animate-fadeup flex flex-col space-y-12 flex-1 p-5 md:p-10 overflow-auto font-mono">
            <div className="flex flex-col space-y-8">
                <div className="flex flex-col">
                    <div className="flex">
                        <h1 className="text-3xl text-indigo-400 border-b-4 border-[var(--color-line)]">
                            Skills & Technologies
                        </h1>
                    </div>
                    <p className="mt-4 text-sm" itemProp="description">
                        Over the years, I&apos;ve worked with a variety of languages, frameworks,
                        and tools. Here&apos;s a comprehensive overview of my technical skillset.
                    </p>
                </div>

                {/* Languages & Frameworks Section */}
                <section aria-labelledby="languages-frameworks" className="flex flex-col space-y-4">
                    <h2 id="languages-frameworks" className="text-xl text-teal-400 font-semibold">
                        Languages & Frameworks
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {languageAndFrameworks.map((skill) => (
                            <div
                                key={skill.id}
                                className="p-4 rounded-lg flex items-center space-x-3 transition-transform hover:scale-105 text-white"
                                style={{ backgroundColor: skill.color }}
                                itemProp="knowsAbout"
                            >
                                {skill?.icon}
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tools & Libraries Section */}
                <section aria-labelledby="tools-libraries" className="flex flex-col space-y-4">
                    <h2 id="tools-libraries" className="text-xl text-teal-400 font-semibold">
                        Tools & Libraries
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {tools.map((tool, index) => (
                            <span
                                key={index}
                                className="px-3 py-2 bg-[var(--color-card)] border border-[var(--color-line)] shadow-sm text-[var(--color-text)] rounded-md text-sm transition-colors"
                                itemProp="knowsAbout"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Skill Categories */}
                <section aria-labelledby="expertise-areas" className="flex flex-col space-y-4">
                    <h2 id="expertise-areas" className="text-xl text-teal-400 font-semibold">
                        Expertise Areas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {expertiseAreas.map((area, index) => (
                            <div
                                key={index}
                                className="p-5 bg-[var(--color-card)] rounded-lg border border-[var(--color-line)] shadow-sm"
                            >
                                <h3 className="text-cyan-300 font-medium mb-3">{area.title}</h3>
                                <ul className="text-sm list-disc list-inside space-y-1">
                                    {area.skills.map((skill, index) => (
                                        <li key={index} itemProp="knowsAbout">
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SkillsPage;

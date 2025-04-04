import Typewriter from "@/components/Typewriter";
import { languageAndFrameworks } from "@/data/skills";
import Image from "next/image";
import Link from "next/link";

const WelcomePage = () => {
    return (
        <div className="flex flex-1 flex-wrap flex-row justify-around items-center overflow-y-auto animate-fadeup">
            <div className="flex flex-col m-5">
                <div>
                    <span className="text-2xl font-mono text-[var(--color-text-dim)]">
                        👋 Hi there,
                    </span>
                </div>
                <div className="mt-8">
                    <h1 className="text-4xl font-mono">I&apos;m Lin Htin Nyein</h1>
                </div>
                <div className="mt-3">
                    <span className="text-2xl sm:text-3xl font-mono text-green-400">A Web Developer</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-3 mt-8">
                    <span className="text-2xl font-mono">Making Apps with</span>
                    <Typewriter
                        words={languageAndFrameworks.map((language) => ({
                            text: language.name,
                            color: language.color,
                        }))}
                        typeSpeed={70}
                        deleteSpeed={70}
                        delayBetweenWords={1500}
                        loop={true}
                        className="text-2xl font-mono font-bold"
                    />
                </div>
                <div className="flex flex-row space-x-5 mt-10">
                    <Link
                        href="/about"
                        className="border border-orange-400 px-3 py-2 hover:bg-orange-400 transition-colors"
                        aria-label="Learn more about Lin Htin Nyein"
                    >
                        Find Out More
                    </Link>
                    <Link
                        href="/contact"
                        className="border border-orange-400 px-3 py-2 hover:bg-orange-400 transition-colors"
                        aria-label="Contact Lin Htin Nyein"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
            <div>
                <Image
                    src="/images/me.png"
                    width={350}
                    height={350}
                    alt="Lin Htin Nyein - Web Developer"
                    priority={true}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};

export default WelcomePage;

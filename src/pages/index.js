import { usePageController } from "@/context/pages";
import { pages } from "@/data/pages";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
    const { openPage } = usePageController();

    return (
        <div
            className="flex flex-1 flex-wrap flex-row justify-around items-center overflow-y-auto"
        >
            <div className="flex flex-col m-5">
                <div>
                    <span className="text-2xl font-mono text-gray-400">
                        👋 Hi,
                    </span>
                </div>
                <div className="mt-8">
                    <span className="text-4xl font-mono text-gray-300">
                        I&apos;m Lin Htin Nyein
                    </span>
                </div>
                <div className="mt-3">
                    <span className="text-3xl font-mono text-red-300">
                        A Web Developer
                    </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-3 mt-8">
                    <span className="text-2xl font-mono text-gray-300">
                        Making Apps with
                    </span>
                    <span className="text-2xl font-mono text-green-400">
                        <Typewriter
                            words={[
                                "React",
                                "NextJS",
                                "ReactNative",
                                "VueJS",
                                "Laravel",
                                "Tailwind",
                                "NodeJS",
                                "ExpressJS",
                                "Bootstrap",
                                "MySQL"
                            ]}
                            loop={false}
                            cursor={true}
                        />
                    </span>
                </div>
                <div className="flex flex-row space-x-5 mt-10">
                    <button
                        className="border border-orange-400 px-3 py-2 hover:bg-orange-400"
                        onClick={() =>
                            openPage(
                                pages.find((e) => e.name === "about.md").id
                            )
                        }
                    >
                        <span className="text-gray-300">Find Out More</span>
                    </button>
                    <button
                        className="border border-orange-400 px-3 py-2 hover:bg-orange-400"
                        onClick={() =>
                            openPage(
                                pages.find((e) => e.name === "contact.css").id
                            )
                        }
                    >
                        <span className="text-gray-300">Contact Me</span>
                    </button>
                </div>
            </div>

            <div>
                <Image
                    src="/images/me.png"
                    width={350}
                    height={350}
                    alt="Picture of the author"
                    priority={true}
                />
            </div>
        </div>
    );
};

export default Home;

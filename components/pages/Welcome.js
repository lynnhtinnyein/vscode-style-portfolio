import { useGlobalContext } from "@/context/GlobalContext";
import { pages } from "@/data/pages";
import useMaxPageHeight from "@/hooks/useMaxPageHeight";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Welcome = () => {

    const { openPage } = useGlobalContext();
    const maxPageHeight = useMaxPageHeight();

    return (
        <div
            className="flex flex-1 flex-wrap flex-row justify-around items-center bg-zinc-800 overflow-y-auto"
            style={{
                maxHeight: maxPageHeight,
            }}
        >
            <div className="flex flex-col m-5">
                <div>
                    <span className="text-2xl font-mono text-gray-400">
                        Hi,
                    </span>
                </div>
                <div className="mt-8">
                    <span className="text-4xl font-mono text-gray-300">
                        I'm Lin Htin Nyein
                    </span>
                </div>
                <div className="mt-3">
                    <span className="text-3xl font-mono text-red-300">
                        A Web Developer
                    </span>
                </div>
                <div className="mt-8">
                    <span className="text-2xl font-mono text-gray-300">
                        Good at
                    </span>
                    <span className="text-2xl font-mono text-green-400 mx-3">
                        <Typewriter
                            words={[
                                "React",
                                "NextJS",
                                "ReactNative",
                                "Vue",
                                "Laravel",
                                "Tailwind",
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
                                pages.find((e) => e.name === "languages.json").id
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
                    priority={true}
                    alt="Picture of the author"
                />
            </div>
        </div>
    );
};

export default Welcome;

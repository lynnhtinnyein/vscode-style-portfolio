import { pages } from "@/data/pages";
import VsCodeIcon from "@public/icons/vs-code-icons/VsCodeIcon";
import Link from "next/link";

const HomePage = () => {
    return (
        <div className="flex flex-1 flex-col justify-center items-center">
            <VsCodeIcon />
            <span className="font-monn text-[var(--color-text-dim)] mt-10">Open a Tab to Find Out</span>
            <div className="flex flex-col mt-5 items-center">
                {pages.map((page) => (
                    <div
                        key={page.id}
                        className="flex flex-row cursor-pointer items-center space-x-2 mt-3"
                    >
                        {page.fileIcon}
                        <Link 
                            key={page.id}
                            href={page.pathname}    
                            className="text-xs text-[var(--color-pagetitle)] hover:underline"
                        >
                            {page.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;

import React, { useState } from "react";
import ChevronDownIcon from "../../../../public/icons/vs-code-icons/ChevronDownIcon";
import ChevronRightIcon from "@public/icons/vs-code-icons/ChevronRight";
import { pages } from "@/data/pages";
import { usePages } from "@/context/pages";

const Section = ({ title, pageIds }) => {
    const { activePage, openPage } = usePages();
    const [collapse, setCollapse] = useState(false);

    return (
        <div className="flex flex-col">
            <div
                className="flex flex-row cursor-pointer items-center bg-zinc-800 py-1 space-x-1 px-1"
                onClick={() => setCollapse(!collapse)}
            >
                {collapse ? (
                    <ChevronRightIcon size="16" />
                ) : (
                    <ChevronDownIcon size="16" />
                )}
                <span className="font-bold text-xs uppercase">
                    { title }
                </span>
            </div>

            <div className={`${collapse ? 'max-h-0' : 'max-h-48'} overflow-hidden transition-height duration-400`}>
                {pageIds.map( id => (
                    <div
                        key={id}
                        className={`flex flex-row space-x-2 py-1 px-5 cursor-pointer ${
                            id === activePage && "bg-zinc-700"
                        }`}
                        onClick={() => openPage(id)}
                    >
                        {pages.find((e) => e.id === id).fileIcon}
                        <span className="text-xs text-yellow-200">
                            {pages.find((e) => e.id === id).name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section;

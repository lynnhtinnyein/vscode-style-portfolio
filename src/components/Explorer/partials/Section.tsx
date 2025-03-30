"use client";
import React, { useEffect, useState } from "react";
import ChevronDownIcon from "@public/icons/vs-code-icons/ChevronDownIcon";
import ChevronRightIcon from "@public/icons/vs-code-icons/ChevronRight";
import Link from "next/link";
import { pages } from "@/data/pages";
import { useGlobalContext } from "@/contexts/GlobalContext";

interface SectionProps {
    title: string;
    pageIds: number[];
}

const Section = ({ title, pageIds }: SectionProps) => {
    const { activePageId } = useGlobalContext();
    const [collapse, setCollapse] = useState<boolean>(false);

    const shownPages = pages.filter((page) => pageIds.includes(page.id));

    const [mounted, setMounted] = useState(false);

    // prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col">
            <div
                className="flex flex-row cursor-pointer items-center bg-[var(--color-explorer-section-header)] py-1 space-x-1 px-1"
                onClick={() => setCollapse(!collapse)}
            >
                {collapse ? <ChevronRightIcon size="16"/> : <ChevronDownIcon size="16" />}
                <span className="font-bold text-xs uppercase">{title}</span>
            </div>

            <div
                className={`${
                    collapse ? "max-h-0" : "max-h-48"
                } overflow-hidden transition-height duration-400`}
            >
                {shownPages.map((page) => (
                    <Link
                        href={page.pathname}
                        key={page.id}
                        className={`flex flex-row space-x-2 py-1 px-5 cursor-pointer ${
                            page.id === activePageId ? "bg-[var(--color-bg-highlight)]" : ""
                        }`}
                    >
                        {page.fileIcon}
                        <span className="text-xs text-[var(--color-pagetitle)]">
                            {page.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Section;

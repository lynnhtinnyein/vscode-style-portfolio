"use client";

import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProjectsNavBar = () => {
    const pathname = usePathname();
    const segments = pathname.split("/");
    const id = segments[3];

    const hasId =
        (pathname.startsWith("/projects/applications/") ||
            pathname.startsWith("/projects/packages/")) &&
        id !== undefined;

    return (
        <div className="flex space-x-4 border-b border-[var(--color-line)]">
            {hasId ? (
                <Link
                    href="/projects/applications"
                    className={`py-2 flex flex-row items-center space-x-2 px-4 font-medium ${
                        hasId ? "text-teal-400 border-b-2 border-teal-400" : "text-[var(--color-text-dim)]"
                    }`}
                >
                    <ArrowLongLeftIcon className="size-6" />
                    <span className="hidden sm:block">Back</span>
                </Link>
            ) : (
                ""
            )}
            <Link
                href="/projects/applications"
                className={`py-2 px-4 font-medium ${
                    pathname === "/projects/applications"
                        ? "text-teal-400 border-b-2 border-teal-400"
                        : "text-[var(--color-text-dim)]"
                }`}
            >
                <span className="block sm:hidden">Apps</span>
                <span className="hidden sm:block">Applications</span>
            </Link>
            <Link
                href="/projects/packages"
                className={`py-2 px-4 font-medium ${
                    pathname === "/projects/packages"
                        ? "text-teal-400 border-b-2 border-teal-400"
                        : "text-[var(--color-text-dim)]"
                }`}
            >
                <span className="block sm:hidden">Packages</span>
                <span className="hidden sm:block">NPM Packages</span>
            </Link>
        </div>
    );
};

export default ProjectsNavBar;

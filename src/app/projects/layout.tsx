import ProjectsNavBar from "@/components/projects/ProjectsNavBar";
import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects & Packages | Lin Htin Nyein",
    description:
        "Explore Lin Htin Nyein's portfolio of web applications, mobile apps, and open-source npm packages. View highlighted projects and technical solutions.",
    keywords: [
        "web developer portfolio",
        "mobile app projects",
        "react projects",
        "next.js applications",
        "open source packages",
        "npm packages",
        "developer showcase",
        "Lin Htin Nyein projects",
    ],
    authors: [{ name: "Lin Htin Nyein" }],
    openGraph: {
        title: "Projects & Packages | Lin Htin Nyein - Full Stack Developer",
        description:
            "Browse through Lin Htin Nyein's portfolio of web applications, mobile apps, and open-source npm packages.",
        type: "website",
        url: "/projects",
    },
    icons: {
        icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
};

interface ProjectsLayoutProps {
    children: ReactNode;
}

const ProjectsLayout = async ({ children }: ProjectsLayoutProps) => {
    return (
        <div className="flex-1 flex flex-col space-y-12 animate-fadeup p-5 md:p-10 overflow-x-hidden overflow-y-auto font-mono">
            <div className="flex flex-col space-y-8">
                <div className="flex flex-col">
                    <div className="flex">
                        <h1 className="text-3xl text-indigo-400 border-b-4 border-[var(--color-line)]">
                            Projects & Packages
                        </h1>
                    </div>
                    <p className="mt-4 text-sm" itemProp="description">
                        A collection of my work including web applications, mobile apps, and
                        open-source npm packages.
                    </p>
                </div>
                <ProjectsNavBar />
                <main>{children}</main>
            </div>
        </div>
    );
};

export default ProjectsLayout;

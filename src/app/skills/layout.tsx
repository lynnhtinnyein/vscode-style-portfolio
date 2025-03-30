import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Skills & Technologies | Lin Htin Nyein",
    description:
        "Explore Lin Htin Nyein's technical skillset including programming languages, frameworks, tools, and expertise areas in web and mobile development.",
    keywords: [
        "full stack developer skills",
        "react developer",
        "javascript expertise",
        "mobile app development skills",
        "web development technologies",
        "frontend frameworks",
        "backend technologies",
        "developer toolchain",
        "Lin Htin Nyein skillset",
    ],
    authors: [{ name: "Lin Htin Nyein" }],
    openGraph: {
        title: "Skills & Technologies | Lin Htin Nyein - Full Stack Developer",
        description:
            "Discover Lin Htin Nyein's comprehensive technical skillset in web and mobile application development.",
        type: "profile",
        url: "/skills",
    },
    icons: {
        icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
};

interface SkillsLayoutProps {
    children: ReactNode;
}

const SkillsLayout = ({ children }: SkillsLayoutProps) => {
    return <>{children}</>;
};

export default SkillsLayout;

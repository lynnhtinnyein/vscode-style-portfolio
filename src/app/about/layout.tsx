import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lin Htin Nyein | About",
    description:
        "Lin Htin Nyein: An experienced fullstack developer specializing in web and mobile applications. Expert in frontend development, creating intuitive user interfaces and efficient solutions.",
    keywords: [
        "indie app developer",
        "web development",
        "mobile applications",
        "frontend developer",
        "user interface design",
        "React developer",
        "Next.js",
        "technology solutions",
    ],
    authors: [{ name: "Lin Htin Nyein" }],
    openGraph: {
        title: "Lin Htin Nyein - A FullStack Developer",
        description:
            "Discover the journey of Lin Htin Nyein, a developer creating innovative web and mobile applications.",
        type: "profile",
        url: "/about",
    },
    icons: {
        icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

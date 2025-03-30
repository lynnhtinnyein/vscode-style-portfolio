import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Lin Htin Nyein | Full Stack Developer",
    description:
        "Get in touch with Lin Htin Nyein, a full stack developer specializing in web and mobile applications. Contact for collaborations, project inquiries, or creative discussions.",
    keywords: [
        "contact developer",
        "hire full stack developer",
        "web development services",
        "mobile app development",
        "React developer",
        "Next.js developer",
        "Bangkok developer",
        "Lin Htin Nyein contact",
    ],
    authors: [{ name: "Lin Htin Nyein" }],
    openGraph: {
        title: "Contact Lin Htin Nyein - Full Stack Developer",
        description:
            "Connect with Lin Htin Nyein for web and mobile development projects, collaborations, or creative discussions.",
        type: "profile",
        url: "/contact",
    },
    icons: {
        icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

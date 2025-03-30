import { Inter, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActivityBar from "@/components/ActivityBar/ActivityBar";
import GlobalContextProvider from "@/contexts/GlobalContext";
import Tabs from "@/components/Tabs";
import Explorer from "@/components/Explorer";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://lynnhtinnyein.com"),
    title: {
        default: "Lin Htin Nyein | Web Developer | Portfolio",
        template: "%s | Lin Htin Nyein",
    },
    description:
        "Lin Htin Nyein is a professional web developer specializing in creating modern, responsive web applications and mobile solutions with expertise in React, Next.js and other cutting-edge technologies.",
    keywords: [
        "web developer",
        "frontend developer",
        "full stack developer",
        "React developer",
        "Next.js developer",
        "mobile app developer",
        "Bangkok developer",
        "Lin Htin Nyein",
        "JavaScript expert",
        "TypeScript developer",
    ],
    authors: [{ name: "Lin Htin Nyein" }],
    creator: "Lin Htin Nyein",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://lynnhtinnyein.com",
        title: "Lin Htin Nyein | Portfolio",
        description: "Professional portfolio showcasing my work and skills in web development",
        siteName: "Lin Htin Nyein Portfolio",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Lin Htin Nyein Portfolio",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Lin Htin Nyein | Portfolio",
        description: "Professional portfolio showcasing my work and skills in web development",
        images: ["/og-image.jpg"],
        creator: "@lynnhtinnyein",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${robotoMono.variable} font-sans bg-[var(--color-background)]`}>
                <ThemeProvider>
                    <div className="fixed inset-0 overflow-hidden flex flex-col justify-between ">
                        <Header />
                        <main className="flex-1 flex flex-row overflow-hidden">
                            <GlobalContextProvider>
                                <ActivityBar />
                                <div className="flex-1 flex flex-row relative overflow-hidden">
                                    <Explorer />
                                    <div className="flex-1 flex flex-col overflow-hidden gap-y-[1px]">
                                        <Tabs />
                                        <div className="flex-1 flex bg-[var(--color-content)] overflow-y-auto overflow-x-hidden">
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </GlobalContextProvider>
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
                {process.env.NODE_ENV === "production" && (
                    <>
                        <Analytics />
                        <SpeedInsights />
                    </>
                )}
            </body>
        </html>
    );
}

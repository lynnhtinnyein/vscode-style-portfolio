import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Lin Htin Nyein",
    description: "Portfolio",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={`m-0 p-0 bg-zinc-900 ${inter.className}`}>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;


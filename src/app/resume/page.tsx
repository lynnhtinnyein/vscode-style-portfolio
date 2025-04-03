"use client";
import { useRef, useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import PageOne from "@/components/resume/PageOne";
import PageTwo from "@/components/resume/PageTwo";

const ResumePage = () => {
    const pageOneRef = useRef(null);
    const pageTwoRef = useRef(null);

    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        if (confirm("Are you sure you want to download the resume?")) {
            setIsDownloading(true)
            try {
                // Convert each page to an image
                if (!pageOneRef.current || !pageTwoRef.current) {
                    console.error("Page references not found");
                    return;
                }

                // Create PDF (A4 size: 210mm x 297mm)
                const pdf = new jsPDF({
                    orientation: "portrait",
                    unit: "mm",
                    format: "a4",
                });

                // Page One
                const pageOneDataUrl = await toPng(pageOneRef.current, {
                    quality: 1.0,
                    pixelRatio: 2,
                    skipAutoScale: true,
                });
                pdf.addImage(pageOneDataUrl, "PNG", 0, 0, 210, 297);

                // Page Two
                const pageTwoDataUrl = await toPng(pageTwoRef.current, {
                    quality: 1.0,
                    pixelRatio: 2,
                    skipAutoScale: true,
                });
                pdf.addPage();
                pdf.addImage(pageTwoDataUrl, "PNG", 0, 0, 210, 297);

                // Save PDF
                pdf.save("lin-htin-nyein-resume.pdf");
            } catch (error) {
                console.error("Error generating PDF:", error);
                alert("Failed to generate PDF. Please try again.");
            } finally {
                setIsDownloading(false);
            }
        }
    };

    return (
        <div className="flex-1 flex flex-col font-mono bg-[var(--color-bg-highlight)]">
            <div className="flex flex-row items-center justify-between px-5 py-3 shadow-md z-[1] bg-[var(--color-content)]">
                <h1 className="text-3xl font-bold">Resume</h1>
                <div className="flex flex-row items-center gap-3">
                    <span className="text-sm font-sans text-[var(--color-text)]">A4 size</span>
                    <button
                        onClick={handleDownload}
                        className="flex flex-row space-x-2 disabled:opacity-80 items-center text-sm px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                        disabled={isDownloading}
                    >
                        <ArrowDownTrayIcon className="size-4" />
                        <span>{isDownloading ? "Downloading..." : "Download"}</span>
                    </button>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col items-center my-10 space-y-5">
                    <div ref={pageOneRef}>
                        <PageOne />
                    </div>
                    <div ref={pageTwoRef}>
                        <PageTwo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;

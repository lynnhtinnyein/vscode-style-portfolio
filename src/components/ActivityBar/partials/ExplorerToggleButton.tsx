"use client";
import { useGlobalContext } from "@/contexts/GlobalContext";
import FilesIcon from "@public/icons/vs-code-icons/FilesIcon";
import { useEffect, useState } from "react";

const ExplorerToggleButton = () => {
    const {showExplorer, setShowExplorer} = useGlobalContext();
    const [mounted, setMounted] = useState(false);

    // prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div
            className={`flex items-center justify-center cursor-pointer h-12 ${
                showExplorer ? "border-l border-l-[var(--color-explorer-icon-active)] text-[var(--color-explorer-icon-active)]" : ""
            }`}
            onClick={() => setShowExplorer(!showExplorer)}
        >
            <FilesIcon />
        </div>
    );
};

export default ExplorerToggleButton;

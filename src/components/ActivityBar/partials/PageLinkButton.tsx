"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { useGlobalContext } from "@/contexts/GlobalContext";

interface PageLinkButtonProps {
    id: number;
    pathname: string;
    icon: ReactNode;
}

const PageLinkButton = ({ id, pathname, icon }: PageLinkButtonProps) => {
    const { activePageId } = useGlobalContext();
    const [mounted, setMounted] = useState(false);

    // prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Link
            href={pathname}
            className={`flex items-center justify-center cursor-pointer h-12  hover:text-[var(--color-text)] ${
                id === activePageId
                    ? "border-l border-l-[var(--color-text-active)] text-[var(--color-text-active)]"
                    : "text-[var(--color-text-dim)]"
            }`}
        >
            {icon}
        </Link>
    );
};

export default PageLinkButton;

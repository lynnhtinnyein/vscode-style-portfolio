"use client";

import CheckIcon from "@public/icons/vs-code-icons/CheckIcon";
import SettingsIcon from "@public/icons/vs-code-icons/SettingsIcon";
import { useTheme } from "next-themes";
import { SetStateAction, useEffect, useState } from "react";

const SettingButton = () => {
    const { theme: currentTheme, themes, setTheme } = useTheme();
    const [showSetting, setShowSetting] = useState(false);
    const [mounted, setMounted] = useState(false);

    // prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleOnChangeTheme = (theme: SetStateAction<string>) => {
        setTheme(theme);
        setShowSetting(false);
    }
    

    if (!mounted) return null;

    return (
        <div className="relative z-10">
            <button
                className={`flex flex-1 items-center justify-center cursor-pointer h-12 w-12 hover:text-[var(--color-text)] ${
                    showSetting
                        ? "border-l border-l-[var(--color-text-active)] text-[var(--color-text-active)]"
                        : "text-[var(--color-text-dim)]"
                }`}
                onClick={() => setShowSetting(!showSetting)}
            >
                <SettingsIcon />
            </button>

            {showSetting ? (
                <>
                    {/* backdrop to close setting */}
                    <div
                        className="fixed top-0 right-0 left-0 bottom-0 bg-none"
                        onClick={() => setShowSetting(false)}
                    />
                    <div className="absolute left-11 bottom-2 min-w-32 p-1 flex flex-col rounded border space-y-1 border-[var(--color-text-dim)] bg-[var(--color-activitybar)]">
                        <div className="flex justify-center items-center mx-2 min-h-8 border-b border-b-[var(--color-text-dim)]">
                            <span className="text-sm font-bold">Themes</span>
                        </div>

                        <div className="flex flex-col">
                            {themes.map((theme) => (
                                <div
                                    key={theme}
                                    className="flex cursor-pointer flex-row min-h-8 text-sm justify-start items-center rounded hover:bg-[var(--color-bg-highlight)]"
                                    onClick={() => handleOnChangeTheme(theme)}
                                >
                                    <div className="flex justify-center min-w-7">
                                        {currentTheme === theme ? <CheckIcon size={14} /> : ""}
                                    </div>
                                    <span className="text-xs capitalize">{theme}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                ""
            )}
        </div>
    );
};

export default SettingButton;

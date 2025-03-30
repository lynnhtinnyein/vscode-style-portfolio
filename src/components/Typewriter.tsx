"use client";
import React, { useState, useEffect, useRef, memo } from "react";

interface WordObject {
    text: string;
    color: string;
}

interface TypewriterProps {
    words: WordObject[];
    typeSpeed?: number;
    deleteSpeed?: number;
    delayBetweenWords?: number;
    loop?: boolean;
    className?: string;
    cursorClassName?: string;
    onTypingDone?: () => void;
}

const Typewriter = ({
    words = [{ text: "Hello World!", color: "black" }],
    typeSpeed = 150,
    deleteSpeed = 150,
    delayBetweenWords = 1500,
    loop = true,
    className = "",
    onTypingDone = () => {},
}: TypewriterProps) => {
    const [displayText, setDisplayText] = useState<string>("");
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentColor, setCurrentColor] = useState(words[0]?.color || "black");
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const currentStateRef = useRef<"typing" | "waiting" | "deleting">("typing");
    const textLengthRef = useRef(0);

    useEffect(() => {
        const runAnimation = () => {
            const currentWord = words[currentIndex].text;
            const wordColor = words[currentIndex].color || "black";

            if (currentStateRef.current === "typing") {
                if (textLengthRef.current < currentWord.length) {
                    textLengthRef.current += 1;
                    setDisplayText(currentWord.substring(0, textLengthRef.current));
                    setCurrentColor(wordColor);
                    timeoutRef.current = setTimeout(runAnimation, typeSpeed);
                } else {
                    currentStateRef.current = "waiting";
                    timeoutRef.current = setTimeout(runAnimation, delayBetweenWords);
                }
            } else if (currentStateRef.current === "waiting") {
                currentStateRef.current = "deleting";
                timeoutRef.current = setTimeout(runAnimation, deleteSpeed);
            } else if (currentStateRef.current === "deleting") {
                if (textLengthRef.current > 0) {
                    textLengthRef.current -= 1;
                    setDisplayText(currentWord.substring(0, textLengthRef.current));
                    timeoutRef.current = setTimeout(runAnimation, deleteSpeed);
                } else {
                    const isLastWord = currentIndex === words.length - 1;
                    if (isLastWord && !loop) {
                        setIsComplete(true);
                        onTypingDone();
                        return;
                    }
                    const nextIndex = isLastWord ? 0 : currentIndex + 1;
                    setCurrentIndex(nextIndex);
                    currentStateRef.current = "typing";
                    timeoutRef.current = setTimeout(runAnimation, typeSpeed);
                }
            }
        };

        if (!isComplete) {
            timeoutRef.current = setTimeout(runAnimation, typeSpeed);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [
        currentIndex,
        delayBetweenWords,
        deleteSpeed,
        isComplete,
        loop,
        onTypingDone,
        typeSpeed,
        words,
    ]);

    return (
        <span style={{ color: currentColor }} className={`flex flex-row items-center ${className}`}>
            <span>{displayText}</span>
            <span className="cursor animate-pulse-fast">|</span>
        </span>
    );
};

export default memo(Typewriter);

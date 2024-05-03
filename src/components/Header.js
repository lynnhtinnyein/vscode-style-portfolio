import NextjsIcon from "@public/icons/vs-code-icons/NextjsIcon";
import React from "react";

const Header = () => {
    return (
        <div className="flex flex-row min-h-9 px-2">
            <div className="flex flex-row items-center w-1/3 space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>
            <div className="flex items-center justify-center w-1/3">
                <span className="text-xs">@lynnhtinnyein</span>
            </div>
            <div className="flex mr-1 items-center justify-end w-1/3">
                <span className="text-white">
                    <NextjsIcon size="16"/>
                </span>            
            </div>
        </div>
    );
};

export default Header;

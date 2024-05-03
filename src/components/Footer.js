import { contacts } from "@/data/contacts";
import SourceControlIcon from "@public/icons/vs-code-icons/SourceControlIcon";
import WarningTriangleIcon from "@public/icons/vs-code-icons/WarningTriangleIcon";
import XCircleIcon from "@public/icons/vs-code-icons/XCircleIcon";
import React from "react";

const Footer = () => {
    return (
        <div className="min-h-7 flex flex-row justify-between items-center bg-zinc-700 px-3">
            <div className="flex flex-row items-center">
                <a
                    href="https://github.com/lynnhtinnyein/vscode-style-portfolio"
                    className="flex flex-row items-center"
                    target="_blank"
                >
                    <span className="text-gray-300 mr-1">
                        <SourceControlIcon size="13" />
                    </span>
                    <span className="text-xs text-gray-300 mr-4">main</span>
                </a>

                <span className="text-gray-300 mr-1">
                    <XCircleIcon size="16" />
                </span>

                <span className="text-gray-300 text-xs mr-1">0</span>

                <span className="text-gray-300 mr-1">
                    <WarningTriangleIcon size="16" />
                </span>

                <span className="text-gray-300 text-xs">0</span>
            </div>

            <div className="flex flex-row items-center space-x-2">
                { contacts.map( contact => (
                    <a
                        key={contact.id}
                        href={contact.link}
                        className="text-gray-300"
                        target="_blank"
                    >
                        { contact.icon }
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Footer;

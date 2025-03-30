import { socials } from "@/data/socials";
import { ExclamationTriangleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import SourceControlIcon from "@public/icons/vs-code-icons/SourceControlIcon";

const Footer = () => {
    return (
        <footer className="min-h-7 flex flex-row justify-between items-center px-3 bg-[var(--color-footer)]">
            <div className="flex flex-row items-center">
                <a
                    href="https://github.com/lynnhtinnyein/vscode-style-portfolio"
                    className="flex flex-row items-center"
                    target="_blank"
                >
                    <span className="mr-1">
                        <SourceControlIcon size="13" />
                    </span>
                    <span className="text-xs mr-4">main</span>
                </a>

                <span className="mr-1">
                    <XCircleIcon className="size-4" />
                </span>

                <span className="text-xs mr-1">0</span>

                <span className="mr-1">
                    <ExclamationTriangleIcon className="size-4" />
                </span>

                <span className="text-xs">0</span>
            </div>

            <div className="flex flex-row items-center space-x-2">
                {socials.map((contact) => (
                    <a
                        key={contact.id}
                        href={contact.link}
                        target="_blank"
                    >
                        {contact.icon}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;

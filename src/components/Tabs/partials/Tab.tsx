import XIcon from "@public/icons/vs-code-icons/XIcon";
import Link from "next/link";

interface TabProps {
    page: Page;
    isActive: boolean;
    onClose: () => void;
}

const Tab = ({ 
    page,
    isActive,
    onClose
}: TabProps) => {    
    return (
        <div
            className={`flex flex-row cursor-pointer pr-3 items-center space-x-2 ${
                isActive ? 'bg-[var(--color-tab-active)]' : 'bg-[var(--color-tab)]'
            }`}
        >
            <Link 
                href={page.pathname}
                className="flex flex-row space-x-2 py-2 pl-3"
            >
                { page ? page.fileIcon : '' }

                <span className="text-[var(--color-pagetitle)] text-xs">
                    { page ? page.name : '' }
                </span>
            </Link>

            <div
                className="hover:bg-[var(--color-bg-highlight)] rounded"
                onClick={onClose}
            >
                <XIcon size="14" />
            </div>
        </div>
    );
};

export default Tab;

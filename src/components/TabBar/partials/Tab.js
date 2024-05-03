import { pages } from "@/data/pages";
import XIcon from "@public/icons/vs-code-icons/XIcon";

const Tab = ({ id, isActive, onClick, onClose }) => {
    return (
        <div
            className={`flex flex-row cursor-pointer pr-3 items-center space-x-2 border-r border-r-zinc-900 ${
                isActive ? 'bg-zinc-800' : 'bg-zinc-700'
            }`}
        >
            <div
                className="flex flex-row space-x-2 py-2 pl-3"
                onClick={onClick}
            >
                { pages.find((e) => e.id === id).fileIcon }

                <span className="text-yellow-200 text-xs">
                    { pages.find((e) => e.id === id).name }
                </span>
            </div>

            <div
                className="hover:bg-gray-500 rounded"
                onClick={onClose}
            >
                <XIcon size="14" />
            </div>
        </div>
    );
};

export default Tab;

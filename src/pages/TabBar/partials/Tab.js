import { pages } from "@/data/pages";
import XIcon from "@public/icons/vs-code-icons/XIcon";

const Tab = ({ id, isActive, onClick, onClose }) => {
    return (
        <div
            className={`flex flex-row cursor-pointer pr-3 items-center space-x-2 border-r border-r-zinc-900 ${
                isActive ? 'bg-zinc-800' : 'bg-zinc-700'
            }`}
        >
            <span>{id}</span>
        </div>
    );
};

export default Tab;

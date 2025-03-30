import NextJsIcon from "@public/icons/language-icons/NextJsIcon";

const Header = () => {
    return (
        <header className="flex flex-row min-h-9 px-2 bg-[var(--color-header)]">
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
                    <NextJsIcon size={16} className="text-[var(--color-text-active)]" />
                </span>            
            </div>
        </header>
    );
};

export default Header;

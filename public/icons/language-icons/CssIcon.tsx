const CssIcon = ({ size = 24, className } : IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            version="1.1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="m5 3l-.65 3.34h13.59l-.44 2.16h-13.58l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64h-3.34l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21 1.54-7.76h-16.94z"
                fill="#42a5f5"
            />
        </svg>
    );
};

export default CssIcon;

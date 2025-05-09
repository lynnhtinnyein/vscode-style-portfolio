const MarkDownIcon = ({ size = 24, className } : IconProps) => {
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
                d="m2.25 15.75v-8h2l3 3 3-3h2v8h-2v-5.17l-3 3-3-3v5.17h-2m14-8h3v4h2.5l-4 4.5-4-4.5h2.5z"
                fill="#42a5f5"
            />
        </svg>
    );
};

export default MarkDownIcon;
const DoubleCheckIcon = ({ size = 24, className } : IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.62 3.596 7.815 12.81l-.728-.033L4 8.382l.754-.53 2.744 3.907L14.917 3l.703.596z"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m7.234 8.774 4.386-5.178L10.917 3l-4.23 4.994.547.78zm-1.55.403.548.78-.547-.78zm-1.617 1.91.547.78-.799.943-.728-.033L0 8.382l.754-.53 2.744 3.907.57-.672z"
            />
        </svg>
    );
};

export default DoubleCheckIcon;

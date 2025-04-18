const HtmlIcon = ({ size = 24, className } : IconProps) => {
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
                d="m12 17.56l4.07-1.13.55-6.1h-7.24l-.18-2.03h7.6l.2-1.99h-10l.56 6.01h6.89l-.23 2.58-2.22.6-2.22-.6-.14-1.66h-2l.29 3.19 4.07 1.13m-7.93-14.56h15.86l-1.43 16.2-6.5 1.8-6.5-1.8-1.43-16.2z"
                fill="#e44d26"
            />
        </svg>
    );
};

export default HtmlIcon;

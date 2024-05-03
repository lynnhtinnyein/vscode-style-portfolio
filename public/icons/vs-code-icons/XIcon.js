const XIcon = ({ size = 24 }) => {
    return (
        <svg
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-gray-300"
        >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
          />
      </svg>
    );
};

export default XIcon;
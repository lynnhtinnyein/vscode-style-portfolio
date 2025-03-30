interface IconProps {
    size?: string | number;
    className?: string;
    color?: string;
}

interface Page {
    id: number;
    name: string;
    pathname: string;
    fileIcon: JSX.Element;
    activityBarIcon: JSX.Element;
    activityBarPosition: "top" | "bottom";
}

interface Project {
    id: number;
    name: string;
    status: string;
    about: string;
    mainFeatures: string[];
    teches: string[];
    showcaseImage: string;
    link: string | null;
    imageSource: string;
    numbersOfScreenshots: {
        desktop: number;
        mobile: number;
    };
};

import { usePages } from "@/context/pages";
import Welcome from "./index";
import React, { useEffect } from "react";
import { pages } from "@/data/pages";

const About = () => {
    const { openPage } = usePages();

    useEffect(() => {
        openPage(pages.find( e => e.name === 'about.md').id);
    }, []);

    return (
        <Welcome />
    );
};

export default About;

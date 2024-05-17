import { usePages } from "@/context/pages";
import Welcome from "./index";
import React, { useEffect } from "react";
import { pages } from "@/data/pages";

const Projects = () => {
    const { openPage } = usePages();

    useEffect(() => {
        openPage(pages.find( e => e.name === 'projects.js').id);
    }, []);

    return (
        <Welcome />
    );
};

export default Projects;

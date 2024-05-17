import { usePages } from "@/context/pages";
import Welcome from "./index";
import React, { useEffect } from "react";
import { pages } from "@/data/pages";

const Languages = () => {
    const { openPage } = usePages();

    useEffect(() => {
        openPage(pages.find( e => e.name === 'languages.json').id);
    }, []);

    return (
        <Welcome />
    );
};

export default Languages;

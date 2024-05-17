import { usePages } from "@/context/pages";
import Welcome from "./index";
import React, { useEffect } from "react";
import { pages } from "@/data/pages";

const Github = () => {
    const { openPage } = usePages();

    useEffect(() => {
        openPage(pages.find( e => e.name === 'github.git').id);
    }, []);

    return (
        <Welcome />
    );
};

export default Github;

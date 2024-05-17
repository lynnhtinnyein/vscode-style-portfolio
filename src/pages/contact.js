import { usePages } from "@/context/pages";
import Welcome from "./index";
import React, { useEffect } from "react";
import { pages } from "@/data/pages";

const Contact = () => {
    const { openPage } = usePages();

    useEffect(() => {
        openPage(pages.find( e => e.name === 'contact.css').id);
    }, []);

    return (
        <Welcome />
    );
};

export default Contact;

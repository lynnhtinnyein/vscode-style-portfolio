import { useRouter } from "next/router";
import React from "react";

const Project = () => {
    const router = useRouter();
    console.log(router.query.id);
    return (
        <div>Project</div>
    );
};

export default Project;

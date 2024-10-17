import React from "react";

import ProjectsCard from "@/components/ProjectsCard";

const Projects: React.FC = () => {
    return (
        <div id="projects" className="wrapper">
            <div className="grid grid-cols-2 p-12 items-center justify-center">
                <ProjectsCard></ProjectsCard>
                <ProjectsCard></ProjectsCard>
            </div>
        </div>
    );
};

export default Projects;
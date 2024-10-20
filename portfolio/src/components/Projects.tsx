import React from "react";

import ProjectsCard from "@/components/ProjectsCard";

const Projects: React.FC = () => {
    return (
        <div id="projects" className="wrapper">
            <div className="flex flex-col gap-y-12 p-12 items-center justify-center">
                <div>
                    <h1 className="font-caladea text-6xl text-earth-grey">projects</h1>
                </div>
                <div className="flex flex-wrap gap-12 items-center justify-center">
                    <ProjectsCard></ProjectsCard>
                    <ProjectsCard></ProjectsCard>
                    <ProjectsCard></ProjectsCard>
                    <ProjectsCard></ProjectsCard>
                </div>
            </div>
        </div>
    );
};

export default Projects;
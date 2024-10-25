import React from "react";

import ProjectsCard from "@/components/ProjectsCard";
import Header from "@/components/Header";
import { projectItems } from "@/data/PortfolioData";

const Projects: React.FC = () => {
    return (
        <section id="projects" className="wrapper">
            <div className="flex flex-col gap-y-12 p-12 items-center justify-center">
                <Header text="projects"></Header>
                <div className="flex flex-wrap gap-12 items-center justify-center">
                    { projectItems.map((item, index) => (
                        <ProjectsCard type={ item.type }
                            name={ item.name }
                            src={ item.src }
                            description={ item.description }
                            repoLink={ item.repoLink }
                            demoLink={ item.demoLink }
                            tags={ item.tags }
                            index={ index }>
                        </ProjectsCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
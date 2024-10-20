import React from "react";

import SkillsCard from "@/components/SkillsCard";
import { skillsItems } from "@/data/PortfolioData";

const Skills: React.FC = () => {
    return (
        <div id="skills" className="wrapper">
            <div className="flex flex-col gap-y-8 p-12 items-center justify-center">
                { skillsItems.map((item) => (
                    <div className="flex flex-col gap-y-6 items-center justify-center">
                        <h1 className="font-caladea text-6xl text-earth-grey">{ item.category }</h1>
                        <div className="flex flex-wrap gap-12 items-center justify-center">
                            { item.technologies.map((technology) => (
                                <SkillsCard name={ technology.name } src={ technology.src }></SkillsCard>
                            ))
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
import React from "react";

import SkillsCard from "@/components/SkillsCard";
import { skillsItems } from "@/data/PortfolioData";
import Header from "@/components/Header";

const Skills: React.FC = () => {
    return (
        <section id="skills" className="wrapper">
            <div className="flex flex-col gap-y-8 p-12 items-center justify-center">
                { skillsItems.map((item) => (
                    <div className="flex flex-col gap-y-6 items-center justify-center">
                        <Header text={ item.category }></Header>
                        <div className="flex flex-wrap gap-12 items-center justify-center">
                            { item.technologies.map((technology, index) => (
                                <SkillsCard name={ technology.name } src={ technology.src } index={ index }></SkillsCard>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
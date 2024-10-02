import React from "react";
import SkillsCard from "@/components/SkillsCard";

const Skills = () => {
    return (
        <div className="wrapper pt-16">
            <div className="flex flex-col gap-y-8 font-caladea text-6xl text-earth-grey items-center justify-center">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <h1>languages</h1>
                    <div className="flex gap-x-20">
                        <SkillsCard></SkillsCard>
                        <SkillsCard></SkillsCard>
                        <SkillsCard></SkillsCard>
                        <SkillsCard></SkillsCard>
                        <SkillsCard></SkillsCard>
                        <SkillsCard></SkillsCard>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <h1>frameworks</h1>
                    <div className="flex gap-x-20">
                        <SkillsCard></SkillsCard>
                        <SkillsCard></SkillsCard>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <h1>dev tools</h1>
                    <div className="flex gap-x-20">
                        <SkillsCard></SkillsCard>
                        <SkillsCard></SkillsCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
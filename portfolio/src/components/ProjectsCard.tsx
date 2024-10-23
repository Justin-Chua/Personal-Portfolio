import React from "react";
import Image from "next/image";

import { GitHub, OpenInNew } from "@mui/icons-material";
import Chip from "@/components/Chip";

const ProjectsCard: React.FC = () => {
    return (
        <div className="flex flex-col gap-y-4 p-6 w-[450px] h-[650px] rounded-2xl bg-earth-beige-dark border-4 border-earth-beige-light">
            <div className="flex items-center justify-center">
                <Image src="/resources/about/witcher.jpg" height={ 0 } width={ 400 } alt="soul train"/>
            </div>
            <div className="flex flex-col items-start justify-start">
                <h3 className="font-caladea font-normal italic text-xl text-earth-green">full stack web application</h3>
                <h2 className="font-caladea font-bold text-3xl text-earth-grey">make mobile great again</h2>
            </div>
            <p className="font-poppins font-normal text-sm leading-[1.7] text-earth-grey">a web application designed for indie mobile game developers 
                to showcase early versions of their games, connect with gamers, and grow their community. users can explore and view a diverse
                variety of games, stay updated with recent gaming news, add friends, and actively participate in discussions.</p>
            <div className="flex flex-wrap gap-1 items-start justify-start">
                <Chip technology="Python"></Chip>
                <Chip technology="JavaScript"></Chip>
                <Chip technology="Django"></Chip>
                <Chip technology="React.js"></Chip>
                <Chip technology="MySQL"></Chip>
                <Chip technology="Bootstrap"></Chip>
            </div>
            <div className="flex flex-row gap-4 items-center justify-between">
                <a className="bg-earth-white p-3 w-1/2 rounded-full font-poppins font-medium text-lg text-earth-grey text-center"
                    href="https://www.google.ca">
                        <GitHub className="text-earth-grey mr-2"></GitHub>
                        repository
                </a>
                <a className="bg-earth-grey p-3 w-1/2 rounded-full font-poppins font-medium text-lg text-earth-white text-center"
                    href="https://www.google.ca">
                        <OpenInNew className="text-earth-white mr-2"></OpenInNew>
                        live demo
                </a>
            </div>
        </div>
    );
};

export default ProjectsCard;
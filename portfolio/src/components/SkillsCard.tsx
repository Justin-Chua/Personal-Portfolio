import React from "react";
import Image from "next/image";
import next_logo from "@/resources/icons/frameworks/next_logo.png";

const SkillsCard = () => {
    return (
        <div className="flex flex-col gap-y-1.5 w-[140px] aspect-square rounded-xl 
        transform transition-all hover:-translate-y-1 shadow-lg hover:shadow-2xl 
        bg-earth-beige items-center justify-center">
            <Image src={ next_logo } alt="next_logo" className="max-w-24"></Image>
            <p className="font-poppins text-lg text-earth-grey">JavaScript</p>
        </div>
    );
};

export default SkillsCard;
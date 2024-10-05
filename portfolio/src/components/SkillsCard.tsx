import React from "react";
import Image from "next/image";

// This component receives props from the Skills component, which includes the image source and label.
const SkillsCard: React.FC<{ name: string ; src: string }> = ({ name, src }) => {
    return (
        <div className="flex flex-col w-[140px] aspect-square rounded-xl 
        transform transition-all hover:-translate-y-1 shadow-lg hover:shadow-2xl 
        bg-earth-beige items-center justify-center">
            <Image src={ src } height={ 100 } width={ 100 } alt="next_logo"/>
            <p className="font-poppins text-lg text-earth-grey">{ name }</p>
        </div>
    );
};

export default SkillsCard;
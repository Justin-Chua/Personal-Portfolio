import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

// This component receives props from the Skills component, which includes the image source and label.
const SkillsCard: React.FC<{ name: string; src: string; index: number; }> = ({ name, src, index }) => {

    const { ref, inView } = useInView({
        threshold: 1,
        rootMargin: `-${ 64 + 48 }px 0px 0px 0px`,
        triggerOnce: true
    });

    return (
        <div ref={ ref }
            // we use style to apply transition delay dynamically instead of using className
            style={{ transitionDelay: `${ 150 * index }ms` }}
            className={ `flex flex-col w-[125px] aspect-square rounded-2xl 
            border-4 border-earth-beige-light bg-earth-beige-dark items-center justify-center
            ${ inView ? "slide-y" : "opacity-0 translate-y-[100px]" } }`}>
            <Image src={ src } height={ 90 } width={ 90 } alt={ `${ name } logo` }/>
            <p className="font-poppins text-lg text-earth-grey">{ name }</p>
        </div>
    );
};

export default SkillsCard;
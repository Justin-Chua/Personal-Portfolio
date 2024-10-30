import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { GitHub, OpenInNew } from "@mui/icons-material";
import Chip from "@/components/Chip";

const ProjectsCard: React.FC<{ type: string; name: string; src: string; description: string; repoLink?: string; demoLink?: string; tags: string[]; index: number; }> 
= ({ type, name, src, description, repoLink, demoLink, tags, index }) => {

    const { ref, inView } = useInView({
        threshold: 0.35,
        rootMargin: `-${ 64 + 48 }px 0px 0px 0px`,
        triggerOnce: true
    });

    return (
        <div ref={ ref }
            style={{ transitionDelay: `${ 150 * index }ms` }}
            className={ `flex flex-col gap-y-4 p-6 max-w-[450px] min-h-[650px] rounded-2xl bg-earth-beige-dark border-4 border-earth-beige-light justify-between
            ${ inView ? "slide-y" : "opacity-0 translate-y-[100px]" }` }>
            <Image src={ src } height={ 0 } width={ 400 } alt={ `${ name } logo` }/>
            <div className="flex flex-col items-start justify-start">
                <h3 className="font-caladea font-normal italic text-lg text-earth-green">{ type }</h3>
                <h2 className="font-caladea font-bold text-3xl text-earth-grey">{ name }</h2>
            </div>
            <p className="font-poppins font-normal text-sm leading-[1.7] text-earth-grey">
                { description }
            </p>
            <div className="flex flex-wrap gap-1 items-start justify-start">
                { tags.map((tag, index) => (
                    <Chip key={ index } technology={ tag }></Chip>
                ))}
            </div>
            <div className="flex flex-row gap-4 items-center justify-between">
                { repoLink !== undefined ? (
                    <a className="project-link bg-earth-yellow-light text-earth-brown-light
                        hover:bg-earth-yellow-dark hover:text-earth-brown-dark active:scale-95"
                        href={ repoLink }>
                        <GitHub color="inherit" fontSize="inherit" className="mr-2"></GitHub>
                        repository
                    </a>
                ) : (
                    <button disabled
                        className="project-link bg-earth-yellow-light text-earth-brown-light brightness-50">
                        <GitHub color="inherit" fontSize="inherit" className="mr-2"></GitHub>
                        repository
                    </button>                    
                )}
                { demoLink !== undefined ? (
                    <a className="project-link bg-earth-brown-light text-earth-yellow-light
                        hover:bg-earth-brown-dark hover:text-earth-yellow-dark active:scale-95"
                    href={ demoLink }>
                        <OpenInNew color="inherit" fontSize="inherit" className="mr-2"></OpenInNew>
                        live demo
                    </a>
                ) : (
                    <button disabled
                        className="project-link bg-earth-brown-light text-earth-yellow-light brightness-50">
                        <OpenInNew color="inherit" fontSize="inherit" className="mr-2"></OpenInNew>
                        live demo
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProjectsCard;
import React from "react";
import { useInView } from "react-intersection-observer";

const Header: React.FC<{ text: string }> = ({ text }) => {

    const { ref, inView } = useInView({
        threshold: 1,
        rootMargin: `-${ 64 + 48 }px 0px 0px 0px`,
        triggerOnce: true
    });

    return (
        <h1 ref={ ref }
        className={ `font-caladea text-6xl font-bold text-center text-earth-grey hidden md:block
        ${ inView ? "transition-all duration-500 ease-out opacity-100 translate-y-[0px]" 
        : "opacity-0 translate-y-[50px]" }` }>
        { text }
        </h1>    
    );
};

export default Header;
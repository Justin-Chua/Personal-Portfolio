import React, { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

import { aboutNames, aboutItems } from "@/data/PortfolioData";

const About: React.FC = () => {
    // index state to control the image/description being displayed
    const [index, setIndex] = useState(0);
    // fade state to control the transition between image/description slides
    const [fade, setFade] = useState(false);

    useEffect(() => {
        // interval used to advance image + description every 5 seconds
        const slideInterval = setInterval(() => {
            // trigger the fade-out animation
            setFade(true);
            // add a delay of 500ms to allow transition to resolve
            setTimeout(() => {
                // set index to current (most recent) value of index, and increment
                setIndex(prevIndex => (prevIndex + 1) % aboutItems.length);
                // trigger fade-in animation
                setFade(false);
            }, 700);
        }, 25000);

        // clear the interval on unmount
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div id="about-section" className="wrapper">
            <div className="flex gap-x-4 flex-row p-12 pl-32">
                <p className="font-caladea text-8xl text-earth-grey">i love...</p>
                <div className="font-caladea text-8xl text-earth-grey">
                    <Typewriter
                        options={ {
                            strings: aboutNames,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                 </div>
            </div>
            <div className="flex gap-x-16 p-16 mx-16 rounded-3xl shadow-lg 
                border-4 border-earth-beige-light bg-earth-beige-dark items-center justify-between">
                <pre className={ `font-poppins text-xl font-normal text-wrap text-earth-grey leading-[1.7]
                    transition-fade ${ fade ? "opacity-0" : "opacity-100" }` }>
                    { aboutItems[index].description }
                </pre>
                <Image src={ aboutItems[index].src } height={ 0 } width={ 800 } alt={ `${ aboutNames[index] } logo` }
                    className={ `transition-fade ${ fade ? "opacity-0" : "opacity-100" }` }/>
            </div>
        </div>
    );
};

export default About;
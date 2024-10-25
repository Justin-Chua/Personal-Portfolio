import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { KeyboardArrowDown } from "@mui/icons-material";
import { introduction } from "@/data/PortfolioData";
import Header from "@/components/Header";

const Home: React.FC = () => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        rootMargin: "-64px 0px 0px 0px",
        triggerOnce: true
    });
    
    return (
        <section id="home" className="wrapper bg-minimalist-home bg-cover">
            <div className="flex flex-col gap-y-12 p-12 items-center justify-center">
                <Header text="hi everyone! i'm justin :)"></Header>
                <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-32">
                    <Image ref={ ref }
                        src="/resources/images/grad_photo.jpg" height={ 0 } width={ 300 } alt="Graduation photo"
                        className={ `border-[25px] border-earth-white md:w-[450px]
                        ${ inView ? "slide-x" 
                        : "opacity-0 translate-x-[-100px]" }` }/>
                    <div ref={ ref }
                        className={ `flex flex-col items-center justify-center gap-y-2
                        ${ inView ? "slide-x"
                        : "opacity-0 translate-x-[100px]" }` }>
                        <p className="max-w-3xl p-8 md:p-4 font-poppins text-xl md:text-3xl font-normal text-center 
                        text-earth-grey leading-relaxed md:leading-loose">
                            { introduction }
                        </p>
                        <Link href="#about">
                            <KeyboardArrowDown className="text-6xl text-earth-grey animate-bounce" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
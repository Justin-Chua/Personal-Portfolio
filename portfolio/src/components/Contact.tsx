import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import Header from "@/components/Header";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";

const Contact: React.FC = () => {

    const { ref, inView } = useInView({
        threshold: 0.35,
        rootMargin: `-${ 64 + 48 }px 0px 0px 0px`,
        triggerOnce: true
    });

    return (
        <section id="contact" className="contact-wrapper">
            <div className="flex flex-col p-12 gap-y-10 items-center justify-center">
                <Header text="feel free to get in touch with me!"></Header>
                <div className="flex flex-row gap-48 items-center justify-center">
                    <div ref={ ref }
                        className={ `flex flex-col gap-10 items-center justify-center
                        ${ inView ? "slide-x" : "opacity-0 translate-x-[-100px]" }` }>
                        <a href="https://www.linkedin.com/in/justin-chua-86745b251/"
                            className="contact-card">
                            <LinkedIn className="text-earth-brown-dark mr-6 text-6xl"></LinkedIn>
                            View my LinkedIn profile
                        </a>
                        <a href="https://github.com/Justin-Chua"
                            className="contact-card">
                            <GitHub className="text-earth-brown-dark mr-6 text-6xl"></GitHub>
                            View my GitHub profile
                        </a>
                        <a href="mailto:justinkchua@gmail.com"
                            className="contact-card">
                            <Email className="text-earth-brown-dark mr-6 text-6xl"></Email>
                            justinkchua@gmail.com
                        </a>
                    </div>
                    <Image ref={ ref }
                        src="/resources/contact/botany.png" height={ 0 } width={ 550 } alt="botany"
                        className={ `hidden xl:block
                        ${ inView ? "slide-x" : "opacity-0 translate-x-[100px]" }` }>
                    </Image>
                </div>
            </div>
        </section>
    );
};

export default Contact;
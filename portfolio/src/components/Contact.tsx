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
            <div className="flex flex-col px-4 py-12 gap-y-10 items-center justify-center">
                <Header text="feel free to get in touch with me!"></Header>
                <div className="flex flex-row gap-48 items-center justify-center">
                    <div ref={ ref }
                        className={ `flex flex-col gap-10 items-center justify-center
                        ${ inView ? "slide-y" : "opacity-0 translate-y-[100px]" }` }>
                        <a href="https://www.linkedin.com/in/justin-chua-86745b251/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card">
                            <LinkedIn color="inherit" fontSize="inherit" className="mr-6"></LinkedIn>
                            <p className="contact-card-text">
                                View my LinkedIn
                            </p>
                        </a>
                        <a href="https://github.com/Justin-Chua"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card">
                            <GitHub color="inherit" fontSize="inherit" className="mr-6"></GitHub>
                            <p className="contact-card-text">
                                View my GitHub
                            </p>
                        </a>
                        <a href="mailto:justinkchua@gmail.com"
                            className="contact-card">
                            <Email color="inherit" fontSize="inherit" className="mr-6"></Email>
                            <p className="contact-card-text">
                                justinkchua@gmail.com
                            </p>
                        </a>
                    </div>
                    <Image src="/resources/contact/botany.png" height={ 0 } width={ 550 } alt="botany"
                        className="hidden xl:block">
                    </Image>
                </div>
            </div>
        </section>
    );
};

export default Contact;
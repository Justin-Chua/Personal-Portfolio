import React from "react";
import Image from "next/image";
import gradPhoto from "@/resources/images/grad_photo.jpg";
import welcomeMsg from  "@/resources/images/welcome.png";
import { introduction } from "@/data/PortfolioData";

const Home = () => {
    { /** Translate the wrapper downwards equal to the size of the nav */}
    return (
        <div className="wrapper pt-16">
            <div className="flex items-center justify-center pt-12">
                <Image src={ welcomeMsg } alt="Welcome" className="max-w-3xl"></Image>
            </div>
            <div className="flex items-center justify-center gap-x-32 p-12">
                <Image src={ gradPhoto } alt="graduation" className="max-w-md"></Image>
                <p className="max-w-3xl font-poppins text-3xl font-normal text-balance leading-relaxed">{ introduction }</p>
            </div>
        </div>
    );
};

export default Home;
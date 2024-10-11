import React from "react";
import Image from "next/image";

import { introduction } from "@/data/PortfolioData";

const Home: React.FC = () => {
    { /** Translate the wrapper downwards equal to the size of the nav */}
    return (
        <div id="home-section" className="wrapper gap-y-12">
            <div className="flex items-center justify-center p-12">
                <p className="font-caladea text-6xl text-earth-grey">hey everyone! i'm justin :)</p>
            </div>
            <div className="flex items-center justify-center gap-x-32">
                <Image src="/resources/images/grad_photo.jpg" height={ 0 } width={ 450 } alt="Graduation photo"/>
                <p className="max-w-3xl font-poppins text-3xl font-normal text-balance text-earth-grey leading-[1.7]">{ introduction }</p>
            </div>
        </div>
    );
};

export default Home;
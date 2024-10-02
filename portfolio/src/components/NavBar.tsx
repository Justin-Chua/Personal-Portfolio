import React from "react";
import Image from "next/image";
import signature from "@/resources/images/signature.png";

const NavBar = () => {
    return (
        <nav className="flex fixed bg-earth-green bg-opacity-95 px-10 w-full h-16 items-center justify-between">
            <div className="flex-none">
                { /** Clicking on the image should bring you to the top of the page */}
                <Image src={ signature } alt="signature" className="max-w-48"/>
            </div>
            <div className="flex gap-10 font-caladea text-4xl text-earth-white">
                { /** Each anchor should bring you to a certain position on the page */}
                <a id="nav-home" className="nav-hover">home</a>
                <a id="nav-about" className="nav-hover">about</a>
                <a id="nav-skills" className="nav-hover">skills</a>
                <a id="nav-projects" className="nav-hover">projects</a>
                <a id="nav-resume" className="nav-hover">resume</a>
                <a id="nav-contact" className="nav-hover">contact</a>
            </div>
        </nav>
    );
};

export default NavBar;
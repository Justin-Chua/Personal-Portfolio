import React from 'react';
import Image from "next/image";
import signature from "../resources/signature.png";

const NavBar = () => {
    return (
        <nav className="flex bg-gray-700 p-6 w-full h-16 items-center justify-between">
            <div className="flex-none">
                { /** Clicking on the image should bring you to the top of the page */}
                <Image src={signature} alt="signature" className = "max-w-48"/>
            </div>
            <div className="flex gap-10 font-koulen">
                <div><a>Home</a></div>
                <div><a>About</a></div>
                <div><a>Skills</a></div>
                <div><a>Projects</a></div>
                <div><a>Resume</a></div>
                <div><a>Contact</a></div>
            </div>
        </nav>
    );
};

export default NavBar;
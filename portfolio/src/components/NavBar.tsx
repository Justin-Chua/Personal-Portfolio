import React from "react";
import Image from "next/image";
import Link from "next/link";

import { navItems } from "@/data/PortfolioData";

const NavBar: React.FC = () => {
    return (
        // We set the z-index to 999 to ensure that it always overlaps all other components
        <nav className="flex fixed bg-earth-green bg-opacity-95 px-10 w-full h-16 z-[999] items-center justify-between">
            <div className="flex-none">
                { /** Clicking on the image should bring you to the top of the page */}
                <Image src="/resources/images/signature.png" height={ 0 } width={ 200 } alt="Justin Chua's signature"/>
            </div>
            <div className="flex gap-10 font-caladea text-4xl text-earth-white">
                { navItems.map((item) => (
                    <Link href={ item.href } className="nav-hover">{ item.label }</Link>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
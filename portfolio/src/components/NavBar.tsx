import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { navItems } from "@/data/PortfolioData";
import { Menu, Close } from "@mui/icons-material";

const NavBar: React.FC = () => {

    const [navOpen, setNavOpen] = useState(false);

    return (
        // We set the z-index to 999 to ensure that it always overlaps all other components
        <nav className="flex flex-col lg:flex-row fixed px-10 py-4 lg:py-0 w-full min-h-16 z-[999] items-stretch justify-between
            bg-earth-green bg-opacity-95">
            <div className="flex flex-row items-center justify-between">
                <Link href="#home">
                    <Image src="/resources/home/signature.png" height={ 0 } width={ 175 } alt="Justin Chua's signature"/>
                </Link>
                <button onClick={ () => { setNavOpen(!navOpen); } }
                    className="block lg:hidden">
                    { navOpen ? <Close className="text-4xl text-earth-white"></Close>
                    : <Menu className="text-4xl text-earth-white"></Menu>
                    }
                </button>
            </div>
            <div className={ `flex-col lg:flex-row gap-4 lg:gap-10 pt-4 lg:pt-0 items-center justify-center
                ${ navOpen ? "flex" : "hidden lg:flex" }` }>
                { navItems.map((item, index) => (
                    <Link key={ index } href={ item.href } className="nav-hover">{ item.label }</Link>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
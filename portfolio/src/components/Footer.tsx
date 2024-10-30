import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="w-full h-24 bg-earth-green">
            <div className="flex flex-col p-6 items-center justify-center">
                <p className="font-caladea text-lg xs:text-xl font-bold text-earth-white">
                    © 2024 justin chua. all rights reserved.
                </p>
                <p className="font-poppins text-xs font-normal italic text-earth-yellow-dark">
                    built using typescript, next.js and tailwind css.
                </p>
            </div>
        </div>
    );
};

export default Footer;
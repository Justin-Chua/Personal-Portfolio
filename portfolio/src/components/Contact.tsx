import React from "react";

import Header from "@/components/Header";

const Contact: React.FC = () => {
    return (
        <div id="contact" className="wrapper">
            <div className="flex flex-col p-12 gap-y-2 items-center justify-center">
                <Header text="feel free to get in touch with me!"></Header>
                <h2 className="font-poppins text-earth-grey">you can contact me directly at <strong>justinkchua@gmail.com</strong> or using the form.</h2>
            </div>
        </div>
    );
};

export default Contact;
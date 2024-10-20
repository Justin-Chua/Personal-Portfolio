import React from "react";

import ContactForm from "@/components/ContactForm";

const Contact: React.FC = () => {
    return (
        <div id="contact" className="wrapper">
            <div className="flex flex-col p-12 gap-y-2 items-center justify-center">
                <h1 className="font-caladea text-6xl text-earth-grey">feel free to get in touch with me!</h1>
                <h2 className="font-poppins text-earth-grey">you can contact me directly at <strong>justinkchua@gmail.com</strong> or using the form.</h2>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
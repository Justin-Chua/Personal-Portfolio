import React from "react";
import { useForm } from "react-hook-form";

import { FormData } from "@/data/PortfolioData";

const ContactForm: React.FC = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const submitData = (data: FormData) => { console.log(data); };

    return (
        <form onSubmit={ handleSubmit(submitData) }
            className="flex flex-col p-12 mt-8 gap-y-6 min-w-[450px] w-1/2
            bg-earth-beige-dark rounded-3xl border-4 border-earth-beige-light">
            <div className="flex flex-col gap-y-2">
                <input type="text" placeholder="full name"
                    className="font-poppins p-4"
                    { ...register("name") }
                />
                <input type="email" placeholder="example@domain.com" 
                    className="font-poppins p-4"
                    { ...register("email", { required: true }) }
                />
            </div>
            <div className="flex flex-col gap-y-2">
                <input type="text" placeholder="subject"
                    className="font-poppins p-4"
                    { ...register("subject") }
                />
                <textarea rows={ 5 } placeholder="type message here"
                    className="resize-none p-4 font-poppins"
                    { ...register("message", { required: true }) }>
                </textarea>
            </div>
            <button className="w-1/4 p-2 font-poppins text-earth-white text-xl
                bg-earth-grey rounded-3xl">
                    Submit
            </button>
        </form>
    );
};

export default ContactForm;
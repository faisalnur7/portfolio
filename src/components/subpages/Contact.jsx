import React, { useState } from 'react';
import ContactForm from './ContactForm';

const ContactSection = ({bg_color, input_bg_color, text_color, border}) => {

    return (
        <section className={`bg-${bg_color} pb-0 shadow-lg py-4 lg:py-12 px-6 lg:px-8`}>
            <div className="container max-w-screen-xl mx-0 px-auto  lg:mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
                <div className="w-full flex justify-center pt-0 pb-0 lg:pt-4 lg:pb-8">
                    <h1 className={`text-${text_color} text-3xl lg:text-5xl font-extrabold hover:underline`}>Contact</h1>
                </div>
                <div className="container mx-auto">
                    <div>
                        <h4 className={`text-${text_color} mt-4 lg:mt-12 text-lg lg:text-2xl font-semibold`}>Connect with me</h4>
                        <p className="text-gray-500 text-lg lg:text-xl">If you want to know more about me or my work, or if you would just<br/>
                        like to say hello, send me a message. I'd love to hear from you.</p>
                    </div>
                    <div className="flex justify-between items-center md:items-stretch flex-col md:flex-row pb-24">
                        <div className={`w-full md:pr-8 mt-8 rounded-md shadow-lg`} >
                            <ContactForm />
                        </div>
                        <div className="w-full flex flex-col md:items-end mt-12 md:mt-6">
                            <h1 className={`text-${text_color} text-xl lg:text-3xl font-bold`}>Email</h1>
                            <a href="mailto:md.faisalnur55@gmail.com" className="mb-12 mt-4 font-semibold text-white block">
                                md.faisalnur55@gmail.com
                            </a>
                            <h1 className={`text-${text_color} text-xl lg:text-3xl font-bold`}>Address</h1>
                            <a href="#" className="mt-4 mb-12 md:text-right font-semibold text-white block uppercase">
                                F/N-5, Shershah Housing Estate, <br />
                                Baizid Bostami, Chittagong.
                            </a>
                            <h1 className={`text-${text_color} text-xl lg:text-3xl font-bold`}>Social</h1>
                            <ul className="flex">
                                
                                <a href="https://www.facebook.com/faisalnurroney" className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center">
                                    <img alt="Facebook" src="https://img.icons8.com/?size=40&id=uLWV5A9vXIPu&format=png&color=000000" />
                                </a>
                                <a href="https://github.com/faisalnur7" className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center">
                                    <img alt="GitHub" src="https://img.icons8.com/doodle/40/000000/github--v1.png" />
                                </a>
                                <a href="https://www.linkedin.com/in/faisal-nur-roney/" className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center" >
                                    <img alt="LinkedIn" src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png"
                                    />
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

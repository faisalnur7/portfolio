import { useState } from "react";
import Contact from "../subpages/Contact";
import HireSection from "./Hire";

const ContactPage = (props) => {
    const bgColor = 'custom_navy';
    return(
        <div>
            <HireSection />
            <Contact bg_color={'custom_navy'} border={'white'} input_bg_color={'white'} text_color={'white'} />
        </div>
    );
}

export default ContactPage;

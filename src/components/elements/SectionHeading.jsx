import React from "react";

const SectionHeading = ({ title = '', sub_title = '', color = '', sub_color = '' }) => {
    const subTitleDisplay = !sub_title ? 'hidden' : '';

    return (
        <div className="w-full flex justify-center flex-col items-center gap-6 pt-4 pb-4 lg:gap-8 lg:pt-12 lg:pb-24">
            <h1 className={`text-2xl lg:text-5xl text-left lg:text-center font-extrabold ${color ? `text-${color}` : ''} hover:underline`}>
                {title}
            </h1>
            <p className={` text-left lg:text-center text-md lg:text-xl ${subTitleDisplay} ${sub_color ? `text-${sub_color}` : ''}`}>
                {sub_title}
            </p>
        </div>
    );
};

export default SectionHeading;

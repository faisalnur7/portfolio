import React from 'react';

const ServiceCard = ({ title, description, imageSrc }) => {
  return (
    <div className='border-2 border-slate-100 flex flex-row lg:flex-col items-center justify-center w-full min-h-[260px] shadow-md rounded-lg  
    bg-gradient-to-tr from-custom_navy via-blue-950 to-custom_navy bg-size-200 animate-gradient 
    mb-6 lg:mb-0 glass_bg_white
    '>
        <div className='flex flex-col lg:flex-row p-4'>
            <div className='w-full lg:w-1/2 flex justify-center items-center py-2 h-full max-h-[155px]'>
                <img className='w-full p-9 lg:p-0 max-w-[230px]' src={imageSrc} alt={title} />
            </div>
            <div className='w-full lg:w-1/2 pt-4 flex flex-col justify-start text-center lg:text-left'>
                <div className='pb-5'>
                    <h2 className='font-bold text-xl leading-6 text-slate-100 m-0'>{title}</h2>
                </div>
                <div className='mb-1 w-full max-w-[330px]'>
                    <p className="font-normal text-base text-slate-100">{description}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ServiceCard;

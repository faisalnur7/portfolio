import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import '../../assets/css/swiperStyle.css';

const imageSources = [
    { src: '../src/assets/img/php.png', alt: 'PHP' },
    { src: '../src/assets/img/laravel.png', alt: 'Laravel' },
    { src: '../src/assets/img/reactJS.png', alt: 'ReactJS' },
    { src: '../src/assets/img/tailwindCSS.png', alt: 'TailwindCSS' },
    { src: '../src/assets/img/docker.png', alt: 'Docker' },
    { src: '../src/assets/img/wordpress.png', alt: 'WordPress' },
    { src: '../src/assets/img/elementor.png', alt: 'Elementor' },
    { src: '../src/assets/img/woocommerce.png', alt: 'WooCommerce' },
    { src: '../src/assets/img/acf.png', alt: 'Advanced Custom Fields (ACF)' },
];

const Marquee = ({slidePerViewNumber, bg}) => {
    console.log(slidePerViewNumber);
    return (
        <section className={`bg-white shadow-md z-10 relative`}>
            <div className="container mx-auto py-6">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={4}
                    autoplay={{
                        delay: 3000, // Delay between slides in milliseconds
                        disableOnInteraction: false, // Keep autoplay running on user interaction
                    }}
                    loop={true}
                    breakpoints={{
                        359: {
                            slidesPerView: 1,
                        },
                        576: {
                            width: 576,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1440: {
                            slidesPerView: slidePerViewNumber,
                        },
                      }}
                >
                    {imageSources.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center items-center px-4">
                                <img src={image.src} alt={image.alt} className="max-w-[300px] p-8" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Marquee;

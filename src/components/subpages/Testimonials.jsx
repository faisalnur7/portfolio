import React from "react";
import SectionHeading from "../elements/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import '../../assets/css/swiperStyle.css';

const testimonials = [
  {
    name: "Abel Eyasu",
    position: "CEO, Ethio Test Prep.",
    message: "Faisal is a great dev, I like his proactive communication and quality work. He fixed a complex bug with expertise and delivered a high-quality solution that exceeded my expectations. I highly recommend him.",
    image: "../src/assets/img/testimonials/abel.webp",
  },
  {
    name: "Sally C.",
    position: "Merketing Executive",
    message: "We have been using Faisal for some website development work we needed. Faisal is friendly, efficient, and the work has been completed to a high standard. We have given him several different projects to work on, which he has worked through methodically, ensuring any timelines are met and prioritizing according to our needs. The communication is excellent with regular meetings scheduled to ensure we are all up to date with progress and to quickly discuss any queries about the various projects. We would recommend him.",
    image: "../src/assets/img/testimonials/sally.jpeg",
  },
  {
    name: "M A Mohsin Chowdhury",
    position: "Managing Director, Web Point Ltd.",
    message: "Faisal is very persistent in achieving the best outcomes for his charges irrespective of the levels of ability or the background. He is of the opinion that most of us, if directed sincerely with a “researched” plan (with flexibility), the goals will be achieved.",
    image: "../src/assets/img/testimonials/mohsin.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-8 bg-white relative shadow-md" id="testimonials">
      <div className="container mx-auto px-6 lg:px-16">
        <SectionHeading 
            title={'Testimonials'} 
            sub_title={"Discover what my clients and collaborators say about working with me. The testimonials reflect the dedication, expertise, and value I bring to every project. From seamless communication to delivering exceptional results, these stories highlight my commitment to excellence."} 
            color={'custom_navy'}
            sub_color={'custom_navy'} 
        />
        <Swiper
            modules={[ Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{delay: 5000,disableOnInteraction: false,}}
            loop={true} 
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="w-full p-4 bg-white shadow-lg my-6 rounded-xl text-center max-w-4xl mx-auto">
                
                <div className="flex">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="flex w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-950"
                />
                </div>
                
                <h3 className="text-lg font-bold text-custom_navy">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
                <p className="text-gray-700 mt-4 p-4">{testimonial.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;

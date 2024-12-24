import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = ({ input_bg_color, border, border_text_color }) => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mcwqah4', // Replace with your EmailJS service ID
        'template_cact8wt', // Replace with your EmailJS template ID
        formRef.current,
        'anKP_wJUtzF8D_bXi' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
    e.target.reset();
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className={`border-2 p-4 rounded-md border-${border} shadow-lg`}>
      <div className="my-6">
        <label
          htmlFor="name"
          className={`block mb-2 text-md lg:text-lg font-medium text-white`}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="user_name"
          className={`border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-${input_bg_color}`}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className={`block mb-2 text-md lg:text-lg font-medium text-white`}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          className={`border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-${input_bg_color}`}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className={`block mb-2 text-md lg:text-lg font-medium text-white`}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className={`border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-${input_bg_color}`}
          placeholder="Enter your message"
          required
        ></textarea>
      </div>
      <div className="flex justify-between">
        <div className="underline">
          <a href="mailto:md.faisalnur55@gmail.com" className={`text-white`}>Send me email directly</a>
        </div>
        <button
          type="submit"
          className="bg-chocolate_light text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

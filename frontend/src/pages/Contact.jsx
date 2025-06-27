import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your backend endpoint
      const res = await axios.post('http://localhost:4000/api/contact', formData);
      if (res.data.success) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(res.data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message.');
    }
  };

  return (
    <div>
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="contact" />
        
        <form 
          onSubmit={handleSubmit} 
          className='flex flex-col justify-center items-start gap-6 w-full max-w-md mx-auto px-4'
        >
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Your Name'
            required
            className='w-full border p-3 rounded-md outline-none'
          />
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Your Email'
            required
            className='w-full border p-3 rounded-md outline-none'
          />
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Your Message'
            required
            rows='5'
            className='w-full border p-3 rounded-md outline-none'
          />
          <button 
            type='submit'
            className='border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

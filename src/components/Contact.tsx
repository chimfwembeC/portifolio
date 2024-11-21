import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaPhoneAlt, FaFacebook } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ from_name: '', from_email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { from_name: '', from_email: '', message: '' };

    if (!formData.from_name) newErrors.from_name = 'Name is required';
    if (!formData.from_email) newErrors.from_email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.values(newErrors).some(error => error)) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      setSubmitted(true);
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-t from-gray-700 to-orange-800 text-white px-4 py-16 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
      {submitted && (
        <div className="bg-green-500 text-white p-4 rounded-md mb-6 text-center">
          Thank you for your message! We will get back to you soon.
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white text-gray-800 rounded-md p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <p className="mb-4 flex items-center">
            <FaPhoneAlt className="inline mr-2 text-orange-500" />
            <strong>Phone:</strong> (+260) 762-764499
          </p>
          <p className="mb-4 flex items-center">
            <FaEnvelope className="inline mr-2 text-orange-500" />
            <strong>Email:</strong>
            <a href="mailto:info@example.com" className="text-orange-500 hover:underline ml-1">
              kangwac3@gmail.com
            </a>
          </p>
          <p className="mb-4"><strong>Social Media:</strong></p>
          <div className="flex space-x-4">
            <a href="https://twitter.com/yourprofile" className="text-orange-500 hover:scale-110 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com/yourprofile" className="text-orange-500 hover:scale-110 transition">
              <FaFacebook size={24} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-orange-500 hover:scale-110 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/chimfwembeC" className="text-orange-500 hover:scale-110 transition">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        <form className="rounded-md p-8 border-2 border-orange-500" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                errors.from_name ? 'border-red-500' : ''
              }`}
            />
            {errors.from_name && <p className="text-red-500 text-sm mt-1">{errors.from_name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="from_email" className="block text-lg font-medium mb-2">Email Address</label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              placeholder="Email Address"
              value={formData.from_email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                errors.from_email ? 'border-red-500' : ''
              }`}
            />
            {errors.from_email && <p className="text-red-500 text-sm mt-1">{errors.from_email}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md bg-gray-800 text-white h-32 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                errors.message ? 'border-red-500' : ''
              }`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text- px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

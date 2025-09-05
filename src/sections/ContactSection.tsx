import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate submission
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white">
      <div className="container-custom max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p>Email: <a href="mailto:anshikaxaaa@gmail.com" className="underline">anshikaxaaa@gmail.com</a></p>
          <p>Phone: <a href="tel:+919455365300" className="underline">+91 9455365300</a></p>
          <p>Location: Chennai, India</p>
          <div className="flex space-x-6 mt-6">
            <a href="https://github.com/anshikaxaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cyan-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.1.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/anshikaxaa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-cyan-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.62 1.3 2.96 2.98 2.96h.04c1.68 0 2.98-1.34 2.98-2.96-.04-1.64-1.34-2.98-2.98-2.98zM2.4 8.98h5.16v12.02H2.4V8.98zM9.98 8.98h4.92v1.64h.07c.68-1.28 2.34-2.62 4.82-2.62 5.16 0 6.12 3.4 6.12 7.82v8.18h-5.16v-7.24c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.76 1.86-2.76 3.78v7.4H9.98V8.98z"/></svg>
            </a>
          </div>
  {/* Note: This form is for demo only and does not send messages. To make it work, connect to a backend or service like EmailJS. */}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-purple-800 p-8 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          noValidate
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full p-3 rounded-md text-gray-900 ${errors.name ? 'border-2 border-red-500' : ''}`}
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
            />
            {errors.name && <p id="name-error" className="text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full p-3 rounded-md text-gray-900 ${errors.email ? 'border-2 border-red-500' : ''}`}
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
            {errors.email && <p id="email-error" className="text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block mb-1 font-semibold">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={`w-full p-3 rounded-md text-gray-900 ${errors.subject ? 'border-2 border-red-500' : ''}`}
              value={formData.subject}
              onChange={handleChange}
              aria-invalid={!!errors.subject}
              aria-describedby="subject-error"
            />
            {errors.subject && <p id="subject-error" className="text-red-500 mt-1">{errors.subject}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={`w-full p-3 rounded-md text-gray-900 ${errors.message ? 'border-2 border-red-500' : ''}`}
              value={formData.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
            />
            {errors.message && <p id="message-error" className="text-red-500 mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 transition-colors py-3 rounded-md font-semibold"
            disabled={submitted}
          >
            {submitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;

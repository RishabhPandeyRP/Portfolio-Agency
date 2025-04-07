'use client';

import { useState } from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({ fullName: '', email: '', company: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-white p-4 border-0 border-red-500">
      <div className="w-[45%] bg-neutral-900 rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
        
        <p className="text-zinc-400 text-sm mb-6">
          Please reach out to us and we will get back to you at the speed of light.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm text-zinc-400 mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm text-zinc-400 mb-1">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="hello@johndoe.com"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm text-zinc-400 mb-1">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Acme Inc."
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm text-zinc-400 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message here"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black font-medium rounded-md py-2 hover:bg-gray-200 transition-colors disabled:opacity-70"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          
          {submitStatus === 'success' && (
            <p className="text-green-500 text-sm">Message sent successfully!</p>
          )}
          
          {submitStatus === 'error' && (
            <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>
          )}
        </form>
        
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
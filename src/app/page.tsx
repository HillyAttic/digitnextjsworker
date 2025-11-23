"use client";

import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We'll contact you at ${email}`);
    setEmail("");
  };

  const services = [
    {
      title: "Website Development",
      description: "Custom, responsive websites built with cutting-edge technologies to showcase your brand and drive conversions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Lead Generation",
      description: "Data-driven strategies to attract, convert, and retain high-quality leads for sustainable business growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and organic traffic with our comprehensive SEO strategies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience and build brand awareness across all major social media platforms.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      quote: "Their SEO expertise increased our organic traffic by 300% in just 6 months. Truly exceptional service!",
    },
    {
      name: "Michael Chen",
      company: "Global Retail Co.",
      quote: "The website they built for us has converted visitors into customers at an incredible rate. Highly recommended!",
    },
    {
      name: "Emma Rodriguez",
      company: "Creative Solutions",
      quote: "Our social media presence has never been stronger. They understand our brand and audience perfectly.",
    }
  ];

  return (
    <>
      <Head>
        <title>Digital Growth Agency | Website Development & Marketing Services</title>
        <meta name="description" content="We help businesses grow with website development, lead generation, SEO optimization, and social media marketing." />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Digital Growth</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Services</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">About</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Portfolio</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Testimonials</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Contact</a>
            </nav>
            
            <div className="hidden md:block">
              <button className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-300">
                Get Started
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Home</a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Services</a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">About</a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Portfolio</a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Testimonials</a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Contact</a>
                <button className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300 w-full">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-32 px-4 mt-16">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Grow Your Business Digitally</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions to boost your online presence, generate leads, and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-indigo-700 transition duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Digital Marketing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a full suite of digital services designed to accelerate your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-indigo-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Agency?</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 5 years of experience in digital marketing, we've helped hundreds of businesses transform their online presence and achieve measurable results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Data-driven strategies tailored to your business goals</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Transparent reporting and regular communication</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Proven track record of delivering ROI-focused results</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Expert team with certifications in all major platforms</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
                About Us Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-yellow-400 mb-4">
                  {"★".repeat(5)}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Get a free consultation and discover how our digital marketing services can transform your business.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="grow px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white font-bold py-4 px-8 rounded-full hover:bg-indigo-700 transition duration-300 whitespace-nowrap"
              >
                Get Free Consultation
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
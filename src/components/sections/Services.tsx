import React from 'react';
import { Code, Palette, LineChart, Globe } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.'
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive interfaces that enhance user experience.'
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: 'Digital Marketing',
    description: 'Data-driven strategies to grow your online presence and reach.'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive organic traffic.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
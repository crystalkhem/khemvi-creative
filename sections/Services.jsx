import React from "react";
import { Onest } from 'next/font/google';
import {
  Monitor,
  Code2,
  Paintbrush2,
  Wrench,
  SearchCheck,
  ListTree
} from "lucide-react";

const onest = Onest({ weight: ['700'], subsets: ['latin'] });

// Custom pastel icon background classes
const iconBgColors = [
  "bg-indigo-100",
  "bg-pink-100",
  "bg-green-100",
  "bg-blue-100",
  "bg-yellow-100"
];

const services = [
  {
    title: "Web Design",
    description:
      "Custom, responsive designs tailored to your brand. We focus on clean layouts, intuitive navigation, and a user-first approach.",
    icon: Monitor
  },
  {
    title: "Web Development",
    description:
      "Scalable, performant websites built with modern frameworks like Next.js, React, and Tailwind CSS — optimized for speed, SEO, and accessibility.",
    icon: Code2
  },
  {
    title: "Branding & Logo Design",
    description:
      "Visual identity design including logos, typography, and color systems. We help you establish a consistent and memorable brand across platforms.",
    icon: Paintbrush2
  },
  {
    title: "Site Maintenance & Support",
    description:
      "Ongoing updates, feature additions, bug fixes, and technical support. We keep your website secure and running smoothly post-launch.",
    icon: Wrench
  },
  {
    title: "Website Audits",
    description:
      "Detailed evaluations of existing websites with insights on performance, SEO, UX, and best practices — with actionable recommendations.",
    icon: SearchCheck
  },
  {
    title: "Content Strategy & Guidance",
    description:
      "We help you organize and structure your website content to align with your goals and speak clearly to your audience — without the stress of figuring it all out alone.",
    icon: ListTree
  }
];

const Services = () => {
  return (
    <section id="services" className=" bg-neutral-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl flex flex-col items-center mx-auto">
        <h2 className={`${onest.className} text-center text-6xl  text-black uppercase font-semibold`}>
          OUR SERVICES.
        </h2>
        <div className="mt-4 w-12 h-1 bg-gray-300 mx-auto mb-3 rounded-full" />

        <p className="py-3 text-center text-xl text-black mb-12 max-w-xl">
          We offer a range of design and development services to help businesses and creatives establish a strong, professional presence online.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full ${iconBgColors[index % iconBgColors.length]} transition-transform duration-300 group-hover:-translate-y-1`}>
                    <IconComponent className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-black">{service.title}</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

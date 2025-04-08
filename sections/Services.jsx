import React from "react";

import { Onest } from 'next/font/google'


const onest = Onest({ weight: ['700'], subsets: ['latin'] })


const services = [
  {
    title: "Web Design",
    description:
      "Custom, responsive designs tailored to your brand. We focus on clean layouts, intuitive navigation, and a user-first approach.",
  },
  {
    title: "Web Development",
    description:
      "Scalable, performant websites built with modern frameworks like Next.js, React, and Tailwind CSS — optimized for speed, SEO, and accessibility.",
  },
  {
    title: "Branding & Logo Design",
    description:
      "Visual identity design including logos, typography, and color systems. We help you establish a consistent and memorable brand across platforms.",
  },
  {
    title: "Site Maintenance & Support",
    description:
      "Ongoing updates, feature additions, bug fixes, and technical support. We keep your website secure and running smoothly post-launch.",
  },
  {
    title: "Website Audits",
    description:
      "Detailed evaluations of existing websites with insights on performance, SEO, UX, and best practices — with actionable recommendations.",
  },
];

const Services = () => {
  return (
    <section id='services' className="bg-stone-900 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
       
      <h2 className={`${onest.className} text-6xl text-white uppercase font-semibold`}>
      OUR SERVICES. 
    </h2>
        <p className="py-3 text-white mb-12 max-w-2xl">
          We offer a range of design and development services to help businesses and creatives establish a strong, professional presence online.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index}>
              <h3 className="text-xl font-medium  bg-white p-1 pl-4 mb-2">
                {service.title}
              </h3>
              <p className=" text-white leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

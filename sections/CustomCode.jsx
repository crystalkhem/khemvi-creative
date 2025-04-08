
import { Onest } from 'next/font/google'
const onest = Onest({ weight: ['700'], subsets: ['latin'] })

import { CheckCircle } from "lucide-react";

const benefits = [
  "Faster load times with clean, efficient code",
  "Custom layouts and features built around your needs",
  "Scales easily as your business grows",
  "Stronger SEO performance and page structure",
  "Fewer vulnerabilities compared to plugins and builders",
  "You fully own and control your website"
];

export const CustomCode = () => {
  return (
    <section className="
    bg-cover bg-center
    bg-[url(https://images.pexels.com/photos/4641453/pexels-photo-4641453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] 
    py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
        <h2 className={`${onest.className} py-4 pb-8 text-center text-6xl uppercase font-semibold`}>
        ZERO WEBSITE BUILDERS.
      </h2>
          <p className="text-gray-700 mb-6">
            At Khemvi Creative, we build every website from the ground up — no page builders. Just clean, purpose-built code designed to help your site perform, grow, and stand out.
          </p>

          <ul className="space-y-3">
            {benefits.map((item, index) => (
              <li key={index} className="pl-8 flex items-start gap-3">
                <CheckCircle className="text-black-600 w-5 h-5 mt-1" />
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Optional Image or Illustration */}
        <div className="hidden md:block">
          <img
            src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Custom Code Illustration"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default CustomCode;
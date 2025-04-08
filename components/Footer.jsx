import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Brand / Logo */}
        <div>
          <h3 className="text-2xl font-semibold tracking-wide">Khemvi Creative</h3>
          <p className="text-sm text-gray-400 mt-2">
            Web design & development studio based in North Carolina.
            Building clean, responsive, and purpose-driven websites.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-sm font-medium uppercase mb-3 text-gray-300">
            Site
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-medium uppercase mb-3 text-gray-300">
            Contact
          </h4>
          <ul className="text-sm space-y-1">
            <li>Email: <a href="mailto:hello@khemvi.com" className="underline">hello@khemvi.com</a></li>
            <li>Location: North Carolina</li>
            <li>Remote-friendly</li>
          </ul>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Khemvi Creative. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

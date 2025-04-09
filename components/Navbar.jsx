"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold ">
          [ <span className="text-black">khemvi creative</span><span className="text-teal-500">.</span> ]
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 mr-4" /> : <Menu className="h-6 w-6 mr-4" />}
          </button>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <li></li>
          <li><Link className='hover:text-yellow-700' href="#home">Home</Link></li>
          <li><Link className='hover:text-yellow-700' href="#about">About</Link></li>
          <li><Link className='hover:text-yellow-700' href="#services">Services</Link></li>
          <li><Link className='hover:text-yellow-700' href="#contact">Contact</Link></li>
          <li><a className='bg-yellow-500 text-black hover:bg-yellow-400 rounded-sm shadow-xl px-3 p-1 mr-3' href="tel:336-259-7605">336-259-7605</a></li>
        </ul>  </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-2 bg-white shadow">
          <li><Link href="#home" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="#about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="#services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

"use client"
import { useState } from 'react';
import Link from 'next/link';
import ContactButton from './ContactButton';
import {motion} from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
    initial={{y:-20, opacity: 0 }}
    whileInView={{y:0, opacity: 1}}
    transition={{type: "spring",
    duration: 0.4}}
    className="py-5 px-10 flex justify-between items-center fixed w-full bg-blue-50 z-50 shadow-xl">
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href="/">九陽商事</Link>
        </h1>
      </div>
      <div className="hidden md:flex">
        <div className="text-sm font-medium flex flex-row">
          <div className="flex flex-row mr-3 px-3 py-3"> 
            <Link href="/about"><p>About Us</p></Link>
            <Link href="/service"><p className="px-5">Service</p></Link>
            <Link href="/products"><p>Products</p></Link>
          </div>
          <ContactButton/>
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="block text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-2">
          <div className="flex flex-col items-center">
            <Link href="/about"><p className="py-2">会社概要</p></Link>
            <Link href="/service"><p className="py-2">サービス</p></Link>
            <Link href="/products"><p className="py-2">製品情報</p></Link>
            <ContactButton/>
          </div>
        </div>
      )}
    </motion.header>
  );
}


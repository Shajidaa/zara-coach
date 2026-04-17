"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import this hook

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  // Close menu on resize if window becomes desktop-sized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Design & Engineering', href: '/design-engineering' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-[100] w-full bg-black border-b border-white/10">
        <div className="max-w-[1440px] mx-auto h-20 px-4 md:px-8 flex items-center justify-between">
          
          {/* LEFT: Logo Area */}
          <Link href="/" className="flex items-center gap-3 min-w-[180px]">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="Zara Logo" 
                fill 
                className="object-contain" 
                priority
              />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="text-white text-sm md:text-base font-bold tracking-widest uppercase line-height-1">
                Zara Coach
              </span>
              <span className="text-[#D4AF37] text-[10px] md:text-xs font-medium uppercase tracking-[0.3em]">
                Builders
              </span>
            </div>
          </Link>

          {/* CENTER: Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={`text-[11px] font-bold uppercase tracking-widest transition-all hover:text-[#D4AF37] ${
                    isActive ? 'text-[#D4AF37]' : 'text-white/70'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* RIGHT: Contact & Mobile Toggle */}
          <div className="flex items-center gap-5">
            <div className="hidden sm:flex flex-col items-end border-r border-white/20 pr-5">
              <a href="tel:9515923004" className="text-white font-bold text-sm hover:text-[#D4AF37]">
                (951) 592-3004
              </a>
              <span className="text-[8px] text-white/40 tracking-tighter uppercase">Registered Manufacturer</span>
            </div>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-end gap-1.5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
              <span className={`h-0.5 bg-[#D4AF37] transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-5'}`} />
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU PANEL */}
        <div 
          className={`absolute top-20 left-0 w-full bg-black border-t border-white/5 transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col p-6 gap-6 items-center text-center">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-light uppercase tracking-[0.2em] transition-all hover:text-[#D4AF37] ${
                    isActive ? 'text-[#D4AF37]' : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="w-full pt-6 border-t border-white/10">
              <a href="tel:9515923004" className="text-[#D4AF37] font-bold text-lg block mb-1 underline">
                (951) 592-3004
              </a>
              <p className="text-white/40 text-[10px] uppercase">U.S. DOT / NHTSA Registered</p>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Background Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[90] lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
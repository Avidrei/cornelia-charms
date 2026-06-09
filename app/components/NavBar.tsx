'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowUpRight, FiLock } from 'react-icons/fi';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    
    <div className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
      {/* Frosted Glass Floating Vessel */}
      <header className="mx-auto max-w-7xl rounded-full border border-lpink/30 bg-bswhite/40 px-6 py-3 shadow-[0_8px_32px_0_rgba(241,118,148,0.15)] backdrop-blur-xl transition-all duration-300 hover:border-dpink/40 group/nav">
        <div className="flex items-center justify-between">
          
          {/* Identity Branding using CC-LOGO.png */}
          <Link href="/" className="flex items-center gap-2.5 group/logo">
            <div className="relative h-8 w-28 transition-transform duration-500 ease-out group-hover/logo:scale-[1.02]">
              <Image 
                src="/CC-LOGO.png" 
                alt="Cornelia Charms Logo" 
                fill 
                className="object-contain" 
              />
            </div>
          </Link>

          {/* Desktop Navigation Link Ribbons */}
          <nav className="hidden xl:flex items-center space-x-8 text-xs font-bold tracking-[0.2em] text-npink">
            <Link href="/products" className="hover:text-dpink transition-colors relative py-1 group/item">
              PRODUCT LINEUPS
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-dpink transition-all duration-300 group-hover/item:w-full group-hover/item:left-0" />
            </Link>
            <Link href="/live" className="hover:text-dpink transition-colors relative py-1 group/item">
              TIKTOK LIVE
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-dpink transition-all duration-300 group-hover/item:w-full group-hover/item:left-0" />
            </Link>
            <Link href="/about" className="hover:text-dpink transition-colors relative py-1 group/item">
              OUR STORY
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-dpink transition-all duration-300 group-hover/item:w-full group-hover/item:left-0" />
            </Link>
            <Link href="/boutique" className="hover:text-dpink transition-colors relative py-1 group/item">
              RETAIL & FAQS
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-dpink transition-all duration-300 group-hover/item:w-full group-hover/item:left-0" />
            </Link>
          </nav>

          {/* Desktop Management Key Trigger - Shifted to xl:flex for uniform scaling */}
          <div className="hidden xl:flex items-center">
            <Link 
              href="/admin-portal" 
              className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-npink to-dpink px-6 py-2 text-xs font-bold tracking-widest text-bswhite shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.03] overflow-hidden group/btn"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-dpink to-npink opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 ease-out" />
              <span className="relative flex items-center gap-2">
                MANAGEMENT <FiLock size={12} />
              </span>
            </Link>
          </div>

          {/* Mobile & Tablet Hamburger Trigger - Revealed on xl down for iPad comfort */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full bg-crm p-2 text-dpink hover:bg-lpink/30 xl:hidden transition-colors relative z-50"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>

        </div>
      </header>

      {/* Controlled Animated Slide-Down Curtain Canvas */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-4 top-20 z-40 rounded-3xl border border-lpink/40 bg-bswhite/95 backdrop-blur-2xl p-6 shadow-2xl xl:hidden overflow-hidden"
          >
            <nav className="flex flex-col space-y-4 text-sm font-bold tracking-widest text-npink">
              <Link 
                href="/products" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl hover:bg-crm hover:text-dpink transition-colors flex items-center justify-between"
              >
                <span>PRODUCT LINEUPS</span> <FiArrowUpRight />
              </Link>
              <Link 
                href="/live" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl hover:bg-crm hover:text-dpink transition-colors flex items-center justify-between"
              >
                <span>TIKTOK LIVE DROPS</span> <FiArrowUpRight />
              </Link>
              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl hover:bg-crm hover:text-dpink transition-colors flex items-center justify-between"
              >
                <span>OUR STORY</span> <FiArrowUpRight />
              </Link>
              <Link 
                href="/boutique" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl hover:bg-crm hover:text-dpink transition-colors flex items-center justify-between"
              >
                <span>RETAIL & FAQS</span> <FiArrowUpRight />
              </Link>
              <hr className="border-dcrm/60 my-2" />
              <Link 
                href="/admin-portal"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-npink to-dpink py-3.5 text-xs font-bold tracking-widest text-bswhite shadow-md"
              >
                MANAGEMENT LOGIN <FiLock size={12} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
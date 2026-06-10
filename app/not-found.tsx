'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiHome, FiShoppingBag } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFFDFB] font-pop text-bsblack flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-lpink/20 to-transparent blur-[120px] pointer-events-none" />
      
      {/* Main Flex Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-5xl">
        
        {/* --- LEFT: MASCOT (Now larger) --- */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-72 h-72 lg:w-96 lg:h-150 shrink-0"
        >
          <Image 
            src="/LOST-COCO.png" 
            alt="Coco the Bear is lost" 
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* --- RIGHT: TEXT CONTENT --- */}
        <div className="text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <h1 className="text-8xl lg:text-[10rem] font-black font-fred text-bsblack leading-none">404</h1>
            <h2 className="text-sm lg:text-base font-black font-fred uppercase text-dpink tracking-[0.25em]">Oh no! Coco is lost.</h2>
            <p className="text-sm font-medium text-bsblack/60 max-w-sm mx-auto lg:mx-0 leading-relaxed">
              It looks like this page wandered off into the wrong shop. Don&apos;t worry, let&apos;s get you back to the charms!
            </p>
          </div>

          {/* Navigation CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center gap-2 bg-bsblack text-white px-8 py-4 rounded-2xl text-xs font-bold font-fred uppercase tracking-wider hover:bg-dpink transition-all hover:scale-105 shadow-md"
            >
              <FiHome size={14} /> Back to Home
            </Link>
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-dcrm text-bsblack px-8 py-4 rounded-2xl text-xs font-bold font-fred uppercase tracking-wider hover:border-lpink transition-all hover:scale-105 shadow-sm"
            >
              <FiShoppingBag size={14} /> Browse Collection
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTiktok, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-bswhite border-t border-lpink/30 pt-24 pb-12 relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-dcrm/60">
          
          {/* Identity Context */}
          <div className="md:col-span-5 space-y-6 text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-3 justify-center md:justify-start">
              <div className="relative h-10 w-32">
                <Image 
                  src="/CC-LOGO.png" 
                  alt="Cornelia Charms Logo" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </Link>
            <p className="text-sm font-medium text-bsblack/50 max-w-sm leading-relaxed mx-auto md:mx-0">
              Handcrafting premium, romantic personalized treasures to bring whimsical style cleanly to your everyday life.
            </p>
          </div>

          {/* Directory Column */}
          <div className="md:col-span-3 space-y-4 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-dpink">Directory Map</h4>
            <ul className="space-y-3 text-xs font-bold text-bsblack/70 uppercase tracking-wider">
              <li><Link href="/products" className="hover:text-npink transition-colors">Product Lineups</Link></li>
              <li><Link href="/live" className="hover:text-npink transition-colors">TikTok Portal</Link></li>
              <li><Link href="/about" className="hover:text-npink transition-colors">Our History</Link></li>
              <li><Link href="/boutique" className="hover:text-npink transition-colors">Concept Space</Link></li>
            </ul>
          </div>

          {/* Contact Methods */}
          <div className="md:col-span-4 space-y-4 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-dpink">Inquiries</h4>
            <ul className="space-y-2.5 text-xs font-bold text-bsblack/70 tracking-wide">
              <li>Cell: <span className="font-mono text-bsblack/50 font-medium">+63 956 276 7061</span></li>
              <li>Mail: <span className="text-bsblack/50 font-medium">corneliacharmsph@gmail.com</span></li>
            </ul>
          </div>

        </div>

        {/* Closing Footnote Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold tracking-widest text-bsblack/40 uppercase">
          <p>© 2026 cornelia charms. Handcrafted with precision and love.</p>
          <div className="flex space-x-5 text-bsblack/40">
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-dpink transition-colors">
              <FaTiktok size={15} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-dpink transition-colors">
              <FaInstagram size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-dpink transition-colors">
              <FaFacebookF size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { FaTiktok, FaFacebookF } from 'react-icons/fa';
import { FiHeart, FiLink2, FiGift, FiInstagram, FiShoppingBag, FiFacebook, FiPackage, FiSmile, FiZap } from 'react-icons/fi';

// Architectural Timeline Structure including Image Assets
const TIMELINE_EVENTS = [
  {
    year: '2023',
    title: 'THE COZY DESK ORIGIN',
    tagline: 'The First Spark',
    color: 'dpink',
    image: '/images/charms.jpg', // Replace with your specific historical image
    desc: 'Cornelia Charms started as a simple hobby, born from a lifetime of collecting sweet trinkets and customized accessories. Our founder, spending quiet evenings sorting beads and matching miniature ribbons, created the very first bag attachments just for friends. The overwhelmingly warm response planted the seed for something much bigger.',
  },
  {
    year: '2024',
    icon: <FiLink2 size={20} />,
    title: 'THE MODULAR LINK DROP',
    tagline: 'Operational Expansion',
    color: 'npink',
    image: '/images/keychains.jpg', // Replace with your growth-era image
    desc: 'We made our official launch on TikTok! Our signature "modular linking" method was developed, allowing collectors to build dynamic, multi-layered layouts that truly reflect their personality. We dropped our first full collection lineup, and the "budol" energy was absolutely electric!',
  },
  {
    year: '2025',
    icon: <FiHeart size={20} />,
    title: 'CREATING THE ANIK LOUNGE',
    tagline: 'Community First Narrative',
    color: 'purple-400',
    image: '/images/about-model.jpg', // Replace with your community/live image
    desc: 'This year was dedicated to building our unique stream atmosphere. We designed the "Anik Lounge," transforming live selling from a transaction into a relaxing, shared experience. We integrated interactive games, specialized modular slot claims, and community-curated collection themes.',
  },
  {
    year: '2026',
    icon: <FiGift size={20} />,
    title: 'FUTURE DROP MANIFESTO',
    tagline: 'Sustainable Creativity',
    color: 'emerald-500',
    image: '/images/bracelets.jpg', // Replace with a vision/future-focused image
    desc: 'Our future vision is set. We are expanding our design portfolio to include eco-friendly materials and limited-edition artisan collaborations. Most importantly, we remain committed to hand-crafting every single charm with love, ensuring your treasures are as sustainable as they are sweet.',
  },
];

export default function BrandStoryPage() {
  return (
    <div className="min-h-screen bg-[#FFFDFB] font-pop text-bsblack antialiased selection:bg-dpink/20 relative overflow-x-hidden">
      
      {/* --- LAYERED COLOR MATRIX GRADIENT MATRIX --- */}
      <div className="absolute top-[-5%] right-[-5%] w-[55rem] h-[55rem] rounded-full bg-gradient-to-br from-lpink/30 via-crm/20 to-transparent blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[-10%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-tr from-dcrm/30 via-npink/10 to-transparent blur-[110px] pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-crm via-lpink/10 to-transparent blur-[100px] pointer-events-none z-0" />

      {/* Craft Ribbon Alignment Stitch Lines */}
      <div className="absolute top-[18%] left-0 right-0 h-px border-t-2 border-dashed border-lpink/30 pointer-events-none z-0" />
      <div className="absolute top-[45%] left-0 right-0 h-px border-t-2 border-dashed border-dcrm/40 pointer-events-none z-0" />
      <div className="absolute top-[75%] left-0 right-0 h-px border-t-2 border-dashed border-lpink/25 pointer-events-none z-0" />

      {/* Decorative Floating Lace Stamps */}
      <div className="absolute top-[28%] right-[4%] w-10 h-10 border-2 border-dotted border-dpink/30 rounded-full pointer-events-none z-0 animate-spin-[duration:45s]" />
      <div className="absolute bottom-[22%] left-[3%] w-12 h-12 border-2 border-dashed border-npink/20 rounded-2xl pointer-events-none z-0 rotate-12" />

      <Navbar />

      {/* Main Structural Outer Wrapper */}
      <main className="relative mx-auto max-w-7xl px-4 xs:px-6 sm:px-10 lg:px-8 pt-28 pb-20 lg:pt-36 z-10 space-y-24">
        
        {/* --- SECTION 1: HERO NARRATIVE HEADER --- */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-crm border border-dashed border-dpink/40 px-3.5 py-1 text-[11px] font-bold text-dpink rotate-[-1deg] uppercase font-fred tracking-wider shadow-xs">
              <FiZap className="animate-pulse" size={13} /> Our Creator&apos;s Journey
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-bsblack font-fred uppercase leading-none tracking-wide">
              The Cornelia Chronicles: <br />
              A History <span className="text-transparent bg-clip-text bg-gradient-to-r from-dpink via-npink to-lpink">of Tiny Treasures</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xs sm:text-sm font-medium text-bsblack/60 leading-relaxed pt-2">
              Welcome to the chronicle of our customized *anik-anik* studio! Explore how we transformed our love for functional trinkets into a dedicated handmade brand built for collectors.
            </p>
          </div>
        </ScrollReveal>

        {/* --- SECTION 2: THE ALTERNATING TIMELINE WITH IMAGES --- */}
        <ScrollReveal>
          <div className="relative pt-6 max-w-5xl mx-auto">
            
            {/* CENTRAL TIMELINE THREAD */}
            <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-bswhite border-l-2 border-dashed border-lpink/60 rounded-full z-0" />
            
            <div className="space-y-16">
              {TIMELINE_EVENTS.map((event, index) => (
                <div key={event.year} className={`relative flex items-center gap-8 z-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Central Node Spool */}
                  <div className={`absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-${event.color === 'purple-400' ? 'purple-400' : event.color} border-4 border-bswhite shadow-lg flex items-center justify-center text-bswhite group z-20`}>
                    <span className="bg-gradient-to-b from-bswhite/20 to-transparent absolute inset-0 rounded-full" />
                    {event.icon }
                  </div>

                  {/* Timeline Container Card */}
                  <div className={`w-[calc(100%-60px)] md:w-[46%] ml-[60px] md:ml-0 rounded-[2.5rem] bg-gradient-to-br from-crm/40 via-lpink/20 to-transparent p-4 border border-lpink/30 shadow-sm relative overflow-hidden transform transition-all duration-300 hover:shadow-md ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                    
                    <div className="bg-bswhite border border-dcrm rounded-[2rem] overflow-hidden shadow-xs">
                        {/* Timeline Image Frame */}
                        <div className="relative w-full h-40 sm:h-48 bg-crm border-b border-dcrm/40">
                             <Image 
                                src={event.image} 
                                alt={`${event.year} Milestone`} 
                                fill 
                                className="object-cover"
                             />
                        </div>
                        
                        <div className="p-5 space-y-3">
                            <div className={`flex flex-col ${index % 2 !== 0 ? 'md:items-end' : ''} gap-1`}>
                                <span className={`inline-block text-[10px] font-black tracking-widest text-${event.color === 'purple-400' ? 'purple-400' : event.color} uppercase font-fred bg-crm px-2.5 py-0.5 rounded-full border border-lpink/30`}>
                                    {event.tagline}
                                </span>
                                <div className="flex items-center gap-2 pt-1">
                                    <span className={`text-3xl font-black text-${event.color === 'purple-400' ? 'purple-400' : event.color} font-fred`}>{event.year}</span>
                                    <span className="text-lg font-bold font-pop text-dcrm">•</span>
                                    <h3 className="text-[11px] font-black font-pop text-bsblack uppercase tracking-wider">{event.title}</h3>
                                </div>
                            </div>
                            <p className="text-[11px] font-medium text-bsblack/70 leading-relaxed">
                                {event.desc}
                            </p>
                        </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </ScrollReveal>

        {/* --- SECTION 3: WHAT MAKES US CORNELIA CHARMS (Value Pillars) --- */}
        <ScrollReveal>
          <div className="space-y-12">
            <div className="text-center space-y-1">
              <h2 className="text-xs font-bold tracking-widest text-bsblack/40 uppercase font-fred">Our Philosophy</h2>
              <p className="text-sm font-black text-bsblack font-fred uppercase tracking-wider">What Makes Us Cornelia Charms</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Pillar 1 */}
              <div className="bg-bswhite border border-dcrm rounded-[2.2rem] p-8 text-center space-y-4 shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-2xl bg-lpink/20 text-dpink flex items-center justify-center mx-auto border border-lpink/30 shadow-inner">
                  <FiHeart size={24} />
                </div>
                <h3 className="text-xs font-black font-fred uppercase tracking-wider text-bsblack">Handmade with Love</h3>
                <p className="text-[11px] font-medium text-bsblack/50 leading-relaxed">
                  Every custom piece is meticulously color-matched and linked by hand. No factory lines, just pure creative passion.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-bswhite border border-dcrm rounded-[2.2rem] p-8 text-center space-y-4 shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-2xl bg-crm text-npink flex items-center justify-center mx-auto border border-dcrm/60 shadow-inner">
                  <FiSmile size={24} />
                </div>
                <h3 className="text-xs font-black font-fred uppercase tracking-wider text-bsblack">Community First</h3>
                <p className="text-[11px] font-medium text-bsblack/50 leading-relaxed">
                   We built a safe lounge for collectors. Our TikTok lives are more than just selling; they are shared experiences.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-bswhite border border-dcrm rounded-[2.2rem] p-8 text-center space-y-4 shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-400 flex items-center justify-center mx-auto border border-purple-100 shadow-inner">
                  <FiPackage size={24} />
                </div>
                <h3 className="text-xs font-black font-fred uppercase tracking-wider text-bsblack">The Art of Unboxing</h3>
                <p className="text-[11px] font-medium text-bsblack/50 leading-relaxed">
                   Packages are styled with sticker sheets and ribbons. Every order arrives feeling like a special gift to yourself.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* --- SECTION 4: THE CREATIVE PROCESS (Polaroid Grid) --- */}
        <ScrollReveal>
          <div className="space-y-12 bg-crm/20 py-16 px-4 rounded-[3rem] border border-dcrm/40">
            <div className="text-center space-y-1">
              <h2 className="text-xs font-bold tracking-widest text-bsblack/40 uppercase font-fred">Snapshots from the Studio</h2>
              <p className="text-sm font-black text-bsblack font-fred uppercase tracking-wider">Our Creative Process</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Polaroid 1 */}
              <div className="bg-bswhite border border-dcrm/80 p-3 shadow-sm transform rotate-1 hover:rotate-0 transition-transform duration-300 rounded-sm">
                <div className="relative aspect-square w-full bg-crm border border-dcrm/40 overflow-hidden rounded-xs shadow-inner">
                  <Image src="/images/charms.jpg" alt="Bead Palette Sorting" fill className="object-cover" />
                </div>
                <div className="pt-4 pb-1 text-center font-fred text-[11px] tracking-wide uppercase text-bsblack/60">
                  Step 1: Palette Matching
                </div>
              </div>

              {/* Polaroid 2 */}
              <div className="bg-bswhite border border-dcrm/80 p-3 shadow-sm transform -rotate-2 hover:rotate-0 transition-transform duration-300 rounded-sm">
                <div className="relative aspect-square w-full bg-crm border border-dcrm/40 overflow-hidden rounded-xs shadow-inner">
                  <Image src="/images/keychains.jpg" alt="Linking Elements" fill className="object-cover" />
                </div>
                <div className="pt-4 pb-1 text-center font-fred text-[11px] tracking-wide uppercase text-bsblack/60">
                  Step 2: Securing the Links
                </div>
              </div>

              {/* Polaroid 3 */}
              <div className="bg-bswhite border border-dcrm/80 p-3 shadow-sm transform rotate-2 hover:rotate-0 transition-transform duration-300 rounded-sm">
                <div className="relative aspect-square w-full bg-crm border border-dcrm/40 overflow-hidden rounded-xs shadow-inner">
                  <Image src="/images/bracelets.jpg" alt="Packaging prep" fill className="object-cover" />
                </div>
                <div className="pt-4 pb-1 text-center font-fred text-[11px] tracking-wide uppercase text-bsblack/60">
                  Step 3: Ribbon Styling
                </div>
              </div>

              {/* Polaroid 4 */}
              <div className="bg-bswhite border border-dcrm/80 p-3 shadow-sm transform -rotate-1 hover:rotate-0 transition-transform duration-300 rounded-sm">
                <div className="relative aspect-square w-full bg-crm border border-dcrm/40 overflow-hidden rounded-xs shadow-inner">
                  <Image src="/images/pins.jpg" alt="Orders boxed up" fill className="object-cover" />
                </div>
                <div className="pt-4 pb-1 text-center font-fred text-[11px] tracking-wide uppercase text-bsblack/60">
                  Step 4: Sent with Love
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* --- SECTION 5: THE COMMUNITY MANIFEST (Detailed Social Links) --- */}
        <ScrollReveal>
          <div className="w-full pt-10">
            <div className="w-full bg-bswhite border-2 border-dashed border-lpink/60 rounded-[2.5rem] p-6 sm:p-10 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-dpink/20 via-npink/10 to-lpink/5 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10 text-center md:text-left">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-dpink uppercase font-fred bg-bswhite px-4 py-1.5 rounded-full shadow-xs">
                    <FiHeart size={12} className="animate-pulse" /> Community First
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-black font-fred uppercase tracking-wider text-bsblack leading-tight">
                    Manifest Your <br />
                    Unique <span className="text-dpink">Collection</span>
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-bsblack/60 max-w-xl">
                    Join our vibrant community across all platforms. We post daily manifests, sneak peeks of new drops, and official stream schedules.
                  </p>
                </div>
                
                {/* Detailed Social Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 min-w-[18rem]">
                  {[
                    { name: 'TikTok', icon: <FaTiktok />, href: 'tiktok.com/@corneliacharmsph', color: 'bg-black text-white' },
                    { name: 'Instagram', icon: <FiInstagram />, href: 'instagram.com/corneliacharmsph', color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white' },
                    { name: 'Facebook', icon: <FaFacebookF />, href: 'facebook.com/corneliacharms', color: 'bg-blue-600 text-white' },
                    { name: 'The Catalog', icon: <FiShoppingBag />, href: '/products', color: 'bg-dpink text-white' },
                  ].map(link => (
                    <a 
                      key={link.name} 
                      href={`https://${link.href}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`inline-flex items-center gap-3 rounded-xl px-5 py-3.5 text-[10px] font-bold font-fred uppercase tracking-wider shadow-sm transition-all duration-300 hover:scale-[1.05] active:scale-95 ${link.color}`}
                    >
                      {link.icon} {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </main>

      <Footer />
    </div>
  );
}
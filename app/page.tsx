'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiHeart, FiMapPin, FiCheck } from 'react-icons/fi';
import { HiDeviceTablet } from 'react-icons/hi2';

interface Category {
  title: string;
  image: string;
  count: string;
  rotationClass: string;
  badge: string;
}

interface Testimonial {
  text: string;
  author: string;
  handle: string;
  stampColor: string;
}

const ACC_CATEGORIES: Category[] = [
  { title: 'KEY CHAINS', image: '/KEYCHAIN.png', count: '12 items', rotationClass: 'hover:-rotate-3 hover:scale-[1.03]', badge: 'Best Seller' },
  { title: 'CHARMS', image: '/CHARMS.png', count: '18 items', rotationClass: 'hover:rotate-3 hover:scale-[1.03]', badge: 'Live Exclusive' },
  { title: 'BRACELETS', image: '/BRACELET.png', count: '09 items', rotationClass: 'hover:-rotate-2 hover:scale-[1.03]', badge: 'Handmade' },
  { title: 'PINS & EXTRA', image: '/PINS.png', count: '06 items', rotationClass: 'hover:rotate-2 hover:scale-[1.03]', badge: 'Limited' },
];

const REVIEWS: Testimonial[] = [
  {
    text: "Super cute ng collections! The charms feel high quality and truly add life to my daily tote and tumblers. Def buying again!",
    author: "David Raniel Cauba",
    handle: "@davidcauba",
    stampColor: 'bg-dpink/10 text-dpink border-dpink/20',
  },
  {
    text: "The perfect 'anik-anik' fix! Every piece feels like it was crafted with so much care and personality. Complete eye candy!",
    author: "Taylor Swift",
    handle: "@taylorswift",
    stampColor: 'bg-npink/10 text-npink border-npink/20',
  },
  {
    text: "Sobrang ganda at premium ng links! It fits my aesthetic perfectly. Arrived quickly and beautifully wrapped with little ribbons.",
    author: "Kim Seungmin",
    handle: "@miniseungkim",
    stampColor: 'bg-dpink/20 text-dpink border-lpink/40',
  },
  {
    text: "Highly personalized customer experience! Catching their TikTok live drops is my new favorite evening habit. 10/10!",
    author: "Lee Sanghyeok",
    handle: "@faker",
    stampColor: 'bg-dcrm/40 text-npink border-dcrm/80',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFDFB] font-pop text-bsblack antialiased selection:bg-dpink/20 relative overflow-x-hidden">
      
      {/* --- LAYERED COLOR MATRIX BACKGROUND ORBS & STITCH LINES --- */}
      <div className="absolute top-[-5%] right-[-5%] w-[45rem] sm:w-[65rem] h-[45rem] sm:h-[65rem] rounded-full bg-gradient-to-br from-lpink/40 via-crm/30 to-transparent blur-[80px] sm:blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[25%] left-[-10%] w-[35rem] sm:w-[55rem] h-[35rem] sm:h-[55rem] rounded-full bg-gradient-to-tr from-dcrm/40 via-npink/10 to-transparent blur-[70px] sm:blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[55%] right-[-5%] w-[40rem] sm:w-[60rem] h-[40rem] sm:h-[60rem] rounded-full bg-gradient-to-b from-crm via-lpink/20 to-transparent blur-[90px] sm:blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-[-5%] w-[30rem] sm:w-[50rem] h-[30rem] sm:h-[50rem] rounded-full bg-gradient-to-r from-npink/5 via-dcrm/50 to-transparent blur-[80px] sm:blur-[110px] pointer-events-none z-0" />

      {/* Craft Ribbon Alignment Vectors (Stitch Borders) */}
      <div className="absolute top-[15%] left-0 right-0 h-px border-t-2 border-dashed border-lpink/30 pointer-events-none z-0" />
      <div className="absolute top-[48%] left-0 right-0 h-px border-t-2 border-dashed border-dcrm/60 pointer-events-none z-0" />
      <div className="absolute top-[75%] left-0 right-0 h-px border-t-2 border-dashed border-lpink/20 pointer-events-none z-0" />

      {/* Decorative Floating Lace Stamps */}
      <div className="absolute top-[22%] left-[3%] w-10 sm:w-12 h-10 sm:h-12 border-2 border-dotted border-dpink/40 rounded-full pointer-events-none z-0 animate-spin-[duration:30s]" />
      <div className="absolute top-[62%] right-[2%] w-12 sm:w-16 h-12 sm:h-16 border-2 border-dashed border-npink/30 rounded-2xl pointer-events-none z-0 rotate-45" />

      {/* Glassmorphic Navigation */}
      <Navbar />

      {/* --- HERO INTRODUCTION --- */}
      <section className="relative mx-auto max-w-[95rem] px-5 xs:px-7 sm:px-10 lg:px-8 pt-28 pb-12 lg:pt-36 lg:pb-20 z-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-12 xl:items-center">
            
            {/* Left Content Area */}
            <div className="xl:col-span-7 space-y-6 text-center xl:text-left order-2 xl:order-1">
              
              <h1 className="text-4xl xs:text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-bsblack leading-[0.95] font-fred pt-2">
                YOUR DAILY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dpink via-npink to-lpink drop-shadow-[0_2px_10px_rgba(241,118,148,0.1)]">
                  CHARM FIX
                </span>
              </h1>
              
              <p className="mx-auto xl:mx-0 max-w-xl text-sm xs:text-base sm:text-lg font-medium text-bsblack/60 leading-relaxed">
                Whimsical ribbon aesthetics, dreamy coquette statements, and meticulous handmade anik-anik treasures built to anchor your unique daily accessory rotation.
              </p>

              {/* Craft Styled Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 pt-2">
                <Link
                  href="/products"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-bsblack px-12 py-4.5 text-sm font-bold tracking-wide text-bswhite shadow-xl transition-all duration-300 hover:bg-dpink hover:-translate-y-1 font-fred"
                >
                  EXPLORE LINEUPS
                  <FiArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link
                  href="/live"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-lpink px-12 py-4.5 text-sm font-bold tracking-wide text-dpink bg-bswhite/60 backdrop-blur-sm transition-all duration-300 hover:bg-lpink/20 font-fred"
                >
                  <HiDeviceTablet size={16} /> STREAMING ROOM
                </Link>
              </div>
            </div>

            {/* Right Media Area */}
            <div className="xl:col-span-5 flex justify-center order-1 xl:order-2">
              <div className="relative w-72 h-72 xs:w-80 xs:h-80 sm:w-[32rem] sm:h-[32rem] aspect-square w-full">
                <div className="absolute inset-2 bg-gradient-to-tr from-dcrm via-lpink to-crm rounded-[2.5rem] sm:rounded-[3.5rem] rotate-3 opacity-40 blur-xl" />
                
                <div className="relative w-full h-full rounded-[2.5rem] sm:rounded-[3.5rem] bg-gradient-to-br from-crm via-bswhite to-lpink/30 p-3 sm:p-4 border-2 border-dashed border-lpink/60 shadow-2xl rotate-[-2deg] transition-transform duration-500 hover:rotate-0">
                  
                  <div className="relative w-full h-full rounded-[2rem] sm:rounded-[2.8rem] bg-bswhite overflow-hidden border border-dcrm/80 flex items-center justify-center shadow-inner">
                    
                    <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-bswhite border-2 border-dotted border-npink/60 px-3 sm:px-4 py-1 sm:py-1.5 text-[9px] sm:text-[10px] font-bold text-npink rounded-xl rotate-[6deg] uppercase font-fred tracking-widest shadow-md z-20">
                      Cornelia Charms
                    </div>

                    <Image
                      src="/HERO-BANNER.png" 
                      alt="Premium Cornelia Charms Visual Assets"
                      fill
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- BUSINESS PORTALS --- */}
      <section className="relative mx-auto max-w-[95rem] px-5 xs:px-7 sm:px-10 lg:px-8 py-6 z-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            <div className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] bg-bsblack text-bswhite p-8 xs:p-10 sm:p-12 flex flex-col justify-between space-y-12 sm:space-y-16 group border-2 border-bsblack shadow-xl">
              <div className="absolute -right-12 -bottom-12 w-72 h-72 bg-gradient-to-tr from-dpink/20 to-transparent rounded-full blur-3xl group-hover:bg-dpink/30 transition-all duration-500" />
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-dpink/20 border border-dpink/30 px-3.5 py-1 text-[10px] font-bold tracking-wider uppercase text-lpink font-fred">
                  <span className="w-1.5 h-1.5 rounded-full bg-dpink animate-ping" /> Live Selling Drops
                </div>
                <h3 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight leading-none font-fred">
                  TikTok Live <br />
                  <span className="text-lpink">Streaming Hub</span>
                </h3>
                <p className="text-xs sm:text-sm text-bswhite/70 font-medium max-w-sm leading-relaxed">
                  Our main store claims happen in real-time. Catch exclusive modular slots, claim unique numbers, and hang out with the cornelia charms community directly on stream.
                </p>
              </div>
              <div className="z-10">
                <Link href="/live" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-bswhite group-hover:text-lpink transition-colors border-b-2 border-dashed border-bswhite/20 pb-1 group-hover:border-lpink font-fred">
                  OPEN STREAM CALENDAR <FiArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] bg-gradient-to-br from-npink to-dpink text-bswhite p-8 xs:p-10 sm:p-12 flex flex-col justify-between space-y-12 sm:space-y-16 group shadow-xl border border-dpink/30">
              <div className="absolute -right-12 -bottom-12 w-72 h-72 bg-gradient-to-br from-crm/20 to-transparent rounded-full blur-3xl" />
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-bswhite/20 border border-bswhite/30 px-3.5 py-1 text-[10px] font-bold tracking-wider uppercase text-crm font-fred">
                  <FiMapPin size={11} /> Rented Storefront & Info
                </div>
                <h3 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight leading-none font-fred">
                  Physical Store <br />
                  <span className="text-crm">&amp; Business FAQs</span>
                </h3>
                <p className="text-xs sm:text-sm text-bswhite/90 font-medium max-w-sm leading-relaxed">
                  Find out exactly where our physical store is located, explore live selling and receiving guidelines, and access our helpful integration FAQs.
                </p>
              </div>
              <div className="z-10">
                <Link href="/info" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-bswhite group-hover:text-crm transition-colors border-b-2 border-dashed border-bswhite/20 pb-1 group-hover:border-crm font-fred">
                  EXPLORE STORES &amp; FAQS <FiArrowUpRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* --- FILIPINO ANIK-ANIK BRAND NARRATIVE --- */}
      <section id="about" className="bg-crm/20 border-y-2 border-dashed border-dcrm/50 py-20 lg:py-24 mt-12 relative z-10">
        <div className="mx-auto max-w-[95rem] px-5 xs:px-7 sm:px-10 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-12 xl:grid-cols-12 xl:items-center">
              
              <div className="xl:col-span-5 flex justify-center">
                <div className="relative w-56 h-72 xs:w-64 xs:h-80 sm:w-[24rem] sm:h-[30rem] bg-bswhite rounded-[2.5rem] sm:rounded-[3.3rem] p-3 sm:p-4 shadow-xl border-2 border-dashed border-lpink/50 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="relative w-full h-full rounded-[1.8rem] sm:rounded-[2.5rem] overflow-hidden bg-lpink/10 border border-dcrm/40">
                    <Image 
                      src="/STORY-IMAGE.png" 
                      alt="Aesthetic layout portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="xl:col-span-7 space-y-6 text-center xl:text-left">
                <div className="text-xs font-bold tracking-wider text-dpink uppercase flex items-center justify-center xl:justify-start gap-2 font-fred">
                  <FiHeart className="fill-dpink text-dpink animate-pulse" size={13} /> The Soul of Anik-Anik
                </div>
                <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-bsblack font-fred leading-tight">
                  The Story of a Girl and<br />
                  <span className="text-npink">Charm Culture</span>
                </h2>
                <div className="h-[3px] w-24 bg-gradient-to-r from-dpink to-transparent mx-auto xl:mx-0 rounded-full" />
                <div className="space-y-4 text-xs xs:text-sm sm:text-base text-justify text-bsblack/70 font-medium max-w-2xl mx-auto xl:mx-0 leading-relaxed">
                  <p>
                    Cornelia Charms celebrates the comforting art of <span className="text-dpink font-bold italic">&quot;anik-anik&quot;</span>—the intentional joy found in collecting small, endearing trinkets that tell a personal story. Everything we drop is handmade to bring playful character to your everyday keys, bags, and spaces.
                  </p>
                  <p>
                    Each design honors a deep-rooted love for layering sweet, whimsical attachments. By blending shiny loops, custom links, and miniature accents, we provide local collectors a gorgeous way to personalize their everyday belongings.
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="/about" className="text-xs font-bold tracking-wider text-dpink uppercase inline-flex items-center gap-2 hover:text-npink transition-colors group border-b-2 border-dashed border-dpink/30 pb-1 font-fred">
                    READ THE FULL JOURNEY <FiArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- STATEMENT NPINK BACKGROUND: OUR TYPES OF PRODUCT --- */}
      <section id="products" className="bg-npink border-y-2 border-dashed border-npink/30 py-20 lg:py-24 relative z-10 shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(#FFFDFB_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        
        <div className="mx-auto max-w-[95rem] px-5 xs:px-7 sm:px-10 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-center md:text-left">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-wider text-crm uppercase block font-fred">CORNELIA CHARM TREASURES</span>
                <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-bswhite font-fred">Our Types of Product</h2>
              </div>
              <p className="text-xs text-justify sm:text-sm font-medium text-crm max-w-xs mx-auto md:mx-0 leading-relaxed">
                Here is is a quick peek of what type of treasures we have in store for you. Each piece is carefully handcrafted to bring a touch of whimsy and personality to your daily accessories.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ACC_CATEGORIES.map((category, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className={`relative aspect-[3/4] w-full rounded-[2.2rem] sm:rounded-[2.5rem] bg-bswhite border-2 border-dashed border-crm/80 p-2 sm:p-2.5 shadow-xl transition-all duration-500 ease-out ${category.rotationClass} group-hover:shadow-2xl overflow-hidden`}>
                    <div className="relative w-full h-full rounded-[1.8rem] sm:rounded-[2rem] overflow-hidden bg-[#FFFDFB] border border-dcrm/40 shadow-inner">
                      
                      <div className="absolute top-3 left-3 bg-bsblack text-bswhite text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-md z-20 font-fred">
                        {category.badge}
                      </div>

                      <Image 
                        src={category.image} 
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-700 brightness-80 ease-out group-hover:scale-[1.06]"
                      />
                      
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bsblack/80 via-bsblack/10 to-transparent p-4 sm:p-5 pt-12 flex items-end justify-between">
                        <div>
                          <h3 className="text-xs sm:text-sm font-bold tracking-wider text-bswhite font-fred">{category.title}</h3>
                          <p className="text-[10px] font-medium text-bswhite mt-0.5">{category.count}</p>
                        </div>
                        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-bswhite flex items-center justify-center text-bsblack shadow-md opacity-0 transform translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                          <FiArrowUpRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- REBALANCED SYSTEMIC CAROUSEL TRACK: THE CHARM EXPERIENCE --- */}
      <section className="bg-[#FFFDFB] py-20 lg:py-24 relative z-10 overflow-hidden border-b-2 border-dashed border-dcrm/50">
        <div className="mx-auto max-w-[95rem] px-5 xs:px-7 sm:px-10 lg:px-8">
          <ScrollReveal>
            
            <div className="text-center space-y-3 mb-12">
              <span className="text-xs font-bold tracking-wider text-npink uppercase font-fred">Collector Testimonials</span>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-bsblack font-fred">The Charm Experience</h2>
              <div className="h-[2px] w-16 bg-npink/40 mx-auto rounded-full" />
            </div>

            {/* Dynamic Scroll Drag Track Container - Flushes perfectly left on mobile viewports */}
            <div className="relative mt-4">
              <motion.div 
                drag="x"
                dragConstraints={{ right: 0, left: -950 }}
                variants={{
                  mobile: { x: "0%" },
                  desktop: { x: "-15%" }
                }}
                animate={typeof window !== 'undefined' && window.innerWidth < 640 ? "mobile" : "desktop"}
                whileTap={{ cursor: 'grabbing' }}
                className="flex gap-6 sm:gap-8 cursor-grab px-1 sm:px-2 py-6 select-none"
                style={{ width: 'max-content' }}
              >
                {REVIEWS.map((review, index) => (
                  <motion.div 
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={{
                      hidden: { opacity: 0.15, scale: 0.94, filter: "blur(4px)" },
                      visible: { opacity: 1, scale: 1, filter: "blur(0px)" }
                    }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="w-[calc(100vw-3.5rem)] sm:w-[30rem] lg:w-[31rem] shrink-0 rounded-[2.2rem] sm:rounded-[2.5rem] bg-bswhite text-bsblack p-6 xs:p-8 pt-14 pb-6 sm:pb-8 shadow-xl border border-dcrm flex flex-col justify-between space-y-6 sm:space-y-8 relative overflow-hidden group/card"
                  >
                    
                    {/* Bookmark Ribbon on the top right side to avoid overlapping any tags */}
                    <div className="absolute top-0 right-8 sm:right-10 w-6 sm:w-7 h-10 sm:h-11 bg-gradient-to-b from-dpink to-npink shadow-sm rounded-b-sm transition-transform duration-300 group-hover/card:translate-y-1 z-10">
                      <div className="absolute bottom-0 inset-x-0 h-1.5 sm:h-2 bg-bswhite [clip-path:polygon(0_100%,50%_0,100%_100%)]" />
                    </div>

                    <p className="text-xs xs:text-sm sm:text-base font-medium leading-relaxed text-bsblack/70 italic pr-4">
                      &quot;{review.text}&quot;
                    </p>
                    
                    <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-4 pt-4 border-t border-dcrm/40">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-crm flex items-center justify-center font-bold text-xs sm:text-sm text-dpink border border-lpink/30 font-fred shrink-0">
                          {review.author[0]}
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-bsblack font-fred">{review.author}</h4>
                          <p className="text-[11px] font-semibold text-npink">{review.handle}</p>
                        </div>
                      </div>
                      
                      {/* Sticker Stamp Overlay Badge */}
                      <div className={`text-[8px] sm:text-[9px] font-bold px-2.5 py-1.5 rounded-md border tracking-widest uppercase font-fred rotate-3 self-start xs:self-auto ${review.stampColor}`}>
                        Verified Collector <FiCheck className="ml-0.5 inline" size={10} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="text-center pt-6">
              <span className="text-[10px] sm:text-[11px] font-bold text-bsblack/30 tracking-widest uppercase font-fred">
                {typeof window !== 'undefined' && window.innerWidth < 640 ? "← Swipe to explore customer archives →" : "← Swipe track horizontally to explore customer archives →"}
              </span>
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* Shared Footer Panel */}
      <Footer />

    </div>
  );
}
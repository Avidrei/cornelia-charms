'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { FiMapPin, FiHelpCircle, FiChevronDown, FiMessageCircle, FiShoppingBag, FiTruck } from 'react-icons/fi';

export default function RetailFAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'How long until my charms are packed?', a: 'Once your payment is verified, we process your handmade bundles within 48 hours. You will receive a notification as soon as Coco sends them off to our courier!' },
    { q: 'Can I change my order after mining?', a: 'Because our items are custom-mined in our live streams, we cannot change orders once the session has ended. Please double-check your screen screenshots!' },
    { q: 'Do you accept international shipping?', a: 'Currently, we focus on domestic shipping within the Philippines to ensure all your anik-anik arrive safely and quickly.' },
    { q: 'What if my item arrives damaged?', a: 'We pack every order with extreme care! However, if there is a major issue, please DM us your unboxing video immediately so we can help.' },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDFB] font-pop text-bsblack relative overflow-x-hidden">
      {/* Decorative Orbs & Stitching (Consistent with previous pages) */}
      <div className="absolute top-[-5%] right-[-5%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-lpink/20 via-crm/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] left-0 right-0 h-px border-t-2 border-dashed border-lpink/30" />

      <Navbar />

      <main className="relative mx-auto max-w-6xl px-6 pt-36 pb-20 space-y-20">
        
        {/* --- SECTION 1: RETAIL STUDIO LOCATION --- */}
        <ScrollReveal>
          <div className="grid md:grid-cols-12 gap-8 items-center bg-white border border-dcrm rounded-[2.5rem] p-8 sm:p-12 shadow-sm">
            <div className="md:col-span-7 space-y-5">
              <span className="inline-block px-4 py-1.5 rounded-full bg-dpink/10 text-dpink font-black text-[10px] uppercase tracking-widest font-fred">Our Studio</span>
              <h1 className="text-4xl sm:text-5xl font-black font-fred uppercase tracking-wide">The Cornelia <br/><span className="text-dpink">Retail Corner</span></h1>
              <p className="text-sm font-medium text-bsblack/60 leading-relaxed">
                Come visit our physical studio in Manila! We love meeting our fellow collectors in person to discuss our latest drops and custom combinations.
              </p>
              <div className="bg-crm/50 p-6 rounded-2xl border border-dashed border-lpink/30 space-y-2">
                <p className="text-xs font-bold font-fred uppercase text-bsblack">📍 Find Us Here</p>
                <p className="text-xs font-medium text-bsblack/70">S8 Concept District, The ONE UST.</p>
              </div>
            </div>
            
            <div className="md:col-span-5 w-full aspect-square bg-gradient-to-tr from-crm to-lpink/20 rounded-[2rem] border border-dcrm flex flex-col items-center justify-center gap-4 group hover:scale-[1.02] transition-all duration-500">
              <FiMapPin size={48} className="text-dpink group-hover:animate-bounce" />
              <p className="text-[10px] font-black font-fred uppercase tracking-widest text-dpink">Interactive Map</p>
            </div>
          </div>
        </ScrollReveal>

        {/* --- SECTION 2: COCO’S HELP CORNER --- */}
        <ScrollReveal>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-br from-bsblack to-zinc-900 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden text-white"
          >
            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shrink-0 shadow-2xl animate-pulse">
                 <span className="text-4xl">🐻</span>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-black font-fred uppercase">Need help? Meet Coco!</h2>
                <p className="text-xs font-medium text-white/70 max-w-md leading-relaxed">
                  I&apos;m your official Cornelia Charms helper. I&apos;m here to answer your questions about mining, shipping, or anything else about our shop. Let&apos;s chat!
                </p>
                <button className="inline-flex items-center gap-2 bg-dpink text-white px-8 py-3 rounded-xl text-xs font-bold font-fred uppercase hover:bg-npink transition-all hover:scale-105">
                  <FiMessageCircle /> Chat with Coco
                </button>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* --- SECTION 3: FAQ ACCORDION --- */}
        <ScrollReveal>
          <div className="space-y-8">
            <h2 className="text-lg font-black font-fred uppercase text-center flex items-center justify-center gap-2">
              <FiHelpCircle className="text-dpink" /> Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-dcrm rounded-2xl bg-white shadow-sm overflow-hidden">
                  <button 
                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                    className="w-full flex justify-between items-center p-6 text-left"
                  >
                    <span className="text-xs font-bold font-fred uppercase">{faq.q}</span>
                    <motion.div animate={{ rotate: activeIndex === i ? 180 : 0 }}>
                      <FiChevronDown className="text-dpink" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 text-xs text-bsblack/60 leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
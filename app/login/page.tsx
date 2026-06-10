'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-[#FFFDFB] font-pop text-bsblack relative overflow-hidden flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white border border-dcrm rounded-[2.5rem] p-10 shadow-lg relative"
        >
          {/* Decorative Blob */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-lpink/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center space-y-2 mb-8">
            <div className="w-20 h-20 mx-auto bg-crm rounded-full flex items-center justify-center mb-4">
              <Image src="/NORMAL-COCO.png" alt="Coco" width={60} height={60} className="object-contain" />
            </div>
            <h1 className="text-2xl font-black font-fred uppercase">Welcome Back!</h1>
            <p className="text-xs text-bsblack/60 font-medium">Log in to manage your Cornelia collections.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-bsblack/70 ml-1">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-crm/30 border border-dcrm rounded-2xl px-4 py-3 mt-1 outline-none focus:border-dpink transition-all"
                placeholder="coco@corneliacharms.com"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-bsblack/70 ml-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-crm/30 border border-dcrm rounded-2xl px-4 py-3 mt-1 outline-none focus:border-dpink transition-all"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-bsblack text-white py-4 rounded-2xl font-bold font-fred uppercase text-sm hover:bg-dpink transition-all hover:scale-[1.02] shadow-md mt-4">
              Sign In
            </button>
          </form>

          <p className="text-center text-[10px] font-medium text-bsblack/50 mt-6">
            New to Cornelia? <a href="/signup" className="text-dpink font-bold hover:underline">Create an account</a>
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
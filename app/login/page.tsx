'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleTempLogin = () => {
    // Temporary Logic for demonstration
    if (email === 'test@cornelia.com' && password === 'charm123') {
      setFeedback('Success! Redirecting to dashboard...');
      // Simulate redirect after successful login
      setTimeout(() => {
        window.location.href = '/dashboard'; // Change to your actual dashboard route
      }, 1500);
    } else {
      setFeedback('Use test@cornelia.com / charm123 to enter!');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] font-pop text-bsblack">
      <Navbar />

      <main className="flex items-center justify-center min-h-[80vh] px-6 pb-12 pt-30">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-4xl bg-white border border-dcrm rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Left Side: Brand Visual */}
          <div className="hidden md:flex flex-1 bg-crm/30 p-12 flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-lpink/10 blur-[100px]" />
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Image src="/HAPPY-COCO.png" alt="Happy Coco" width={300} height={300} className="object-contain" />
            </motion.div>
            <div className="mt-8 text-center space-y-2">
              <h2 className="text-2xl font-black font-fred uppercase">Ready to mine?</h2>
              <p className="text-xs font-medium text-center text-bsblack/60">Log in to keep tracking your favorite charms.</p>
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
            <h1 className="text-3xl font-black font-fred uppercase mb-2">Log In To Your Account</h1>
            <p className="text-xs text-bsblack/50 mb-8 font-medium">Welcome back, momsh!</p>

            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-bsblack/70 ml-1">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-dcrm rounded-2xl px-4 py-3 mt-1 outline-none focus:border-dpink shadow-sm"
                  placeholder="test@cornelia.com"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-bsblack/70 ml-1">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border border-dcrm rounded-2xl px-4 py-3 mt-1 outline-none focus:border-dpink shadow-sm"
                  placeholder="charm123"
                />
              </div>

              <button 
                onClick={handleTempLogin}
                className="w-full bg-bsblack text-white py-4 rounded-2xl font-bold font-fred uppercase text-sm hover:bg-dpink transition-all hover:scale-[1.01] shadow-md mt-6"
              >
                Sign In
              </button>
              
              {feedback && (
                <p className={`text-[10px] font-bold text-center ${feedback.includes('Success') ? 'text-green-500' : 'text-dpink'}`}>
                  {feedback}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
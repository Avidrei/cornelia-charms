'use client';

import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { FiTv, FiCalendar, FiBookOpen, FiExternalLink, FiClock, FiShoppingBag, FiInfo, FiCreditCard } from 'react-icons/fi';

import { FaTiktok, FaQrcode} from 'react-icons/fa';

export default function TikTokLivePage() {
  // Global stream indicator state variable
  const [isLive, setIsLive] = useState(true);
  
  // Interactive control for switching between payment pathways
  const [paymentMode, setPaymentMode] = useState<'cod' | 'payfirst'>('cod');

  return (
    <div className="min-h-screen bg-[#FFFDFB] font-pop text-bsblack antialiased selection:bg-dpink/20 relative overflow-x-hidden">
      
      {/* --- HOMEPAGE COLOR MATRIX ORBS --- */}
      <div className="absolute top-[-5%] right-[-5%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-lpink/30 via-crm/20 to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[35%] left-[-10%] w-[45rem] h-[45rem] rounded-full bg-gradient-to-tr from-dcrm/30 via-npink/10 to-transparent blur-[100px] pointer-events-none z-0" />
      
      {/* Dashed Craft Stitch Lines */}
      <div className="absolute top-[22%] left-0 right-0 h-px border-t-2 border-dashed border-lpink/30 pointer-events-none z-0" />

      <Navbar />

      <main className="relative mx-auto max-w-7xl px-4 xs:px-6 sm:px-10 lg:px-8 pt-28 pb-20 lg:pt-36 z-10 space-y-12">
        
        {/* --- SECTION 1: LIVE BROADCAST CONTROLLER TAPE --- */}
        <ScrollReveal>
          <div className="w-full rounded-[2.5rem] sm:rounded-[3.5rem] bg-gradient-to-r from-dpink/20 via-npink/10 to-lpink/5 border-2 border-dashed border-lpink/60 p-3 sm:p-4 shadow-xl overflow-hidden">
            <div className="relative w-full rounded-[2rem] sm:rounded-[2.8rem] bg-bswhite border border-dcrm/80 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Left Live Pulse Flag */}
              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                <div className="relative">
                  <div className="w-20 h-20 rounded-[1.8rem] bg-crm flex items-center justify-center border border-dcrm text-dpink shadow-inner">
                    <FiTv size={36} className={isLive ? 'animate-pulse' : ''} />
                  </div>
                  {isLive && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-0.5 rounded-full font-fred ${isLive ? 'bg-red-500 text-bswhite' : 'bg-bsblack/10 text-bsblack/40'}`}>
                      {isLive ? 'LIVE NOW' : 'OFFLINE'}
                    </span>
                    <span className="text-xs font-semibold text-bsblack/40 font-mono">@corneliacharmsph</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-bsblack font-fred uppercase tracking-wide">
                    {isLive ? 'Anik-Anik Mining & Claiming Session!' : 'Catch Our Next Budol Live Stream'}
                  </h1>
                  <p className="text-xs font-medium text-bsblack/50 max-w-xl">
                    {isLive 
                      ? 'We are live right now customizing trinkets! Read our transaction guide details down below to see how to pay for your checkout bundles using the TikTok Yellow Basket.'
                      : 'Our streaming sessions are currently closed. Check out our weekly calendar schedules down below so you never miss a drop!'}
                  </p>
                </div>
              </div>

              {/* Right Action Redirect Link */}
              <div className="shrink-0 w-full md:w-auto">
                <a 
                  href="https://tiktok.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-bsblack to-zinc-800 px-8 py-4 text-xs font-bold tracking-widest text-bswhite shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03] font-fred uppercase"
                >
                  <FaTiktok size={14} /> Tune In On TikTok <FiExternalLink size={14} />
                </a>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* 2-COLUMN OPERATIONAL SUITE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT INTERACTIVE AREA: MINING RULES & TIMELINES */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* THE VISUAL RULEBOOK FRAME */}
            <ScrollReveal>
              <div className="bg-bswhite border border-dcrm rounded-[2.5rem] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-2 border-b border-dcrm/60 pb-4">
                  <FiBookOpen className="text-dpink" size={20} />
                  <h2 className="text-sm font-black tracking-widest text-bsblack font-fred uppercase">How To Mine & Claim Products</h2>
                </div>

                {/* Timeline flow mimicking your strict TikTok-to-Checkout guidelines */}
                <div className="relative border-l-2 border-dashed border-lpink/60 ml-4 pl-6 space-y-8 py-2">
                  
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="absolute -left-[2.15rem] top-0 w-5 h-5 rounded-full bg-dpink text-bswhite flex items-center justify-center text-[10px] font-black font-fred shadow-md">1</div>
                    <h3 className="text-xs font-black font-fred uppercase tracking-wider text-bsblack">Comment &quot;MINE&quot; On Stream</h3>
                    <p className="text-xs font-medium text-bsblack/60 mt-1">
                      When a charm combination or unique custom piece is shown, quickly comment <span className="font-mono bg-crm px-1.5 py-0.5 rounded text-dpink font-bold">MINE</span>. The first comment that lands on the stream host&apos;s screen claims the item!
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className="absolute -left-[2.15rem] top-0 w-5 h-5 rounded-full bg-npink text-bswhite flex items-center justify-center text-[10px] font-black font-fred shadow-md">2</div>
                    <h3 className="text-xs font-black font-fred uppercase tracking-wider text-bsblack">Take a Quick Screenshot</h3>
                    <p className="text-xs font-medium text-bsblack/60 mt-1">
                      Always secure a screenshot of your successful claim along with the host confirming your username to prevent any mix-ups during total item compilation.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div className="absolute -left-[2.15rem] top-0 w-5 h-5 rounded-full bg-purple-400 text-bswhite flex items-center justify-center text-[10px] font-black font-fred shadow-md">3</div>
                    <h3 className="text-xs font-black font-fred uppercase tracking-wider text-bsblack">Send Screenshots via TikTok DM</h3>
                    <p className="text-xs font-medium text-bsblack/60 mt-1">
                      Send your screenshots to our official TikTok account <span className="font-bold text-dpink">within 15 minutes</span> after the live broadcast finishes so we can build your checkout links.
                    </p>
                  </div>

                </div>

                {/* Important Reminder Notice Bubble */}
                <div className="bg-crm/40 border border-dashed border-dpink/30 rounded-2xl p-4 flex items-start gap-3">
                  <FiInfo size={16} className="text-dpink shrink-0 mt-0.5" />
                  <p className="text-[11px] font-medium text-bsblack/70 leading-relaxed">
                    <strong>Joy Miner Policy:</strong> Please be responsible when mining. Bogus buyers and joy miners who fail to check out within 24 hours will be permanently restricted from future streaming slots and drops.
                  </p>
                </div>

              </div>
            </ScrollReveal>

            {/* LIVE STREAMING CALENDAR CARD */}
            <ScrollReveal>
              <div className="bg-bswhite border border-dcrm rounded-[2.5rem] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-2 border-b border-dcrm/60 pb-4">
                  <FiCalendar className="text-npink" size={20} />
                  <h2 className="text-sm font-black tracking-widest text-bsblack font-fred uppercase">Weekly Live Stream Schedule</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Monday Schedule Card */}
                  <div className="bg-crm/30 border border-dcrm/60 rounded-2xl p-4 space-y-3 relative overflow-hidden">
                    <span className="absolute top-2 right-2 text-bsblack/10"><FiClock size={24} /></span>
                    <p className="text-[11px] font-black font-fred tracking-widest text-npink uppercase">Wednesdays</p>
                    <h4 className="text-xs font-bold text-bsblack font-fred uppercase">Mid-Week Trinkets</h4>
                    <p className="text-[11px] font-medium text-bsblack/50 flex items-center gap-1"><FiClock size={12}/> 7:00 PM PHT</p>
                  </div>

                  {/* Friday Schedule Card */}
                  <div className="bg-lpink/10 border border-lpink/40 rounded-2xl p-4 space-y-3 relative overflow-hidden">
                    <p className="text-[11px] font-black font-fred tracking-widest text-dpink uppercase">Fridays</p>
                    <h4 className="text-xs font-bold text-bsblack font-fred uppercase">Fresh Crop Drops</h4>
                    <p className="text-[11px] font-medium text-bsblack/50 flex items-center gap-1"><FiClock size={12}/> 8:00 PM PHT</p>
                  </div>

                  {/* Sunday Schedule Card */}
                  <div className="bg-gradient-to-br from-dpink/10 to-lpink/5 border border-dpink/20 rounded-2xl p-4 space-y-3 relative overflow-hidden">
                    <div className="absolute top-2 right-2 text-dpink/20"><FiShoppingBag size={24} /></div>
                    <p className="text-[11px] font-black font-fred tracking-widest text-dpink uppercase">Sundays</p>
                    <h4 className="text-xs font-bold text-bsblack font-fred uppercase">Budol Mega Night</h4>
                    <p className="text-[11px] font-medium text-bsblack/50 flex items-center gap-1"><FiClock size={12}/> 6:00 PM PHT</p>
                  </div>

                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* RIGHT SIDEBAR AREA: INTERACTIVE YELLOW BASKET PAYMENT MATRIX */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            
            <ScrollReveal>
              <div className="bg-bswhite border border-dcrm rounded-[2.5rem] p-5 sm:p-6 shadow-sm space-y-5">
                
                <div className="space-y-1">
                  <span className="text-[11px] font-bold tracking-widest text-bsblack/40 uppercase font-fred block">TikTok Shop Linkage</span>
                  <h3 className="text-sm font-black text-bsblack font-fred uppercase tracking-wider">Yellow Basket Payment Method</h3>
                  <p className="text-[11px] font-medium text-bsblack/50">
                    Select your preferred transaction option below to view step-by-step checkout instructions.
                  </p>
                </div>

                {/* Custom Toggle Tapes for COD vs Payment First */}
                <div className="flex bg-crm border border-dcrm/60 p-1 rounded-2xl gap-1">
                  <button
                    onClick={() => setPaymentMode('cod')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold font-fred transition-all ${
                      paymentMode === 'cod' 
                        ? 'bg-gradient-to-r from-npink to-dpink text-bswhite shadow-sm' 
                        : 'text-npink hover:bg-lpink/20'
                    }`}
                  >
                    <FiCreditCard size={14} /> Cash On Delivery (COD)
                  </button>
                  <button
                    onClick={() => setPaymentMode('payfirst')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold font-fred transition-all ${
                      paymentMode === 'payfirst' 
                        ? 'bg-gradient-to-r from-npink to-dpink text-bswhite shadow-sm' 
                        : 'text-npink hover:bg-lpink/20'
                    }`}
                  >
                    <FaQrcode size={14} /> Payment First
                  </button>
                </div>

                {/* Dynamic Mode Contents */}
                {paymentMode === 'cod' ? (
                  <div className="space-y-4 pt-1 animate-[fadeIn_0.2s_ease-out]">
                    <div className="bg-gradient-to-br from-dpink/5 to-transparent border border-lpink/20 rounded-2xl p-4 space-y-3">
                      <div className="flex items-center gap-2 text-dpink">
                        <FiShoppingBag size={16} />
                        <h4 className="text-xs font-black font-fred uppercase tracking-wide">COD Basket Checkout Instructions</h4>
                      </div>
                      <p className="text-xs font-medium text-bsblack/70 leading-relaxed">
                        If you prefer to pay upon delivery via TikTok&apos;s channels, your order must be handled completely through the streaming system&apos;s physical cart interface.
                      </p>
                      
                      <div className="border-t border-dcrm/40 pt-3 space-y-2">
                        <div className="flex items-start gap-2 text-[11px] font-medium text-bsblack/60">
                          <span className="text-dpink font-bold shrink-0">1.</span>
                          <span>The host will assign you a specific item option or matching bundle variant directly inside the live session.</span>
                        </div>
                        <div className="flex items-start gap-2 text-[11px] font-medium text-bsblack/60">
                          <span className="text-dpink font-bold shrink-0">2.</span>
                          <span>Open the **TikTok Yellow Basket** appearing on the bottom left corner of your stream screen.</span>
                        </div>
                        <div className="flex items-start gap-2 text-[11px] font-medium text-bsblack/60">
                          <span className="text-dpink font-bold shrink-0">3.</span>
                          <span>Add the item link corresponding to your exact confirmed total price block directly to your cart, choose **COD** as payment method, and confirm order.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 pt-1 animate-[fadeIn_0.2s_ease-out]">
                    <div className="bg-gradient-to-br from-purple-50 to-transparent border border-purple-100 rounded-2xl p-4 space-y-3">
                      <div className="flex items-center gap-2 text-purple-500">
                        <FaQrcode size={16} />
                        <h4 className="text-xs font-black font-fred uppercase tracking-wide">Payment First (E-Wallet / QR)</h4>
                      </div>
                      <p className="text-xs font-medium text-bsblack/70 leading-relaxed">
                        To claim your custom items using external fast payment lines while taking advantage of cheap TikTok subsidized logistics:
                      </p>
                      
                      <div className="border-t border-dcrm/40 pt-3 space-y-2">
                        <div className="flex items-start gap-2 text-[11px] font-medium text-bsblack/60">
                          <span className="text-purple-500 font-bold shrink-0">1.</span>
                          <span>Open the **Yellow Basket** on screen and select our base **PHP 5.00 Shipping / Custom Token Link** to generate your official TikTok Shop courier tracking waybill.</span>
                        </div>
                        <div className="flex items-start gap-2 text-[11px] font-medium text-bsblack/60">
                          <span className="text-purple-500 font-bold shrink-0">2.</span>
                          <span>Scan our official store **QR Code** (sent to you in TikTok DMs) to pay the remaining balance of your total mined item value.</span>
                        </div>
                        <div className="flex items-start gap-2 text-[11px] font-medium text-bsblack/60">
                          <span className="text-purple-500 font-bold shrink-0">3.</span>
                          <span>Send a screenshot of your successful e-wallet bank transaction slip in your DM thread. Once verified, your package will be available for pickup in a delivery schedule!</span>
                        </div>
                      </div>
                    </div>

                    {/* Placeholder Frame for QR Code Asset */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl bg-crm border border-dashed border-dcrm flex flex-col items-center justify-center p-4 text-center">
                      <FaQrcode size={32} className="text-bsblack/20 mb-1" />
                      <p className="text-[10px] font-black font-fred uppercase tracking-wider text-bsblack/40">Official QR Code Matrix</p>
                      <p className="text-[9px] font-medium text-bsblack/30 max-w-xs mt-0.5">Will be provided securely directly inside your confirmed private TikTok messaging stream thread.</p>
                    </div>
                  </div>
                )}

              </div>
            </ScrollReveal>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
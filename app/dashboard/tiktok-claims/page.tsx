'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiVideo, 
  FiUser, 
  FiClock, 
  FiPlus, 
  FiDollarSign, 
  FiShoppingBag, 
  FiCreditCard,
  FiTrash2
} from 'react-icons/fi';

interface StreamClaim {
  id: string;
  tiktokUsername: string;
  notes: string;
  price: number;
  paymentMethod: 'PF' | 'COD';
  hasPaid: boolean;
  hasCheckedOut: boolean;
  timestamp: string;
}

export default function TikTokClaimsPage() {
  const [claims, setClaims] = useState<StreamClaim[]>([
    { 
      id: '1', 
      tiktokUsername: '@chloe_collects', 
      notes: 'Mined 3 pink bows + 1 giant pastel star bundle', 
      price: 450,
      paymentMethod: 'PF',
      hasPaid: true,
      hasCheckedOut: true,
      timestamp: '08:42 PM', 
    },
    { 
      id: '2', 
      tiktokUsername: '@anik_anik_lover', 
      notes: 'Claimed premium cat spacer combo bundle', 
      price: 280,
      paymentMethod: 'COD',
      hasPaid: false,
      hasCheckedOut: false,
      timestamp: '09:05 PM', 
    },
  ]);

  // Form input states
  const [username, setUsername] = useState('');
  const [notes, setNotes] = useState('');
  const [price, setPrice] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'PF' | 'COD'>('PF');

  const handleCreateClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !price) return;

    const newClaim: StreamClaim = {
      id: Date.now().toString(),
      tiktokUsername: username.startsWith('@') ? username : `@${username}`,
      notes,
      price: parseFloat(price) || 0,
      paymentMethod,
      hasPaid: false,
      hasCheckedOut: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setClaims([newClaim, ...claims]);
    setUsername('');
    setNotes('');
    setPrice('');
    setPaymentMethod('PF');
  };

  const togglePaid = (id: string) => {
    setClaims(claims.map(c => c.id === id ? { ...c, hasPaid: !c.hasPaid } : c));
  };

  const toggleCheckedOut = (id: string) => {
    setClaims(claims.map(c => c.id === id ? { ...c, hasCheckedOut: !c.hasCheckedOut } : c));
  };

  const deleteClaim = (id: string) => {
    setClaims(claims.filter(c => c.id !== id));
  };

  return (
    <div className="space-y-8 font-pop pb-12">
      {/* Page Header Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black font-fred uppercase tracking-wide text-bsblack">
          TikTok Claims Session
        </h1>
        <p className="text-xs font-medium text-bsblack/50 mt-1">
          Log live claims, track premium bundle pricing, and manage fulfillment loops.
        </p>
      </div>

      {/* Main Structural Matrix Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* --- FORM SECTION --- */}
        <div className="lg:col-span-4 w-full">
          <form 
            onSubmit={handleCreateClaim} 
            className="bg-bswhite border border-lpink/30 p-5 sm:p-6 rounded-[2rem] shadow-sm space-y-4 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-lpink/10 rounded-full blur-2xl pointer-events-none" />
            
            <h2 className="text-xs font-black font-fred uppercase text-bsblack tracking-wider flex items-center gap-2">
              <FiVideo className="text-dpink" /> Log Stream Claim
            </h2>

            <div className="space-y-3.5">
              {/* Username Input Field */}
              <div>
                <label className="text-[9px] font-bold uppercase tracking-widest text-bsblack/60 ml-1">TikTok Handle</label>
                <div className="relative mt-1">
                  <FiUser className="absolute left-4 top-3.5 text-bsblack/30" size={14} />
                  <input 
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-white border border-lpink/20 rounded-xl pl-10 pr-4 py-3 text-xs outline-none focus:border-dpink transition-all font-medium text-bsblack shadow-xs"
                  />
                </div>
              </div>

              {/* Price and Channel Dual Layout Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-bsblack/60 ml-1">Deal Price</label>
                  <div className="relative mt-1">
                    <FiDollarSign className="absolute left-4 top-3.5 text-bsblack/30" size={14} />
                    <input 
                      type="number"
                      placeholder="0.00"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full bg-white border border-lpink/20 rounded-xl pl-9 pr-4 py-3 text-xs outline-none focus:border-dpink transition-all font-black text-bsblack shadow-xs"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-bsblack/60 ml-1">Channel</label>
                  <div className="relative mt-1">
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value as 'PF' | 'COD')}
                      className="w-full bg-white border border-lpink/20 rounded-xl px-4 py-3 text-xs outline-none focus:border-dpink transition-all font-bold text-bsblack/70 appearance-none cursor-pointer shadow-xs"
                    >
                      <option value="PF">Paid Forward (PF)</option>
                      <option value="COD">COD</option>
                    </select>
                    <div className="absolute right-4 top-3.5 pointer-events-none text-[10px] font-bold text-bsblack/40">▼</div>
                  </div>
                </div>
              </div>

              {/* Bundle Breakdowns Selection Textarea */}
              <div>
                <label className="text-[9px] font-bold uppercase tracking-widest text-bsblack/60 ml-1">Bundle Breakdown Notes</label>
                <textarea 
                  placeholder="List down details (e.g., 2 gummy bears, 1 pink charm...)"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-lpink/20 rounded-xl px-4 py-3 mt-1 text-xs outline-none focus:border-dpink transition-all font-medium text-bsblack resize-none shadow-xs"
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-bsblack text-bswhite py-3.5 rounded-xl font-bold font-fred uppercase text-[10px] tracking-widest hover:bg-dpink transition-all shadow-md flex items-center justify-center gap-1.5 hover:scale-[1.01]">
              <FiPlus size={13} /> Log Customer Claim
            </button>
          </form>
        </div>

        {/* --- DATA LOG QUEUE SECTION --- */}
        <div className="lg:col-span-8 w-full space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-bsblack/40 ml-1">
            Session Stream Log ({claims.length})
          </h2>

          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {claims.map((claim) => (
                <motion.div 
                  key={claim.id}
                  layout
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`p-5 bg-white border rounded-[2rem] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all relative ${
                    claim.hasPaid && claim.hasCheckedOut 
                      ? 'border-lpink/20 bg-crm/10 opacity-70' 
                      : 'border-lpink/40'
                  }`}
                >
                  {/* Left Column Data Segment */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-black text-sm text-bsblack font-fred tracking-wide">{claim.tiktokUsername}</span>
                      <span className="text-[9px] text-bsblack/30 font-bold flex items-center gap-0.5"><FiClock /> {claim.timestamp}</span>
                      
                      <span className={`text-[9px] font-black font-fred px-2.5 py-0.5 rounded-full tracking-wider ${
                        claim.paymentMethod === 'PF' ? 'bg-lpink/30 text-dpink' : 'bg-crm text-bsblack/60 border border-lpink/20'
                      }`}>
                        {claim.paymentMethod === 'PF' ? '💳 PF' : '📦 COD'}
                      </span>

                      <span className="font-black font-fred text-sm text-dpink ml-auto md:ml-3">
                        ₱{claim.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-bsblack/60 font-medium leading-relaxed bg-bswhite/50 p-3 rounded-xl border border-lpink/10">
                      {claim.notes || <span className="italic text-bsblack/30">No special item specifications recorded.</span>}
                    </p>
                  </div>

                  {/* Right Column Operational Control Grid Switches */}
                  <div className="flex items-center justify-between md:justify-end gap-2 pt-3 md:pt-0 border-t md:border-t-0 border-lpink/10">
                    <div className="flex items-center gap-1.5">
                      {/* Paid Toggle Status */}
                      <button
                        onClick={() => togglePaid(claim.id)}
                        className={`px-3 py-2 rounded-xl text-[9px] font-black font-fred uppercase tracking-wider border flex items-center gap-1 transition-all ${
                          claim.hasPaid 
                            ? 'bg-dpink text-bswhite border-dpink shadow-sm' 
                            : 'bg-bswhite text-bsblack/40 border-lpink/20 hover:border-dpink hover:text-dpink'
                        }`}
                      >
                        <FiCreditCard size={11} /> {claim.hasPaid ? 'Paid' : 'Unpaid'}
                      </button>

                      {/* Basket Checkout Toggle Status */}
                      <button
                        onClick={() => toggleCheckedOut(claim.id)}
                        className={`px-3 py-2 rounded-xl text-[9px] font-black font-fred uppercase tracking-wider border flex items-center gap-1 transition-all ${
                          claim.hasCheckedOut 
                            ? 'bg-bsblack text-bswhite border-bsblack shadow-sm' 
                            : 'bg-bswhite text-bsblack/40 border-lpink/20 hover:border-dpink hover:text-dpink'
                        }`}
                      >
                        <FiShoppingBag size={11} /> {claim.hasCheckedOut ? 'Checked Out' : 'No Basket'}
                      </button>
                    </div>

                    {/* Delete Item Log Entry button */}
                    <button 
                      onClick={() => deleteClaim(claim.id)}
                      className="p-2 text-bsblack/30 hover:text-dpink hover:bg-lpink/20 rounded-xl transition-all ml-2"
                      title="Remove Entry"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {claims.length === 0 && (
              <div className="text-center py-12 border-2 border-dashed border-lpink/20 rounded-[2rem] bg-bswhite/40">
                <p className="text-xs font-bold font-fred uppercase text-bsblack/30 tracking-wider">No claims logged in this session yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
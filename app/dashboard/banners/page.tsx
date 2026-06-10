'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiImage, FiUploadCloud, FiToggleLeft, FiToggleRight, FiExternalLink } from 'react-icons/fi';

interface PromoBanner {
  id: string;
  campaign: string;
  headline: string;
  destinationUrl: string;
  isActive: boolean;
}

export default function BannersPage() {
  const [banners, setBanners] = useState<PromoBanner[]>([
    { id: '1', campaign: 'Summer Mining Event', headline: '🍉 SUMMER MINING BONANZA: 20% OFF COCO BUNDLES!', destinationUrl: '/shop', isActive: true },
    { id: '2', campaign: 'Pastel Collection Launch', headline: '🌸 NEW IN: Dreamy Pastel Matte Series is Here!', destinationUrl: '/collections/pastel', isActive: false },
  ]);

  const toggleActive = (id: string) => {
    setBanners(banners.map(banner => 
      banner.id === id ? { ...banner, isActive: !banner.isActive } : banner
    ));
  };

  return (
    <div className="space-y-10 font-pop">
      <div>
        <h1 className="text-3xl font-black font-fred uppercase tracking-wide">Promo & Hero Banners</h1>
        <p className="text-xs font-medium text-bsblack/50 mt-1">Control your storefront display alerts and holiday campaign artwork elements.</p>
      </div>

      {/* Upload Zone Canvas Box */}
      <div className="bg-bswhite border border-dashed border-lpink/50 p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-16 h-16 bg-lpink/20 text-dpink rounded-full flex items-center justify-center text-xl shadow-inner">
          <FiUploadCloud />
        </div>
        <div>
          <h3 className="text-xs font-black font-fred uppercase text-bsblack tracking-wider">Upload Campaign Billboard Artwork</h3>
          <p className="text-[10px] font-medium text-bsblack/40 mt-1">Recommended size: 1920x450px (PNG or JPG max 2MB)</p>
        </div>
        <button className="bg-bsblack text-bswhite px-5 py-2.5 rounded-xl text-[10px] font-bold font-fred uppercase hover:bg-dpink transition-all shadow-sm">
          Browse Images
        </button>
      </div>

      {/* Banner Configuration Grid Content */}
      <div className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-bsblack/40 ml-1">Live Campaigns</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {banners.map((banner) => (
            <motion.div 
              key={banner.id}
              className={`bg-white border border-lpink/20 rounded-[2.5rem] p-6 shadow-sm flex flex-col justify-between space-y-6 transition-all ${
                banner.isActive ? 'ring-2 ring-lpink/40 shadow-md' : 'opacity-70'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-lpink/20 text-dpink font-black text-[9px] uppercase tracking-wider font-fred">
                    {banner.campaign}
                  </span>
                  
                  {/* Toggle Component */}
                  <button 
                    onClick={() => toggleActive(banner.id)}
                    className={`text-2xl transition-colors ${banner.isActive ? 'text-green-500' : 'text-bsblack/30'}`}
                  >
                    {banner.isActive ? <FiToggleRight /> : <FiToggleLeft />}
                  </button>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-bold uppercase tracking-wider text-bsblack/30">Display Copy Line</label>
                  <p className="text-xs font-bold text-bsblack leading-relaxed">{banner.headline}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-lpink/10 flex items-center justify-between text-[10px] font-bold uppercase font-fred text-bsblack/50">
                <span className="flex items-center gap-1 truncate max-w-[180px]">
                  <FiExternalLink /> {banner.destinationUrl}
                </span>
                <span className={banner.isActive ? 'text-green-500' : 'text-bsblack/40'}>
                  {banner.isActive ? '● Display Active' : '○ Standby Pool'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
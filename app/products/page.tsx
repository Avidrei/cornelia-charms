'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { FiSearch, FiSliders, FiCheck, FiChevronLeft, FiChevronRight, FiTag, FiHeart, FiGift, FiZap, FiList, FiCheckCircle } from 'react-icons/fi';

interface ProductItem {
  id: string;
  title: string;
  price: number;
  image: string;
  category: 'Charms' | 'Keychains' | 'Bracelets' | 'Pins';
  colors: string[];
  isTopSeller: boolean;
  isNewStock: boolean;
  tagline?: string;
  sku?: string;
  stockCount?: number;
}

// Expanded catalog matching your precise layout context and aesthetic color ranges
const MOCK_PRODUCTS: ProductItem[] = [
  { id: '1', title: 'CHOCOLATE ANIK-ANIK', price: 100.00, image: '/images/charms.jpg', category: 'Charms', colors: ['Red', 'Multi-Color'], isTopSeller: true, isNewStock: false, tagline: 'Best Seller', sku: 'CC-CHM-001', stockCount: 14 },
  { id: '2', title: 'STRAWBERRY RIBBON LINK', price: 120.00, image: '/images/charms.jpg', category: 'Charms', colors: ['Red', 'Violet'], isTopSeller: true, isNewStock: false, tagline: 'Limited', sku: 'CC-CHM-002', stockCount: 5 },
  { id: '3', title: 'COQUETTE HEART CHARM', price: 100.00, image: '/images/charms.jpg', category: 'Charms', colors: ['Multi-Color'], isTopSeller: true, isNewStock: true, tagline: 'Fresh Drop', sku: 'CC-CHM-003', stockCount: 22 },
  { id: '4', title: 'CRAYON SHIN-CHAN SPECIAL', price: 150.00, image: '/images/keychains.jpg', category: 'Keychains', colors: ['Blue', 'Yellow'], isTopSeller: false, isNewStock: true, tagline: '50% OFF', sku: 'CC-KEY-012', stockCount: 8 },
  { id: '5', title: 'PASTEL CLOUD CHAIN', price: 100.00, image: '/images/keychains.jpg', category: 'Keychains', colors: ['Green', 'Indigo'], isTopSeller: false, isNewStock: true, sku: 'CC-KEY-014', stockCount: 19 },
  { id: '6', title: 'DREAMY STAR BRACELET', price: 180.00, image: '/images/bracelets.jpg', category: 'Bracelets', colors: ['Orange', 'Violet'], isTopSeller: false, isNewStock: true, tagline: 'Handmade', sku: 'CC-BRC-044', stockCount: 11 },
  { id: '7', title: 'ANGELIC BOW BAG ATTACHMENT', price: 135.00, image: '/images/charms.jpg', category: 'Charms', colors: ['Violet', 'Multi-Color'], isTopSeller: true, isNewStock: true, tagline: 'Popular', sku: 'CC-CHM-009', stockCount: 7 },
  { id: '8', title: 'SANRIO INSPIRED LINKS', price: 110.00, image: '/images/keychains.jpg', category: 'Keychains', colors: ['Blue', 'Yellow', 'Red'], isTopSeller: true, isNewStock: false, sku: 'CC-KEY-021', stockCount: 15 },
  { id: '9', title: 'CHERRY BLOSSOM WRISTLET', price: 160.00, image: '/images/bracelets.jpg', category: 'Bracelets', colors: ['Red', 'Orange'], isTopSeller: false, isNewStock: true, tagline: 'Handmade', sku: 'CC-BRC-048', stockCount: 12 },
  { id: '10', title: 'LUCKY MEOW METALLIC PIN', price: 85.00, image: '/images/pins.jpg', category: 'Pins', colors: ['Yellow', 'Green'], isTopSeller: false, isNewStock: false, tagline: 'Trinket', sku: 'CC-PIN-081', stockCount: 30 },
  { id: '11', title: 'MATTE STARLIGHT BUTTONS', price: 60.00, image: '/images/pins.jpg', category: 'Pins', colors: ['Indigo', 'Violet'], isTopSeller: false, isNewStock: true, sku: 'CC-PIN-084', stockCount: 25 },
  { id: '12', title: 'CUPID ARCH FLUFFY KEYRING', price: 140.00, image: '/images/keychains.jpg', category: 'Keychains', colors: ['Red', 'Multi-Color'], isTopSeller: true, isNewStock: true, tagline: 'Cute Fix', sku: 'CC-KEY-029', stockCount: 4 }
];

const AVAILABLE_COLORS = ['Red', 'Blue', 'Yellow', 'Indigo', 'Orange', 'Violet', 'Green', 'Multi-Color'];
const COLOR_MAP: Record<string, string> = {
  Red: 'bg-red-500', Blue: 'bg-blue-500', Yellow: 'bg-yellow-400', Indigo: 'bg-indigo-700',
  Orange: 'bg-orange-500', Violet: 'bg-purple-400', Green: 'bg-emerald-500', 'Multi-Color': 'bg-gradient-to-tr from-red-400 via-yellow-400 to-blue-400'
};

export default function ProductLineupsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Charms');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortByPrice, setSortByPrice] = useState<'none' | 'asc' | 'desc'>('none');
  const [currentPage, setCurrentPage] = useState(1);

  const toggleColor = (color: string) => {
    setSelectedColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]);
  };

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesColor = selectedColors.length > 0 ? product.colors.some(c => selectedColors.includes(c)) : true;
    return matchesSearch && matchesCategory && matchesColor;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortByPrice === 'asc') return a.price - b.price;
    if (sortByPrice === 'desc') return b.price - a.price;
    return 0;
  });

  const topSellers = sortedProducts.filter(p => p.isTopSeller);
  const newStocks = sortedProducts.filter(p => p.isNewStock);

  return (
    <div className="min-h-screen bg-[#FFFDFB] font-pop text-bsblack antialiased selection:bg-dpink/20 relative overflow-x-hidden">
      
      {/* --- REUSED HOMEPAGE GRADIENT COLOR MATRIX MATRIX --- */}
      <div className="absolute top-[-5%] right-[-5%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-lpink/30 via-crm/20 to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[-10%] w-[45rem] h-[45rem] rounded-full bg-gradient-to-tr from-dcrm/30 via-npink/10 to-transparent blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-5%] w-[35rem] h-[35rem] rounded-full bg-gradient-to-tr from-crm via-lpink/10 to-transparent blur-[90px] pointer-events-none z-0" />

      {/* Craft Ribbon Stitch Lines */}
      <div className="absolute top-[18%] left-0 right-0 h-px border-t-2 border-dashed border-lpink/30 pointer-events-none z-0" />
      <div className="absolute top-[65%] left-0 right-0 h-px border-t-2 border-dashed border-dcrm/40 pointer-events-none z-0" />

      {/* Decorative Floating Lace Stamps */}
      <div className="absolute top-[35%] right-[3%] w-10 h-10 border-2 border-dotted border-dpink/30 rounded-full pointer-events-none z-0 animate-spin-[duration:40s]" />
      <div className="absolute bottom-[30%] left-[2%] w-12 h-12 border-2 border-dashed border-npink/25 rounded-2xl pointer-events-none z-0 rotate-12" />

      <Navbar />

      {/* Main Structural Outer Wrapper */}
      <main className="relative mx-auto max-w-[95rem] px-4 xs:px-6 sm:px-10 lg:px-8 pt-28 pb-20 lg:pt-36 z-10 space-y-10">
        
        {/* --- DYNAMIC PROMOTIONAL BANNER VESSEL --- */}
        <ScrollReveal>
          <div className="w-full rounded-[2.5rem] sm:rounded-[3.5rem] bg-gradient-to-r from-crm/80 via-lpink/30 to-bswhite border-2 border-dashed border-lpink/60 p-3 sm:p-4 shadow-xl overflow-hidden group">
            <div className="relative w-full min-h-[14rem] sm:h-72 rounded-[2rem] sm:rounded-[2.8rem] bg-bswhite border border-dcrm/80 overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
              
              {/* Left Action Elements */}
              <div className="md:col-span-7 p-6 xs:p-8 sm:p-12 space-y-4 text-center md:text-left z-10 order-2 md:order-1">
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold tracking-widest text-dpink uppercase font-fred bg-dpink/10 px-3 py-1 rounded-full">
                  <FiTag size={12} /> #CorneliaCharmsSale
                </span>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-bsblack font-fred leading-none uppercase">
                  Crayon Shin-Chan <br />
                  Charms <span className="text-dpink">50% OFF!</span>
                </h1>
                <p className="text-xs sm:text-sm font-medium text-bsblack/60 max-w-md">
                  Cornelia Charms is ready to assist you with its products. Grab these live-exclusives before stocks disappear!
                </p>
                <div className="pt-2">
                  <button className="rounded-2xl bg-gradient-to-r from-npink to-dpink px-8 py-3 text-xs font-bold tracking-widest text-bswhite shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03] font-fred uppercase">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Right Showcase Banner Frame */}
              <div className="md:col-span-5 h-48 md:h-full relative overflow-hidden order-1 md:order-2 border-b md:border-b-0 md:border-l border-dcrm/80">
                <div className="absolute inset-0 bg-crm/30 z-0 animate-pulse" />
                <Image
                  src="/images/charms.jpg" 
                  alt="Dynamic Campaign Visual Asset"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* --- INTERACTIVE SEARCH FIELD BAR --- */}
        <ScrollReveal>
          <div className="relative w-full rounded-full border-2 border-dashed border-lpink/60 bg-bswhite/80 backdrop-blur-md p-1.5 shadow-md flex items-center transition-all focus-within:border-dpink focus-within:shadow-lg">
            <div className="pl-4 text-npink">
              <FiSearch size={20} />
            </div>
            <input 
              type="text"
              placeholder="Search Something..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none pl-3 pr-4 py-2.5 text-sm sm:text-base text-bsblack font-medium placeholder-bsblack/30"
            />
            <div className="pr-2 hidden sm:flex items-center gap-1.5 text-xs font-bold text-dpink bg-crm border border-dashed border-dpink/30 px-4 py-2 rounded-full font-fred uppercase tracking-wider select-none animate-pulse">
              <FiSliders size={14} /> Refine Catalog
            </div>
          </div>
        </ScrollReveal>

        {/* --- DUAL CORE INTERACTIVE GRID MATRIX LAYOUT --- */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CONTROL & CATEGORY MODULES */}
          <aside className="xl:col-span-3 space-y-6 lg:sticky lg:top-28">
            
            {/* Price Sorting Toggle Tapes */}
            <div className="bg-bswhite border border-dcrm rounded-[2rem] p-5 shadow-sm space-y-3">
              <span className="text-[11px] font-bold tracking-widest text-bsblack/40 uppercase font-fred block">Sort Catalog By</span>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setSortByPrice(prev => prev === 'asc' ? 'none' : 'asc')}
                  className={`flex-1 text-center py-2.5 px-3 rounded-xl text-xs font-bold font-fred transition-all duration-200 active:scale-95 ${sortByPrice === 'asc' ? 'bg-dpink text-bswhite shadow-md' : 'bg-crm text-dpink border border-lpink/40 hover:bg-lpink/20'}`}
                >
                  Price: Low-High
                </button>
                <button 
                  onClick={() => setSortByPrice(prev => prev === 'desc' ? 'none' : 'desc')}
                  className={`flex-1 text-center py-2.5 px-3 rounded-xl text-xs font-bold font-fred transition-all duration-200 active:scale-95 ${sortByPrice === 'desc' ? 'bg-dpink text-bswhite shadow-md' : 'bg-crm text-dpink border border-lpink/40 hover:bg-lpink/20'}`}
                >
                  Price: High-Low
                </button>
              </div>
            </div>

            {/* Category Filter Group */}
            <div className="bg-bswhite border border-dcrm rounded-[2rem] p-5 shadow-sm space-y-3">
              <span className="text-[11px] font-bold tracking-widest text-bsblack/40 uppercase font-fred block">Category Lineups</span>
              <div className="space-y-2">
                {['Charms', 'Keychains', 'Bracelets', 'Pins'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(selectedCategory === cat ? '' : cat)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-bold font-fred transition-all duration-200 tracking-wider uppercase border active:scale-[0.98] ${
                      selectedCategory === cat 
                        ? 'bg-gradient-to-r from-npink to-dpink text-bswhite border-transparent shadow-md' 
                        : 'bg-bswhite text-npink border-dcrm/60 hover:bg-crm/40'
                    }`}
                  >
                    <span>{cat} Selection</span>
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${selectedCategory === cat ? 'bg-bswhite/20 border-bswhite' : 'border-npink/40'}`}>
                      {selectedCategory === cat && <FiCheck size={10} />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Matrix Modules */}
            <div className="bg-bswhite border border-dcrm rounded-[2rem] p-5 shadow-sm space-y-3">
              <span className="text-[11px] font-bold tracking-widest text-bsblack/40 uppercase font-fred block">Color Aesthetics</span>
              <div className="grid grid-cols-2 gap-2.5">
                {AVAILABLE_COLORS.map((color) => {
                  const isSelected = selectedColors.includes(color);
                  return (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`flex items-center gap-2 p-2 rounded-xl border text-[11px] font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-95 ${isSelected ? 'border-dpink bg-lpink/10 font-bold text-dpink shadow-xs' : 'border-dcrm/60 text-bsblack/70 hover:bg-crm/20'}`}
                    >
                      <div className={`w-3.5 h-3.5 rounded-full shrink-0 shadow-inner ${COLOR_MAP[color]}`} />
                      <span className="truncate">{color}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Best Seller Micro Previews Sidebar */}
            <div className="bg-bswhite border border-dcrm rounded-[2rem] p-5 shadow-sm space-y-3 hidden xl:block">
              <span className="text-[11px] font-bold tracking-widest text-bsblack/40 uppercase font-fred block">Top Shelf Picks</span>
              <div className="space-y-3">
                {MOCK_PRODUCTS.slice(0, 4).map((product) => (
                  <div key={product.id} className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-crm/30 transition-colors group">
                    <div className="relative w-12 h-12 rounded-xl bg-crm overflow-hidden border border-dcrm shrink-0">
                      <Image src={product.image} alt={product.title} fill className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[11px] font-black text-bsblack truncate font-fred uppercase tracking-wide group-hover:text-dpink transition-colors">{product.title}</h4>
                      <p className="text-[10px] font-bold text-npink mt-0.5">PHP {product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>

          {/* RIGHT COLUMN: CATALOG DISPLAY AREA */}
          <div className="xl:col-span-9 space-y-10">
            
            {/* --- BLOCK SECTION: TOP SELLERS --- */}
            {topSellers.length > 0 && (
              <ScrollReveal>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 px-1">
                    <FiZap size={14} className="text-dpink animate-bounce" />
                    <h2 className="text-xs font-bold tracking-widest text-bsblack/40 uppercase font-fred">Top Sellers Showcase</h2>
                  </div>
                  
                  <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-dpink/20 via-npink/10 to-lpink/5 p-5 sm:p-6 border border-lpink/30 shadow-md relative overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {topSellers.map((product) => (
                        <div key={product.id} className="group bg-bswhite border border-dcrm rounded-[2rem] p-3 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                          <div className="relative aspect-square w-full rounded-[1.5rem] overflow-hidden bg-crm border border-dcrm/40 shadow-inner">
                            <Image 
                              src={product.image} 
                              alt={product.title} 
                              fill 
                              className="object-cover transition-transform duration-500 group-hover:scale-105" 
                            />
                            
                            {product.tagline && (
                              <div className="absolute top-3 left-3 bg-bswhite/90 backdrop-blur-md border border-dashed border-dpink/40 text-dpink text-[8px] font-bold tracking-widest px-2.5 py-1 rounded-md font-fred uppercase shadow-xs">
                                {product.tagline}
                              </div>
                            )}

                            <button className="absolute top-3 right-3 bg-bswhite/90 backdrop-blur-xs text-dpink p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity hover:bg-bswhite hover:scale-105 active:scale-95 shadow-xs">
                              <FiHeart size={14} className="fill-transparent hover:fill-dpink transition-colors" />
                            </button>
                          </div>
                          <div className="pt-4 pb-2 px-1 text-center sm:text-left">
                            <h3 className="text-xs font-black tracking-wider text-bsblack font-fred uppercase truncate group-hover:text-dpink transition-colors">{product.title}</h3>
                            <p className="text-xs font-bold text-npink mt-1">PHP {product.price.toFixed(2)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* --- BLOCK SECTION: NEW STOCKS --- */}
            {newStocks.length > 0 && (
              <ScrollReveal>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 px-1">
                    <FiGift size={14} className="text-npink" />
                    <h2 className="text-xs font-bold tracking-widest text-bsblack/40 uppercase font-fred">Fresh New Stocks</h2>
                  </div>
                  
                  <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-lpink/10 via-bswhite to-crm/30 p-5 sm:p-6 border border-lpink/20 shadow-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {newStocks.map((product) => (
                        <div key={product.id} className="group bg-bswhite border border-dcrm rounded-[2rem] p-3 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                          <div className="relative aspect-square w-full rounded-[1.5rem] overflow-hidden bg-crm border border-dcrm/40 shadow-inner">
                            <Image 
                              src={product.image} 
                              alt={product.title} 
                              fill 
                              className="object-cover transition-transform duration-500 group-hover:scale-105" 
                            />
                            
                            <div className="absolute top-3 left-3 bg-bsblack text-bswhite text-[8px] font-bold tracking-widest px-2.5 py-1 rounded-md font-fred uppercase">
                              {product.tagline || 'New Drop'}
                            </div>

                            <button className="absolute top-3 right-3 bg-bswhite/90 backdrop-blur-xs text-dpink p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity hover:bg-bswhite hover:scale-105 shadow-xs">
                              <FiHeart size={14} className="fill-transparent hover:fill-dpink transition-colors" />
                            </button>
                          </div>
                          <div className="pt-4 pb-2 px-1 text-center sm:text-left">
                            <h3 className="text-xs font-black tracking-wider text-bsblack font-fred uppercase truncate group-hover:text-dpink transition-colors">{product.title}</h3>
                            <p className="text-xs font-bold text-npink mt-1">PHP {product.price.toFixed(2)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Empty Slate Fallback Notification */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-20 bg-bswhite border-2 border-dashed border-dcrm rounded-[2rem] space-y-3">
                <p className="text-sm font-bold text-npink font-fred uppercase tracking-wider">No matching trinkets found</p>
                <p className="text-xs text-bsblack/40 max-w-xs mx-auto">Try adjusting your category selects or color aesthetic options to locate available items.</p>
              </div>
            )}

            {/* --- SYSTEM PAGINATION CONSOLE --- */}
            <ScrollReveal>
              <div className="flex items-center justify-center gap-3 pt-4">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className="w-10 h-10 rounded-xl border border-dcrm bg-bswhite flex items-center justify-center text-npink hover:bg-crm hover:scale-105 active:scale-95 transition-all shadow-xs"
                >
                  <FiChevronLeft size={18} />
                </button>
                
                <div className="bg-gradient-to-r from-npink to-dpink px-8 py-2.5 rounded-full text-xs font-bold tracking-widest text-bswhite shadow-md font-fred uppercase transition-transform hover:scale-[1.02]">
                  Page {currentPage} of 5
                </div>

                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, 5))}
                  className="w-10 h-10 rounded-xl border border-dcrm bg-bswhite flex items-center justify-center text-npink hover:bg-crm hover:scale-105 active:scale-95 transition-all shadow-xs"
                >
                  <FiChevronRight size={18} />
                </button>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* --- BRAND NEW ADDITION: MANIFEST INVENTORY LINEUP SECTION --- */}
        <ScrollReveal>
          <div className="w-full pt-10 space-y-4">
            <div className="flex items-center gap-2 px-1">
              <FiList size={16} className="text-dpink" />
              <h2 className="text-xs font-bold tracking-widest text-bsblack/40 uppercase font-fred">Manifest Inventory Lineup</h2>
            </div>

            <div className="w-full bg-bswhite border-2 border-dashed border-lpink/60 rounded-[2.5rem] p-6 sm:p-8 shadow-lg space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-crm border-b border-l border-dcrm/60 px-5 py-2 rounded-bl-2xl text-[10px] font-black font-fred tracking-widest uppercase text-npink">
                Live Stock Breakdown
              </div>

              <div className="divide-y divide-dcrm/40">
                {MOCK_PRODUCTS.map((item) => (
                  <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-4 group transition-colors hover:bg-crm/10 px-2 rounded-xl">
                    
                    {/* Item Title & Core Code details */}
                    <div className="space-y-1.5 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-black font-fred uppercase tracking-wider text-bsblack group-hover:text-dpink transition-colors">
                          {item.title}
                        </span>
                        {item.tagline && (
                          <span className="bg-dpink/10 text-dpink text-[9px] font-bold px-2 py-0.5 rounded-md font-fred uppercase tracking-wide">
                            {item.tagline}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-[11px] font-medium text-bsblack/40">
                        <span className="font-mono">{item.sku || 'CC-GEN-999'}</span>
                        <span>•</span>
                        <span className="text-npink font-bold uppercase tracking-wider text-[10px]">{item.category} Layout</span>
                      </div>
                    </div>

                    {/* Aesthetic Color Palettes & Active Stock Metrics */}
                    <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-between md:justify-end">
                      
                      {/* Color Tag Badges */}
                      <div className="flex items-center gap-1.5">
                        {item.colors.map((color) => (
                          <span key={color} className="inline-flex items-center gap-1 bg-crm/60 border border-dcrm/40 px-2.5 py-1 rounded-full text-[10px] font-semibold text-bsblack/70">
                            <span className={`w-2 h-2 rounded-full ${COLOR_MAP[color]}`} />
                            {color}
                          </span>
                        ))}
                      </div>

                      {/* Stock availability banner pill labels */}
                      <div className="flex items-center gap-6 min-w-[12rem] justify-end">
                        <div className="text-right">
                          <p className="text-xs font-bold text-bsblack font-fred">PHP {item.price.toFixed(2)}</p>
                          <p className="text-[10px] font-medium text-bsblack/30 mt-0.5">{item.stockCount || 10} Units Left</p>
                        </div>
                        
                        <div className={`px-3 py-1.5 rounded-xl border font-fred text-[10px] tracking-wider uppercase flex items-center gap-1.5 ${
                          (item.stockCount || 10) <= 5 
                            ? 'bg-red-50 border-red-200 text-red-500 animate-pulse' 
                            : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                        }`}>
                          <FiCheckCircle size={12} />
                          {(item.stockCount || 10) <= 5 ? 'Low Stock' : 'Available'}
                        </div>
                      </div>

                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

      </main>

      <Footer />
    </div>
  );
}
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSidebar } from '../context/SidebarContext';
import { 
  FiGrid, 
  FiCalendar, 
  FiImage, 
  FiBox, 
  FiVideo, 
  FiLogOut,
  FiX 
} from 'react-icons/fi';

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { isExpanded, isMobileOpen, toggleSidebar, closeMobileSidebar } = useSidebar();

  const menuItems = [
    { name: 'Overview', href: '/dashboard', icon: <FiGrid size={18} /> },
    { name: 'Schedules', href: '/dashboard/schedules', icon: <FiCalendar size={18} /> },
    { name: 'Banners', href: '/dashboard/banners', icon: <FiImage size={18} /> },
    { name: 'Products & Stocks', href: '/dashboard/products', icon: <FiBox size={18} /> },
    { name: 'TikTok Claims', href: '/dashboard/tiktok-claims', icon: <FiVideo size={18} /> },
  ];

  return (
    <>
      {/* Mobile Drawer Dark Overlay Dimmer backdrop */}
      {isMobileOpen && (
        <div 
          onClick={closeMobileSidebar}
          className="fixed inset-0 bg-bsblack/20 backdrop-blur-xs z-40 md:hidden transition-opacity duration-300"
        />
      )}

      <aside 
        className={`bg-bswhite/95 md:bg-bswhite/70 backdrop-blur-md border-r border-lpink/30 h-screen fixed left-0 top-0 flex flex-col justify-between z-50 font-pop transition-all duration-300 ease-in-out select-none
          ${/* Mobile Logic */ isMobileOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0'}
          ${/* Desktop Logic */ isExpanded ? 'md:w-64' : 'md:w-20'}
        `}
      >
        <div>
          {/* Header Area — Clicking logo acts as toggle trigger on desktop */}
          <div 
            onClick={() => {
              if (window.innerWidth >= 768) {
                toggleSidebar();
              }
            }}
            className={`p-5 border-b border-lpink/20 flex items-center justify-between md:justify-start transition-all ${
              isExpanded ? 'gap-3' : 'md:justify-center'
            } ${window.innerWidth >= 768 ? 'cursor-pointer hover:bg-lpink/10 active:scale-98' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center relative transition-transform duration-300 hover:rotate-12">
                <Image 
                  src="/LOGO-SB.png" 
                  alt="Cornelia Logo Trigger" 
                  width={34} 
                  height={34} 
                  className="object-contain" 
                />
              </div>
              
              {/* Show title on mobile drawer, or when desktop is expanded */}
              {(isExpanded || isMobileOpen) && (
                <div className="overflow-hidden whitespace-nowrap transition-all duration-300">
                  <h2 className="text-xs font-black font-fred uppercase text-bsblack tracking-wide">Cornelia</h2>
                  <p className="text-[9px] font-bold uppercase text-dpink tracking-widest">Admin Panel</p>
                </div>
              )}
            </div>

            {/* Mobile Close Button Drawer Cross */}
            <button 
              onClick={closeMobileSidebar}
              className="p-2 text-bsblack/40 hover:text-dpink md:hidden"
            >
              <FiX size={18} />
            </button>
          </div>

          {/* Navigation Link Stack */}
          <nav className="p-3 space-y-1.5">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              const displayLabel = isExpanded || isMobileOpen;

              return (
                <Link 
                  key={item.href} 
                  href={item.href}
                  onClick={closeMobileSidebar} // Automatically shuts mobile drawer when switching tabs
                  className={`flex items-center rounded-2xl text-xs font-bold uppercase transition-all duration-200 group relative ${
                    displayLabel ? 'px-4 py-3 gap-3' : 'p-3.5 justify-center'
                  } ${
                    isActive 
                      ? 'bg-bsblack text-bswhite shadow-md' 
                      : 'text-bsblack/60 hover:bg-lpink/20 hover:text-dpink'
                  }`}
                >
                  <span className={isActive ? 'text-dpink' : 'text-bsblack/40 group-hover:text-dpink transition-colors'}>
                    {item.icon}
                  </span>

                  {displayLabel ? (
                    <span className="whitespace-nowrap opacity-100 transition-opacity duration-200">
                      {item.name}
                    </span>
                  ) : (
                    /* Floating Hover Tooltip Card (Desktop Collapsed view only) */
                    <div className="hidden md:block absolute left-24 bg-bsblack text-bswhite text-[10px] tracking-wide font-fred uppercase px-3 py-1.5 rounded-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none transition-all shadow-xl z-50 border border-lpink/20">
                      {item.name}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout Row Footer */}
        <div className="p-3 border-t border-lpink/20">
          <Link 
            href="/login"
            onClick={closeMobileSidebar}
            className={`flex items-center rounded-2xl text-xs font-bold uppercase text-dpink hover:bg-dpink/10 transition-all duration-200 ${
              isExpanded || isMobileOpen ? 'px-4 py-3 gap-3' : 'p-3.5 justify-center'
            }`}
          >
            <FiLogOut size={18} />
            {(isExpanded || isMobileOpen) && <span className="whitespace-nowrap">Logout</span>}
          </Link>
        </div>
      </aside>
    </>
  );
}
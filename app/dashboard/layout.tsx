'use client';

import React from 'react';
import { SidebarProvider, useSidebar } from '../context/SidebarContext';
import DashboardSidebar from '../components/DashboardSidebar';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { isExpanded, toggleMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-bsblack flex flex-col md:flex-row">
      {/* Mobile Top Navigation Header (Hidden on Desktop) */}
      <header className="md:hidden w-full h-16 bg-bswhite/80 backdrop-blur-md border-b border-lpink/20 fixed top-0 left-0 px-5 flex items-center justify-between z-40">
        <div className="flex items-center gap-2">
          <Image src="/LOGO-SB.png" alt="Cornelia" width={28} height={28} />
          <span className="font-fred text-xs font-black uppercase tracking-wider">Cornelia Admin</span>
        </div>
        <button 
          onClick={toggleMobileOpen}
          className="p-2 bg-lpink/20 rounded-xl text-dpink hover:bg-dpink hover:text-bswhite transition-all active:scale-95"
        >
          <FiMenu size={18} />
        </button>
      </header>

      {/* The Responsive Slide/Fold Sidebar */}
      <DashboardSidebar />

      {/* Dynamic Content Frame */}
      <div 
        className={`flex-1 min-h-screen flex flex-col transition-all duration-300 ease-in-out pt-16 md:pt-0 ${
          isExpanded ? 'md:pl-64' : 'md:pl-20'
        }`}
      >
        <main className="p-5 sm:p-8 md:p-12 flex-1 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-lpink/10 to-transparent blur-3xl pointer-events-none z-0" />
          <div className="relative z-10">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </SidebarProvider>
  );
}
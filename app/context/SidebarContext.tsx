'use client';

import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext({
  isExpanded: true,
  isMobileOpen: false,
  toggleSidebar: () => {},
  toggleMobileOpen: () => {},
  closeMobileSidebar: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => setIsExpanded(!isExpanded);
  const toggleMobileOpen = () => setIsMobileOpen(!isMobileOpen);
  const closeMobileSidebar = () => setIsMobileOpen(false);

  return (
    <SidebarContext.Provider value={{ isExpanded, isMobileOpen, toggleSidebar, toggleMobileOpen, closeMobileSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
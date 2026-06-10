'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiShoppingBag, FiUsers } from 'react-icons/fi';

export default function DashboardOverview() {
  const summaryCards = [
    { title: 'Today\'s Revenue', value: '₱12,450.00', icon: <FiTrendingUp />, color: 'bg-green-500/10 text-green-600' },
    { title: 'Items Mined', value: '48 Bundles', icon: <FiShoppingBag />, color: 'bg-dpink/10 text-dpink' },
    { title: 'Active Stream Viewers', value: '1,200', icon: <FiUsers />, color: 'bg-blue-500/10 text-blue-600' },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-black font-fred uppercase tracking-wide">Studio Performance</h1>
        <p className="text-xs font-medium text-bsblack/50 mt-1">Welcome back! Here is how your shop is performing today.</p>
      </div>

      {/* Grid Cards Container */}
      <div className="grid sm:grid-cols-3 gap-6">
        {summaryCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-dcrm p-6 rounded-[2rem] shadow-sm flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-widest text-bsblack/40 uppercase">{card.title}</span>
              <p className="text-2xl font-black font-fred text-bsblack">{card.value}</p>
            </div>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg ${card.color}`}>
              {card.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
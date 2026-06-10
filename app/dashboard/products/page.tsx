'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBox, FiPlus, FiMinus, FiEdit3, FiImage, FiSearch } from 'react-icons/fi';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([
    { id: '1', name: 'Pastel Ribbon Charm', category: 'Charms', price: 120, stock: 15 },
    { id: '2', name: 'Gummy Bear Anik-Anik', category: 'Fillers', price: 45, stock: 4 },
    { id: '3', name: 'Premium Star Chain Spacer', category: 'Spacers', price: 85, stock: 22 },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Handle swift inline stock updates
  const adjustStock = (id: string, amount: number) => {
    setProducts(products.map(p => {
      if (p.id === id) {
        const newStock = Math.max(0, p.stock + amount);
        return { ...p, stock: newStock };
      }
      return p;
    }));
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-10 font-pop">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black font-fred uppercase tracking-wide">Products & Stocks</h1>
          <p className="text-xs font-medium text-bsblack/50 mt-1">Add items to retail collections or manually configure real-time inventory thresholds.</p>
        </div>
        
        <button className="inline-flex items-center gap-2 bg-bsblack text-bswhite px-6 py-3.5 rounded-2xl text-xs font-bold font-fred uppercase hover:bg-dpink transition-all shadow-md self-start sm:self-auto">
          <FiPlus size={14} /> Add New Product
        </button>
      </div>

      {/* Control Utility Toolbar Row */}
      <div className="bg-bswhite border border-lpink/30 p-4 rounded-2xl flex items-center px-5 max-w-md shadow-sm">
        <FiSearch className="text-bsblack/30 mr-3" size={16} />
        <input 
          type="text" 
          placeholder="Search charms by name..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent text-xs outline-none text-bsblack placeholder-bsblack/40 font-medium"
        />
      </div>

      {/* Grid Canvas Table Display */}
      <div className="bg-white border border-lpink/20 rounded-[2.5rem] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-lpink/10 bg-lpink/5 text-[10px] font-bold uppercase tracking-widest text-bsblack/40">
                <th className="p-6">Product Details</th>
                <th className="p-6">Category</th>
                <th className="p-6">Price</th>
                <th className="p-6 text-center">Stock Control</th>
                <th className="p-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-lpink/10 text-xs">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-crm/10 transition-colors">
                  {/* Title & Preview Spacer */}
                  <td className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-crm/40 rounded-xl border border-lpink/20 flex items-center justify-center text-bsblack/30">
                      <FiImage size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-bsblack text-sm">{p.name}</p>
                      <p className="text-[10px] text-bsblack/40 font-medium mt-0.5">ID: #{p.id}</p>
                    </div>
                  </td>
                  
                  {/* Category Field */}
                  <td className="p-6">
                    <span className="px-2.5 py-1 rounded-full bg-lpink/20 text-dpink font-bold text-[10px] font-fred uppercase tracking-wider">
                      {p.category}
                    </span>
                  </td>
                  
                  {/* Currency Price Row */}
                  <td className="p-6 font-bold text-bsblack text-sm">
                    ₱{p.price.toFixed(2)}
                  </td>
                  
                  {/* Adaptive Stock Control Clicker Counter */}
                  <td className="p-6">
                    <div className="flex items-center justify-center gap-3">
                      <button 
                        onClick={() => adjustStock(p.id, -1)}
                        className="w-8 h-8 rounded-lg border border-lpink/30 flex items-center justify-center text-bsblack/60 hover:border-dpink hover:text-dpink active:scale-90 transition-all bg-white shadow-xs"
                      >
                        <FiMinus size={12} />
                      </button>
                      
                      <span className={`w-10 text-center font-black text-sm font-fred ${p.stock <= 5 ? 'text-dpink' : 'text-bsblack'}`}>
                        {p.stock}
                        {p.stock <= 5 && <p className="text-[8px] tracking-tight text-dpink uppercase mt-0.5 animate-pulse font-pop font-bold">Low</p>}
                      </span>

                      <button 
                        onClick={() => adjustStock(p.id, 1)}
                        className="w-8 h-8 rounded-lg border border-lpink/30 flex items-center justify-center text-bsblack/60 hover:border-dpink hover:text-dpink active:scale-90 transition-all bg-white shadow-xs"
                      >
                        <FiPlus size={12} />
                      </button>
                    </div>
                  </td>

                  {/* Actions Column */}
                  <td className="p-6 text-right">
                    <button className="p-2.5 text-bsblack/40 hover:text-dpink bg-lpink/10 hover:bg-dpink/10 rounded-xl transition-all">
                      <FiEdit3 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
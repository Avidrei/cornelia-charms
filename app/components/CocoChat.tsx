'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend, FiMessageCircle } from 'react-icons/fi';

interface Message { text: string; sender: 'user' | 'coco' }

export default function CocoChat({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([{ text: "Hi! I'm Coco! How can I help you with your charms today?", sender: 'coco' }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    
    // --- BACKEND HOOK ---
    // This is where you will eventually fetch from your AI API
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "I'm still learning! Hook me up to an API and I'll be able to answer everything.", sender: 'coco' }]);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-6 right-6 w-80 sm:w-96 h-[30rem] bg-white border border-dcrm shadow-2xl rounded-3xl z-[999] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-bsblack p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2 font-fred uppercase text-sm"><FiMessageCircle /> Coco Chat</div>
            <button onClick={onClose}><FiX /></button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#FFFDFB]">
            {messages.map((m, i) => (
              <div key={i} className={`text-xs p-3 rounded-2xl max-w-[80%] ${m.sender === 'user' ? 'bg-dpink text-white ml-auto' : 'bg-crm text-bsblack'}`}>
                {m.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-dcrm flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 text-xs border border-dcrm rounded-xl px-4 py-2 outline-none focus:border-dpink"
              placeholder="Ask me something..."
            />
            <button onClick={handleSend} className="bg-bsblack text-white p-2 rounded-xl"><FiSend size={16} /></button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
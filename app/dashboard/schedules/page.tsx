'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiPlus, FiTrash2, FiRadio } from 'react-icons/fi';

interface StreamSchedule {
  id: string;
  title: string;
  date: string;
  time: string;
  isLive: boolean;
}

export default function SchedulesPage() {
  const [schedules, setSchedules] = useState<StreamSchedule[]>([
    { id: '1', title: 'Friday Mining Madness ✨', date: '2026-06-12', time: '18:00', isLive: false },
    { id: '2', title: 'Mid-Week Premium Charms Drop 💖', date: '2026-06-17', time: '19:30', isLive: false },
  ]);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleAddSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date || !time) return;

    const newSchedule: StreamSchedule = {
      id: Date.now().toString(),
      title,
      date,
      time,
      isLive: false,
    };

    setSchedules([...schedules, newSchedule]);
    setTitle('');
    setDate('');
    setTime('');
  };

  const handleDelete = (id: string) => {
    setSchedules(schedules.filter(item => item.id !== id));
  };

  const toggleLiveStatus = (id: string) => {
    setSchedules(schedules.map(item => 
      item.id === id ? { ...item, isLive: !item.isLive } : { ...item, isLive: false }
    ));
  };

  return (
    <div className="space-y-10 font-pop">
      <div>
        <h1 className="text-3xl font-black font-fred uppercase tracking-wide">Live Stream Scheduler</h1>
        <p className="text-xs font-medium text-bsblack/50 mt-1">Manage your TikTok broadcast windows and alert countdown triggers.</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Creation Form */}
        <form onSubmit={handleAddSchedule} className="lg:col-span-5 bg-bswhite border border-lpink/30 p-8 rounded-[2.5rem] shadow-sm space-y-5">
          <h2 className="text-sm font-black font-fred uppercase text-bsblack tracking-wider flex items-center gap-2">
            <FiPlus className="text-dpink" /> Create New Broadcast
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-bsblack/60 ml-1">Session Title</label>
              <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Weekend Anik-Anik Haul!"
                className="w-full bg-white border border-lpink/20 rounded-2xl px-4 py-3 mt-1 text-xs outline-none focus:border-dpink transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-bsblack/60 ml-1">Target Date</label>
                <input 
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-lpink/20 rounded-2xl px-4 py-3 mt-1 text-xs outline-none focus:border-dpink transition-all text-bsblack/70"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-bsblack/60 ml-1">Start Time</label>
                <input 
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-white border border-lpink/20 rounded-2xl px-4 py-3 mt-1 text-xs outline-none focus:border-dpink transition-all text-bsblack/70"
                />
              </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-bsblack text-bswhite py-3.5 rounded-2xl font-bold font-fred uppercase text-xs hover:bg-dpink transition-all shadow-md">
            Publish Schedule
          </button>
        </form>

        {/* Right Side: Listed Schedules */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-bsblack/40 ml-1">Active Timelines ({schedules.length})</h2>
          
          {schedules.map((sched) => (
            <motion.div 
              key={sched.id}
              layout
              className={`p-6 border rounded-[2rem] bg-white shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                sched.isLive ? 'border-dpink ring-2 ring-dpink/20' : 'border-lpink/20'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-black font-fred uppercase text-bsblack">{sched.title}</h3>
                  {sched.isLive && (
                    <span className="bg-dpink text-bswhite text-[9px] font-bold uppercase px-2 py-0.5 rounded-full flex items-center gap-1 animate-pulse font-fred tracking-wider">
                      <FiRadio size={10} /> Live Now
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 text-xs font-medium text-bsblack/50">
                  <span className="flex items-center gap-1"><FiCalendar className="text-lpink" /> {sched.date}</span>
                  <span className="flex items-center gap-1"><FiClock className="text-lpink" /> {sched.time}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button 
                  onClick={() => toggleLiveStatus(sched.id)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase font-fred tracking-wider border transition-all ${
                    sched.isLive 
                      ? 'bg-dpink text-bswhite border-dpink' 
                      : 'bg-white text-bsblack/60 border-lpink/30 hover:border-dpink hover:text-dpink'
                  }`}
                >
                  {sched.isLive ? 'Turn Off Alert' : 'Trigger Live Counter'}
                </button>
                <button 
                  onClick={() => handleDelete(sched.id)}
                  className="p-3 bg-lpink/10 hover:bg-dpink/10 text-dpink rounded-xl transition-colors"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
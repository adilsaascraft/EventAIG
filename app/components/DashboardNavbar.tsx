'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Eye, Edit, HelpCircle } from 'lucide-react';

type EventType = {
  title: string;
  status: string;
  dates: string;
};

// 🔵 Utility function for status badge class
const getStatusClass = (status: string) => {
  switch (status.toLowerCase()) {
    case 'draft':
      return 'bg-gray-100 text-gray-400';
    case 'running':
      return 'bg-green-100 text-green-700';
    case 'past':
      return 'bg-blue-100 text-blue-700';
    case 'cancelled':
      return 'bg-yellow-100 text-yellow-700';
    case 'trash':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-500';
  }
};

export default function DashboardNavbar() {
  const [event, setEvent] = useState<EventType | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('selectedEvent');
    if (stored) {
      try {
        setEvent(JSON.parse(stored));
      } catch (e) {
        console.error('Error parsing event data', e);
      }
    }
  }, []);

  return (
    <header className="text-white bg-gradient-to-r from-[#0A0E80] via-[#0E3C96] to-[#0a3b85] shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between h-[70px] px-6">
        {/* Left: Logo + Event Details */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center pr-6">
            <Link href="/home">
              <Image
                src="https://res.cloudinary.com/dr5kn8993/image/upload/v1751885240/AIG_Event_Software/logo/aig-logo_lfgjea.png"
                alt="AIG Hospitals Logo"
                width={100}
                height={50}
                className="cursor-pointer"
              />
            </Link>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-medium">{event?.title || 'Event Title'}</h2>
              <span className={`text-xs px-2 py-1 rounded-full font-semibold ${getStatusClass(event?.status || '')}`}>
                {event?.status?.toUpperCase() || 'DRAFT'}
              </span>
            </div>
            <p className="text-sm text-white">{event?.dates || 'Date not available'}</p>
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center gap-2 text-white hover:underline text-sm">
            <Edit size={16} />
            Edit Website
          </button>
          <button className="flex items-center gap-2 text-white hover:underline text-sm">
            <Eye size={16} />
            Preview
          </button>
          <button className="text-white">
            <HelpCircle size={20} />
          </button>
          <button className="bg-white text-blue-800 text-sm px-4 py-1 rounded-md font-semibold">
            Publish
          </button>
          <Image
            src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750585099/AIG_Event_Software/icons/profile_zog8po.png"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

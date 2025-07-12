'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Link as LinkIcon, User, Users, CircleDot } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { FaChevronDown } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

type EventType = {
  id: number;
  image: string;
  title: string;
  status: string;
  dates: string;
  eventType: string;
  location: string;
  registrationLink: string;
  organizersCount: number;
  attendeesCount: number;
  lastModifiedBy: {
    avatar: string;
    timeAgo: string;
  };
};

type EventCardProps = {
  event: EventType;
};

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

export default function EventCard({ event }: EventCardProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleManage = () => {
    localStorage.setItem('selectedEvent', JSON.stringify(event)); // ✅ localStorage used
    router.push('/home/dashboard/summary');
  };

  const handleAction = (type: string) => {
    setShowDropdown(false);
    toast.success(`${type} clicked`);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col md:flex-row items-start md:items-center gap-4 relative">
      <Toaster position="top-right" />

      {/* Event Image */}
      <div className="min-w-[120px] h-[160px] relative">
        <Image
          src={event.image}
          alt={event.title}
          width={120}
          height={160}
          className="rounded-md object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <h2 className="text-lg font-bold text-blue-800">{event.title}</h2>
          <span className={`text-xs font-semibold px-2 py-[2px] rounded w-fit ${getStatusClass(event.status)}`}>
            {event.status}
          </span>
        </div>

        <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-800">
          <div className="flex items-center gap-2"><Calendar size={16} />{event.dates}</div>
          <div className="flex items-center gap-2"><MapPin size={16} />{event.location}</div>
        </div>

        <div className="mt-2 flex gap-6 text-sm text-gray-800">
          <div className="flex items-center gap-2"><CircleDot size={16} />{event.eventType}</div>
        </div>

        <div className="mt-2 flex gap-6 text-sm text-gray-800">
          <div className="flex items-center gap-2"><User size={16} />{event.organizersCount} Organizer</div>
          <div className="flex items-center gap-2"><Users size={16} />{event.attendeesCount} Attendees</div>
        </div>

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
          <Image
            src={event.lastModifiedBy.avatar}
            alt="Avatar"
            width={20}
            height={20}
            className="rounded-full"
          />
          <span>Last modified {event.lastModifiedBy.timeAgo}</span>
        </div>
      </div>

      {/* Manage & Dropdown */}
      <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
        <div className="relative" ref={dropdownRef}>
          <div className="flex items-center border border-gray-200 rounded-md overflow-hidden divide-x bg-white">
            <button onClick={handleManage} className="px-3 py-1 text-black text-sm hover:bg-gray-100">Manage</button>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="px-3 py-1 text-gray-400 hover:bg-gray-100 w-full flex items-center justify-center"
            >
              <FaChevronDown size={14} />
            </button>
          </div>

          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md w-32 z-20">
              <button onClick={() => handleAction('Edit')} className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left">Edit</button>
              <button onClick={() => handleAction('Delete')} className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left">Delete</button>
            </div>
          )}
        </div>

        {/* Registration Link */}
        <a
          href={event.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#1F5C9E] text-sm hover:underline"
        >
          <LinkIcon size={14} />
          Registration Link
        </a>
      </div>
    </div>
  );
}

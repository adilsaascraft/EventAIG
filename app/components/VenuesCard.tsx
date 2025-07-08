'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MapPin, Link as LinkIcon } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { FaChevronDown } from 'react-icons/fa';

// Define the Venue type
type Venue = {
  id: number;
  image: string;
  title: string;
  status: string;
  location: string;
  registrationLink: string;
  lastModifiedBy: {
    avatar: string;
    timeAgo: string;
  };
};

// Props for the VenueCard component
type VenueCardProps = {
  venue: Venue;
};

export default function VenueCard({ venue }: VenueCardProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAction = (type: string) => {
    setShowDropdown(false);
    toast.success(`${type} clicked`);
  };

  const handleManage = () => {
    toast.success('Manage/Edit modal triggered');
  };

  return (
    <div className="bg-[#FDFBFB] rounded-xl border border-gray-200 p-4 flex flex-col md:flex-row items-start md:items-center gap-4 relative">
      <Toaster position="top-right" />

      {/* Venue Image */}
      <div className="min-w-[120px] h-[160px] relative">
        <Image
          src={venue.image}
          alt={venue.title}
          width={120}
          height={160}
          className="rounded-md object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 w-full">
        <h2 className="text-xl font-bold text-blue-800">{venue.title}</h2>

        <div className="mt-1">
          <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">
            {venue.status}
          </span>
        </div>

        <div className="mt-3 flex flex-col gap-2 text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{venue.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={venue.lastModifiedBy.avatar}
              alt="Avatar"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="text-gray-600 text-sm">
              Last modified {venue.lastModifiedBy.timeAgo}
            </span>
          </div>
        </div>
      </div>

      {/* Manage + Dropdown */}
      <div className="flex flex-col items-end gap-2 absolute top-[30px] right-[30px] z-10">
        <div className="relative" ref={dropdownRef}>
          <div className="flex items-center border border-gray-200 rounded-md overflow-hidden divide-x bg-white hover:bg-gray-100">
            <button
              onClick={handleManage}
              className="px-3 py-1 text-black border-gray-300 bg-white hover:bg-gray-100 text-sm"
            >
              Manage
            </button>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="px-2 hover:bg-gray-100 text-gray-300"
            >
              <FaChevronDown size={14} />
            </button>
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md w-32 z-20">
              <button
                onClick={() => handleAction('Edit')}
                className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
              >
                Edit
              </button>
              <button
                onClick={() => handleAction('Delete')}
                className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
              >
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Registration Link */}
        <a
          href={venue.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#1F5C9E] mr-5 text-sm hover:underline"
        >
          <LinkIcon size={14} />
          Venue Website
        </a>
      </div>
    </div>
  );
}

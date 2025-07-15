'use client';
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa';

import ScheduledEmailCard from '@/app/components/ScheduledEmailCard';
import { Button } from '@/components/ui/button';
import { mockEmails } from '@/app/data/mockEmail';


export default function EmailSchedulePage() {
  const tabs = ['Scheduled', 'Drafts', 'Sent']
  const [search, setSearch] = useState('')
const [activeTab, setActiveTab] = useState('Scheduled')
  const handleToggle = (id: string, status: boolean) => {
    console.log(`Toggled ${id} to ${status}`);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">Scheduled Email</h3>
        </div>
        {/* Tabs */}
      <div className="flex gap-6 mb-4 text-sm text-gray-600 border-b border-gray-200">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab)
            }}
            className={`pb-2 border-b-2 transition-colors duration-200 cursor-pointer ${
              tab === activeTab
                ? 'border-[#035D8A] text-[#035D8A] font-semibold'
                : 'border-transparent hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Search input */}
  <div className="flex items-center justify-between mb-4">
            {/* Search Input with Icon */}
            <div className="relative w-[300px]">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <Button className="bg-sky-800 hover:bg-sky-900 text-white rounded ml-2 flex items-center gap-2">
             Create New Email
            </Button>
          </div>

      {mockEmails.map((email) => (
        <ScheduledEmailCard
          key={email.id}
          email={email}
          onToggle={handleToggle}
          onView={(id) => console.log('View:', id)}
          onMore={(id) => console.log('More:', id)}
        />
      ))}
    </div>
  );
}

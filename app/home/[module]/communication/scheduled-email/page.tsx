'use client';
import { useState } from 'react'
import ScheduledEmailCard from '@/app/components/ScheduledEmailCard';
import { Button } from '@/components/ui/button';

export type EmailLabel = 'Before Event' | 'During Event' | 'After Event';
export type EmailLabelColor = 'orange' | 'blue' | 'red';

export interface Email {
  id: string;
  label: EmailLabel;
  labelColor: EmailLabelColor;
  title: string;
  scheduleDate: string;
  to: string;
  emailType: string;
  isActive: boolean;
}

export const mockEmails: Email[] = [
  {
    id: '1',
    label: 'Before Event',
    labelColor: 'orange',
    title: 'Event Promotion',
    scheduleDate: 'July 4, 2025 | 6:00 PM (IST)',
    to: 'All Purchasers',
    emailType: 'Marketing Email',
    isActive: true,
  },
  {
    id: '2',
    label: 'During Event',
    labelColor: 'blue',
    title: 'Scheduled Event Mail',
    scheduleDate: 'July 20, 2025 | 6:00 PM (IST)',
    to: 'All Attendees',
    emailType: 'Event Updates',
    isActive: true,
  },
  {
    id: '3',
    label: 'After Event',
    labelColor: 'red',
    title: 'Scheduled Event Mail',
    scheduleDate: 'July 22, 2025 | 6:00 PM (IST)',
    to: 'All Purchasers',
    emailType: 'Event Updates',
    isActive: false,
  },
];

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
  <input
    type="text"
    placeholder="Search email..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="max-w-full w-[300px] px-4 py-2 border border-gray-300 rounded shadow-sm"
  />
  <Button className="ml-4 bg-sky-800 hover:bg-sky-900">Create New Email</Button>
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

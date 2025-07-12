'use client';

import GroupedEmailCardSection from '@/app/components/GroupedEmailCardSection';
import { Button } from '@/components/ui/button';
import { useState } from 'react'
import { FaFilter, FaSearch} from 'react-icons/fa';

const groupedData = [
  {
    groupTitle: 'Prospects',
    items: [
      {
        id: 'prospects-1',
        title: 'Invite prospect to your event',
        description:
          'Send an email when you add prospects to invite them to the event and inform them about email notifications. Provide an option to unsubscribe.',
        to: 'Prospects',
        isActive: true,
      },
    ],
  },
  {
    groupTitle: 'Guest Invite',
    items: [
      {
        id: 'guest-1',
        title: 'Invite guest using promo code',
        description:
          'Send an email to a guest when inviting them to register for your event using a promo code',
        to: 'Guest',
        isActive: true,
      },
    ],
  },
  {
    groupTitle: 'Registration',
    items: [
      {
        id: 'registration-1',
        title: 'Send Registration Details',
        description:
          'Send an email when there is a registration for your event',
        to: 'Attendees',
        isActive: true,
      },
    ],
  },
];

export default function EmailGroupPage() {
  const tabs = ['Registration', 'Faculty', 'Sponsors', 'Exhibitors', 'Engagement', 'Rehearsal', 'Event Cancellation']
    const [search, setSearch] = useState('')
    const [activeTab, setActiveTab] = useState('Registration')
  return (
    <div className='p-4'>
          <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">Automated Email</h3>
        </div>
        {/* Tabs */}
      <div className="flex gap-6 mb-4 text-l text-gray-600 border-b border-gray-200">
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

          {/* Filter Button */}
          <Button className="border border-sky-800 bg-white hover:bg-gray-100 text-sky-800 rounded ml-2 flex items-center gap-2">
            <FaFilter /> Filter
          </Button>
        </div>

      <GroupedEmailCardSection
        data={groupedData}
        onView={(id) => console.log('View:', id)}
        onEdit={(id) => console.log('Edit:', id)}
      />
    </div>
  );
}

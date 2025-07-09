'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Home,
  Users,
  BookOpen,
  Calendar,
  Globe,
  MapPin,
  Mail,
  Building,
  DollarSign,
  Camera,
  Smartphone,
  FileText,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sideTabs = [
  { name: 'Dashboard', icon: Home, baseUrl: '/home/dashboard', subtabs: [] },
  {
    name: 'Registrations',
    icon: Users,
    baseUrl: '/home/registrations',
    subtabs: ['Summary', 'Registered Attendees', 'Signup Attendees', 'Slab Categories', 'Registration Form', 'Discount Codes', 'Cancellation Policy', 'Registration Settings'],
  },
  { name: 'Abstract', icon: BookOpen, baseUrl: '/home/abstract', subtabs: ['Summary','All Abstarcts','Abstract Categories','Abstract Types','Reviewers','Abstract Settings'] },
  { name: 'Faculty', icon: Calendar, baseUrl: '/home/faculty', subtabs: ['Summary', 'All Faculty','Convert To Faculty','Faculty Categories','Faculty Allocation','Faculty Settings'] },
  { name: 'Agenda', icon: Calendar, baseUrl: '/home/agenda', subtabs: ['Summary', 'Sessions','Session Types','Session Halls'] },
  { name: 'Exhibitors', icon: Building, baseUrl: '/home/exhibitors', subtabs: ['Summary', 'All Exhibitors','Floor Plan','Booths','Exhibitor Category','Exhibitor Settings'] },
  { name: 'Sponsors', icon: DollarSign, baseUrl: '/home/sponsors', subtabs: ['Summary', 'All Sponsors','Registration Quota','Accommodation Quota','Travel Quota','Floor Plan','Booths','Sponsor Category','Sponsor Settings'] },
  { name: 'Travel', icon: Globe, baseUrl: '/home/travel', subtabs: ['Summary', 'All Travels','Travel Desk Team','Reports','Travel Settings'] },
  { name: 'Accomodation', icon: MapPin, baseUrl: '/home/accomodation', subtabs: ['Summary', 'All Accomodation'] },
  { name: 'Marketing', icon: Mail, baseUrl: '/home/marketing', subtabs: ['Summary', 'Email Campaign','SMS Campaign','WhatsApp Campaign','Reports','Marketing Settings'] },
  { name: 'Communication', icon: Mail, baseUrl: '/home/communication', subtabs: ['Summary', 'Automated Emails','Scheduled Email','Email Records','Reports','Communication Settings'] },
  { name: 'Accounting', icon: DollarSign, baseUrl: '/home/accounting', subtabs: ['', ''] },
  { name: 'Badging & Scanning', icon: Camera, baseUrl: '/home/badging', subtabs: ['', ''] },
  { name: 'Event App', icon: Smartphone, baseUrl: '/home/event-app', subtabs: ['', ''] },
  { name: 'Presentation', icon: FileText, baseUrl: '/home/presentation', subtabs: ['', ''] },
];

export default function Sidebar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [activeSubtab, setActiveSubtab] = useState('');

  const handleTabClick = (tab: typeof sideTabs[0]) => {
    setActiveTab(tab.name);

    if (tab.subtabs.length > 0) {
      const firstSub = tab.subtabs[0];
      setActiveSubtab(firstSub);
      router.push(`${tab.baseUrl}/${firstSub.toLowerCase().replace(/\s+/g, '-')}`);
    } else {
      setActiveSubtab('');
      router.push(tab.baseUrl);
    }
  };

  const handleSubtabClick = (subtab: string) => {
    const currentTab = sideTabs.find((t) => t.name === activeTab);
    setActiveSubtab(subtab);
    if (currentTab) {
      router.push(`${currentTab.baseUrl}/${subtab.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Main Sidebar */}
      <div className="w-[100px] transition-all duration-300 border-r border-gray-300 bg-blue-100 ">
        <div className="flex flex-col items-center py-4 space-y-3">
          {sideTabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabClick(tab)}
              className={cn(
                'w-full py-2 px-1 flex flex-col items-center text-xs hover:bg-gray-300 transition-all duration-200 cursor-pointer',
                activeTab === tab.name ? 'bg-white text-blue-600 font-semibold' : 'text-gray-700'
              )}
            >
              <tab.icon className="h-5 w-5 mb-1" />
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Subtab Sidebar */}
      {sideTabs.find((tab) => tab.name === activeTab && tab.subtabs.length > 0) && (
        <div className="w-[200px] p-4 bg-blue-100 border-r border-gray-300 overflow-y-auto">
          <h2 className="text-sm font-semibold text-blue-900 mb-2">{activeTab}</h2>
          <ul className="space-y-1">
            {sideTabs
              .find((tab) => tab.name === activeTab)
              ?.subtabs.map((subtab) => (
                <li key={subtab}>
                  <button
                    onClick={() => handleSubtabClick(subtab)}
                    className={cn(
                      'block w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-300 transition-all duration-200 cursor-pointer',
                      activeSubtab === subtab
                        ? 'bg-white font-medium text-blue-900'
                        : 'text-gray-800'
                    )}
                  >
                    {subtab}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Your dynamic content */}
      </div>
    </div>
  );
}

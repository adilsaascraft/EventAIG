'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { JSX } from 'react';
import {
  Home,
  Users,
  BookOpen,
  LucideIcon,
} from 'lucide-react';

interface SideTab {
  name: string;
  icon: LucideIcon;
  baseUrl: string;
  subtabs: string[];
}

const sideTabs: SideTab[] = [
  { name: 'Dashboard', icon: Home, baseUrl: 'dashboard', subtabs: [] },
  {
    name: 'Registrations',
    icon: Users,
    baseUrl: 'registrations',
    subtabs: ['Summary', 'Registration Settings'],
  },
  {
    name: 'Abstract',
    icon: BookOpen,
    baseUrl: 'abstract',
    subtabs: ['Summary', 'Categories'],
  },
  // Add more as needed
];

export default function Sidebar(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>('Dashboard');
  const [activeSubtab, setActiveSubtab] = useState<string>('');

  useEffect(() => {
    const pathParts = pathname.split('/');
    const currentModule = pathParts[2];
    const currentSubtab = pathParts[3];

    const currentTab = sideTabs.find((tab) => tab.baseUrl === currentModule);
    if (currentTab) {
      setActiveTab(currentTab.name);
      setActiveSubtab(currentSubtab);
    } else {
      setActiveTab('Dashboard');
      setActiveSubtab('');
    }
  }, [pathname]);

  const handleTabClick = (tab: SideTab) => {
    setActiveTab(tab.name);
    const firstSub = tab.subtabs[0];

    if (firstSub) {
      const firstSlug = firstSub.toLowerCase().replace(/\s+/g, '-');
      router.push(`/home/${tab.baseUrl}/${firstSlug}`);
    } else {
      router.push(`/home/${tab.baseUrl}`);
    }
  };

  const handleSubtabClick = (subtab: string) => {
    setActiveSubtab(subtab);
    const currentTab = sideTabs.find((tab) => tab.name === activeTab);
    if (currentTab) {
      const subSlug = subtab.toLowerCase().replace(/\s+/g, '-');
      router.push(`/home/${currentTab.baseUrl}/${subSlug}`);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-[100px] bg-blue-100 border-r border-gray-300">
        <div className="flex flex-col items-center py-4 space-y-3">
          {sideTabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabClick(tab)}
              className={cn(
                'w-full py-2 px-1 flex flex-col items-center text-xs hover:bg-gray-300',
                activeTab === tab.name ? 'bg-white text-blue-600 font-semibold' : 'text-gray-700'
              )}
            >
              <tab.icon className="h-5 w-5 mb-1" />
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sub-tabs */}
      {(sideTabs.find((tab) => tab.name === activeTab)?.subtabs?.length ?? 0) > 0 && (
        <div className="w-[200px] bg-[#e9f0fa] border-r border-gray-300 p-4">
          <h2 className="text-sm font-semibold text-blue-900 mb-2">{activeTab}</h2>
          <ul className="space-y-1">
            {sideTabs
              .find((tab) => tab.name === activeTab)
              ?.subtabs.map((subtab) => (
                <li key={subtab}>
                  <button
                    onClick={() => handleSubtabClick(subtab)}
                    className={cn(
                      'block w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-300',
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
    </div>
  );
}

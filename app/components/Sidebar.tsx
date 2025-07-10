"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { JSX } from 'react';
import {
  Home,
  Users,
  BookOpen,
  LucideIcon,
  ChevronLeft,
  ChevronRight,
  FileText,
  Settings,
} from 'lucide-react';

interface SideTab {
  name: string;
  icon: LucideIcon;
  baseUrl: string;
  subtabs: { name: string; icon: LucideIcon }[];
}

const sideTabs: SideTab[] = [
  { name: 'Dashboard', icon: Home, baseUrl: 'dashboard', subtabs: [] },
  {
    name: 'Registrations',
    icon: Users,
    baseUrl: 'registrations',
    subtabs: [
      { name: 'Summary', icon: FileText },
      { name: 'Registered Attendees', icon: Users },
      { name: 'Signup-Attendees', icon: Users },
      { name: 'Slab Categories', icon: FileText },
      { name: 'Registration Form', icon: FileText },
      { name: 'Discount Codes', icon: FileText },
      { name: 'Cancellation Policy', icon: FileText },
      { name: 'Registration Settings', icon: Settings },
    ],
  },
  {
    name: 'Abstract',
    icon: BookOpen,
    baseUrl: 'abstract',
    subtabs: [
      { name: 'Summary', icon: FileText },
      { name: 'Categories', icon: FileText },
    ],
  },
];

export default function Sidebar(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>('Dashboard');
  const [activeSubtab, setActiveSubtab] = useState<string>('');
  const [isSubtabCollapsed, setIsSubtabCollapsed] = useState<boolean>(false);

  useEffect(() => {
    const storedTab = localStorage.getItem('activeTab');
    const storedSubtab = localStorage.getItem('activeSubtab');
    const pathParts = pathname.split('/');
    const currentModule = pathParts[2];
    const currentSubtab = pathParts[3]?.replace(/-/g, ' ');

    const currentTab = sideTabs.find((tab) => tab.baseUrl === currentModule);
    if (currentTab) {
      setActiveTab(currentTab.name);
      if (currentSubtab) {
        setActiveSubtab(currentSubtab);
        localStorage.setItem('activeSubtab', currentSubtab);
        localStorage.setItem('activeTab', currentTab.name);
      } else {
        const firstSub = currentTab.subtabs[0]?.name;
        if (firstSub) {
          const slug = firstSub.toLowerCase().replace(/\s+/g, '-');
          setActiveSubtab(firstSub);
          localStorage.setItem('activeSubtab', firstSub);
          localStorage.setItem('activeTab', currentTab.name);
          router.replace(`/home/${currentTab.baseUrl}/${slug}`);
        }
      }
    } else if (storedTab && storedSubtab) {
      setActiveTab(storedTab);
      setActiveSubtab(storedSubtab);
    }
  }, [pathname, router]);

  const handleTabClick = (tab: SideTab) => {
    setActiveTab(tab.name);
    const firstSub = tab.subtabs[0]?.name;
    if (firstSub) {
      setActiveSubtab(firstSub);
      const slug = firstSub.toLowerCase().replace(/\s+/g, '-');
      router.push(`/home/${tab.baseUrl}/${slug}`);
      localStorage.setItem('activeTab', tab.name);
      localStorage.setItem('activeSubtab', firstSub);
    } else {
      router.push(`/home/${tab.baseUrl}`);
      localStorage.setItem('activeTab', tab.name);
      localStorage.removeItem('activeSubtab');
    }
  };

  const handleSubtabClick = (subtab: string) => {
    setActiveSubtab(subtab);
    const currentTab = sideTabs.find((tab) => tab.name === activeTab);
    if (currentTab) {
      const slug = subtab.toLowerCase().replace(/\s+/g, '-');
      router.push(`/home/${currentTab.baseUrl}/${slug}`);
      localStorage.setItem('activeSubtab', subtab);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Main Sidebar */}
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
              title={tab.name}
            >
              <tab.icon className="h-5 w-5 mb-1" />
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Subtab Sidebar */}
      {(sideTabs.find((tab) => tab.name === activeTab)?.subtabs.length ?? 0) > 0 && (
        <div
          className={cn(
            'relative transition-all duration-300 bg-blue-100 border-r border-gray-300',
            isSubtabCollapsed ? 'w-[0px]' : 'w-[220px] p-4'
          )}
        >
          <button
            onClick={() => setIsSubtabCollapsed(!isSubtabCollapsed)}
            className="absolute -right-3 top-3 z-10 p-1 bg-gray-100 border rounded-full shadow"
            title={isSubtabCollapsed ? 'Expand' : 'Collapse'}
          >
            {isSubtabCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>

          {!isSubtabCollapsed && (
            <>
              <h2 className="text-sm font-semibold text-blue-900 mb-2">{activeTab}</h2>
              <ul className="space-y-1">
                {sideTabs.find((tab) => tab.name === activeTab)?.subtabs.map((subtab) => (
                  <li key={subtab.name}>
                    <button
                      onClick={() => handleSubtabClick(subtab.name)}
                      className={cn(
                        'flex items-center gap-2 w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-300',
                        activeSubtab === subtab.name ? 'bg-white font-medium text-blue-900' : 'text-gray-800'
                      )}
                      title={subtab.name}
                    >
                      <subtab.icon className="h-4 w-4" />
                      {subtab.name}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

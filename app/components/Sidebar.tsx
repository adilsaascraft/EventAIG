'use client';

import { useEffect, useState } from 'react';
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
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sideTabs = [
  { name: 'Dashboard', icon: Home, baseUrl: '/home/dashboard', subtabs: [] },
  { name: 'Registrations', icon: Users, baseUrl: '/home/registrations', subtabs: ['Summary', 'Registered Attendees', 'Signup Attendees'] },
  { name: 'Abstract', icon: BookOpen, baseUrl: '/home/abstract', subtabs: ['Submission', 'Review'] },
  { name: 'Faculty', icon: Calendar, baseUrl: '/home/faculty', subtabs: ['Speakers', 'Moderators'] },
  { name: 'Agenda', icon: Calendar, baseUrl: '/home/agenda', subtabs: ['Sessions', 'Tracks'] },
  { name: 'Exhibitors', icon: Building, baseUrl: '/home/exhibitors', subtabs: ['Booth Setup', 'Leads'] },
  { name: 'Sponsors', icon: DollarSign, baseUrl: '/home/sponsors', subtabs: ['Tiers', 'Benefits'] },
  { name: 'Travel', icon: Globe, baseUrl: '/home/travel', subtabs: ['Transport', 'Routes'] },
  { name: 'Accomodation', icon: MapPin, baseUrl: '/home/accomodation', subtabs: ['Hotels', 'Rooms'] },
  { name: 'Marketing', icon: Mail, baseUrl: '/home/marketing', subtabs: ['Campaigns', 'Analytics'] },
  { name: 'Communication', icon: Mail, baseUrl: '/home/communication', subtabs: ['Emails', 'Notifications'] },
  { name: 'Accounting', icon: DollarSign, baseUrl: '/home/accounting', subtabs: ['Invoices', 'Payments'] },
  { name: 'Badging & Scanning', icon: Camera, baseUrl: '/home/badging', subtabs: ['Badges', 'Scanners'] },
  { name: 'Event App', icon: Smartphone, baseUrl: '/home/event-app', subtabs: ['Setup', 'QR Codes'] },
  { name: 'Presentation', icon: FileText, baseUrl: '/home/presentation', subtabs: ['Upload', 'Schedule'] },
];

export default function Sidebar() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState('Dashboard');
  const [activeSubtab, setActiveSubtab] = useState('');
  const [collapsed, setCollapsed] = useState(false);
  const [subtabCollapsed, setSubtabCollapsed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('sidebar-collapsed');
    const storedSubtab = localStorage.getItem('subtab-collapsed');
    if (stored) setCollapsed(stored === 'true');
    if (storedSubtab) setSubtabCollapsed(storedSubtab === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebar-collapsed', collapsed.toString());
    localStorage.setItem('subtab-collapsed', subtabCollapsed.toString());
  }, [collapsed, subtabCollapsed]);

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
    const currentTab = sideTabs.find(t => t.name === activeTab);
    setActiveSubtab(subtab);
    if (currentTab) {
      router.push(`${currentTab.baseUrl}/${subtab.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Main Sidebar */}
      <div className={cn(
        "transition-all duration-300 border-r border-gray-300 bg-blue-100",
        collapsed ? "w-[60px]" : "w-[100px]"
      )}>
        <div className="relative flex flex-col items-center py-4 space-y-3">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="absolute -right-3 top-3 z-10 p-1 rounded-full"
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
          {sideTabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabClick(tab)}
              className={cn(
                "w-full py-2 px-1 flex flex-col items-center text-xs hover:bg-gray-300 transition-all duration-200",
                activeTab === tab.name ? "bg-white text-blue-600 font-semibold" : "text-gray-700"
              )}
            >
              <tab.icon className="h-5 w-5 mb-1" />
              {!collapsed && tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Subtab Sidebar */}
      {sideTabs.find(tab => tab.name === activeTab && tab.subtabs.length > 0) && (
        <div className={cn(
          "relative transition-all duration-300 border-r border-gray-300 bg-[#e9f0fa] overflow-y-auto",
          subtabCollapsed ? "w-[30px]" : "w-[150px] p-4"
        )}>
          <button
            onClick={() => setSubtabCollapsed(!subtabCollapsed)}
            className="absolute -right-3 top-3 z-10 p-1 rounded-full"
          >
            {subtabCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>

          {!subtabCollapsed && (
            <>
              <h2 className="text-sm font-semibold text-blue-900 mb-2">{activeTab}</h2>
              <ul className="space-y-1">
                {sideTabs.find(tab => tab.name === activeTab)?.subtabs.map((subtab) => (
                  <li key={subtab}>
                    <button
                      onClick={() => handleSubtabClick(subtab)}
                      className={cn(
                        "block w-full text-left px-3 py-2 rounded text-sm hover:bg-blue-100",
                        activeSubtab === subtab ? "bg-white font-medium text-blue-900" : "text-gray-800"
                      )}
                    >
                      {subtab}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 p-4">
        {/* Your dynamic page content goes here */}
      </div>
    </div>
  );
}




//old code 

// 'use client';

// import { useState } from 'react';
// import {
//   Home,
//   Users,
//   BookOpen,
//   Calendar,
//   Globe,
//   MapPin,
//   Mail,
//   Building,
//   DollarSign,
//   Camera,
//   Smartphone,
//   FileText,
//   ChevronLeft,
//   ChevronRight,
// } from 'lucide-react';
// import { cn } from '@/lib/utils';

// const sideTabs = [
//   { name: 'Dashboard', icon: Home, subtabs: [] },
//   {
//     name: 'Registrations',
//     icon: Users,
//     subtabs: ['Summary', 'Registered Attendees', 'Signup Attendees'],
//   },
//   { name: 'Abstract', icon: BookOpen, subtabs: ['Submit', 'Review'] },
//   { name: 'Faculty', icon: Calendar, subtabs: ['Speakers', 'Moderators'] },
// ];

// export default function Sidebar() {
//   const [activeTab, setActiveTab] = useState('Dashboard');
//   const [activeSubtab, setActiveSubtab] = useState('');
//   const [mainCollapsed, setMainCollapsed] = useState(false);
//   const [subCollapsed, setSubCollapsed] = useState(false);

//   const handleTabClick = (tab: (typeof sideTabs)[number]) => {
//     setActiveTab(tab.name);
//     if (tab.subtabs.length > 0) {
//       setActiveSubtab(tab.subtabs[0]);
//       setSubCollapsed(false);
//     } else {
//       setActiveSubtab('');
//       setSubCollapsed(true);
//     }
//   };

//   const currentTab = sideTabs.find((tab) => tab.name === activeTab);

//   return (
//     <div className="flex min-h-screen">
//       {/* Main Sidebar */}
//       <div
//         className={cn(
//           'transition-all duration-300 bg-blue-100 border-r border-gray-300 flex flex-col relative',
//           mainCollapsed ? 'w-[60px]' : 'w-[100px]'
//         )}
//       >
//         <button
//           onClick={() => setMainCollapsed(!mainCollapsed)}
//           className="absolute -right-3 top-4 p-1 rounded-full shadow z-10"
//         >
//           {mainCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
//         </button>

//         <div className="flex flex-col items-center py-4 space-y-4">
//           {sideTabs.map((tab) => {
//             const isActive = tab.name === activeTab;
//             return (
//               <button
//                 key={tab.name}
//                 onClick={() => handleTabClick(tab)}
//                 className={cn(
//                   'w-full py-2 px-2 flex flex-col items-center text-xs hover:bg-gray-300 transition-all duration-200',
//                   isActive ? 'bg-white text-blue-600 font-semibold' : 'text-gray-700'
//                 )}
//               >
//                 <tab.icon className="h-5 w-5 mb-1" />
//                 {!mainCollapsed && <span>{tab.name}</span>}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* Sub Tab Sidebar (Only visible if not collapsed and subtabs exist) */}
//       {currentTab?.subtabs.length > 0 && !subCollapsed && (
//         <div className="w-[150px] bg-[#e9f0fa] p-4 border-r border-gray-300 overflow-y-auto transition-all duration-300 relative">
//           <button
//             onClick={() => setSubCollapsed(true)}
//             className="absolute -right-3 top-4 p-1 rounded-full shadow z-10"
//           >
//             <ChevronLeft size={16} />
//           </button>

//           <h2 className="text-sm font-semibold text-blue-900 mb-2">{currentTab.name}</h2>
//           <ul className="space-y-1">
//             {currentTab.subtabs.map((subtab) => (
//               <li key={subtab}>
//                 <button
//                   onClick={() => setActiveSubtab(subtab)}
//                   className={cn(
//                     'block w-full text-left px-3 py-2 rounded text-sm hover:bg-blue-100',
//                     activeSubtab === subtab
//                       ? 'bg-white font-medium text-blue-900'
//                       : 'text-gray-800'
//                   )}
//                 >
//                   {subtab}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Main Content Area */}
//       <div className="flex-1 p-4">
//         <div className="text-lg font-semibold">
//           <p>Main Tab: {activeTab}</p>
//           {activeSubtab && <p>Sub Tab: {activeSubtab}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }


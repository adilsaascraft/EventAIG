'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import sideTabs from '@/app/components/SidebarSections';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isSubtabCollapsed, setIsSubtabCollapsed] = useState(false);

  const { activeTab, activeSubtab } = useMemo(() => {
    const pathParts = pathname.split('/'); // ['', 'home', 'registration', 'summary']
    const routeSegment = pathParts[2]; // 'registration'
    const subtabSlug = pathParts[3]; // 'summary'

    const currentTab = sideTabs.find(tab => tab.baseUrl === routeSegment);
    const subtabName = subtabSlug?.replace(/-/g, ' ') ?? '';

    return {
      activeTab: currentTab?.name ?? '',
      activeSubtab: subtabName,
    };
  }, [pathname]);

  const handleTabClick = (tab: typeof sideTabs[number]) => {
    const firstSub = tab.subtabs[0];
    if (firstSub) {
      const slug = firstSub.name.toLowerCase().replace(/\s+/g, '-');
      router.push(`/home/${tab.baseUrl}/${slug}`);
    } else {
      router.push(`/home/${tab.baseUrl}`);
    }
  };

  const handleSubtabClick = (tab: typeof sideTabs[number], subtabName: string) => {
    const slug = subtabName.toLowerCase().replace(/\s+/g, '-');
    router.push(`/home/${tab.baseUrl}/${slug}`);
  };

  return (
    <div className="flex min-h-screen">
      {/* Main Tabs Sidebar */}
      <div className="w-[105px] bg-blue-100 border-r border-gray-300">
        <div className="flex flex-col items-center py-4 space-y-3">
          {sideTabs.map(tab => (
            <button
              key={tab.name}
              onClick={() => handleTabClick(tab)}
              className={cn(
                'w-full py-2 px-1 flex flex-col items-center text-xs hover:bg-gray-300 border-l-[3px]',
                activeTab === tab.name
                  ? 'bg-white text-sky-800 font-semibold border-sky-800'
                  : 'text-black border-transparent'
              )}
              title={tab.name}
            >
              <tab.icon className="h-5 w-5 mb-1" />
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Subtabs Sidebar */}
      {activeTab &&
        (sideTabs.find(tab => tab.name === activeTab)?.subtabs.length ?? 0) > 0 && (
          <div
            className={cn(
              'relative transition-all duration-300 bg-blue-100 border-0 border-gray-100',
              isSubtabCollapsed ? 'w-[0px]' : 'w-[220px] p-3'
            )}
          >
            <button
              onClick={() => setIsSubtabCollapsed(!isSubtabCollapsed)}
              className="absolute -right-3 top-0 p-1 z-10 bg-blue-100 rounded-full"
              title={isSubtabCollapsed ? 'Expand' : 'Collapse'}
            >
              {isSubtabCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>

            {!isSubtabCollapsed && (
              <>
                <h2 className="text-sm font-semibold text-sky-900 mb-2">{activeTab}</h2>
                <ul className="space-y-1">
                  {sideTabs
                    .find(tab => tab.name === activeTab)
                    ?.subtabs.map(subtab => (
                      <li key={subtab.name}>
                        <button
                          onClick={() =>
                            handleSubtabClick(
                              sideTabs.find(tab => tab.name === activeTab)!,
                              subtab.name
                            )
                          }
                          className={cn(
                            'flex items-center gap-2 w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-300 border-l-[3px]',
                            activeSubtab.toLowerCase() === subtab.name.toLowerCase()
                              ? 'bg-white font-medium text-blue-900 border-sky-800'
                              : 'text-gray-800 border-transparent'
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

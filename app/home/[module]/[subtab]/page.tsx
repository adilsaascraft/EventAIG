'use client';

import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
// Define the module/subtab parameter structure
interface Params {
  module?: string;
  subtab?: string;
}
// Correctly type the views map
const views: Record<string, Record<string, ComponentType>> = {
  registrations: {
    'summary':dynamic(() => import('@/app/home/[module]/registration/summary/page')),
    'registration-settings': dynamic(() => import('@/app/home/[module]/registration/registration-settings/page')),
    'registered-attendees': dynamic(() => import('@/app/home/[module]/registration/registered-attendees/page')),
    'signup-attendees': dynamic(() => import('@/app/home/[module]/registration/signup-attendees/page')),
    'slab-categories': dynamic(() => import('@/app/home/[module]/registration/slab-categories/page')),
    'registration-form': dynamic(() => import('@/app/home/[module]/registration/registration-form/page')),
    'discount-codes': dynamic(() => import('@/app/home/[module]/registration/discount-codes/page')),
    'cancellation-policy': dynamic(() => import('@/app/home/[module]/registration/cancellation-policy/page')),
  },
  abstract: {
    'summary': dynamic(() => import('@/app/home/[module]/abstract/summary/page')),
    'all-abstracts': dynamic(() => import('@/app/home/[module]/abstract/all-abstracts/page')),
    'abstract-categories': dynamic(() => import('@/app/home/[module]/abstract/abstract-categories/page')),
    'abstract-types': dynamic(() => import('@/app/home/[module]/abstract/abstract-types/page')),
    'reviewers': dynamic(() => import('@/app/home/[module]/abstract/reviewers/page')),
    'abstract-settings': dynamic(() => import('@/app/home/[module]/abstract/abstract-settings/page')),
  },
  faculty: {
    'summary': dynamic(() => import('@/app/home/[module]/faculty/summary/page')),
    // Add more faculty sub-tabs as needed
  }
};

export default function DynamicSubtabPage() {
  const { module, subtab } = useParams() as Params;

  const Component = module && subtab ? views?.[module]?.[subtab] : null;

  if (!Component) {
    return (
      <div className="text-center text-red-600 font-semibold">
        🚫 No content found for <strong>{module}/{subtab}</strong>
      </div>
    );
  }

  return <Component />;
}

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
  dashboard:{
    'summary':dynamic(() => import('@/app/home/[module]/dashboard/summary/page')),
  },
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
  },
  agenda: {
    'summary': dynamic(() => import('@/app/home/[module]/agenda/summary/page')),
    // Add more faculty sub-tabs as needed
  },
  exhibitors: {
    'summary': dynamic(() => import('@/app/home/[module]/exhibitors/summary/page')),
    // Add more faculty sub-tabs as needed
  },
  sponsors: {
    'summary': dynamic(() => import('@/app/home/[module]/sponsors/summary/page')),
    // Add more faculty sub-tabs as needed
  },
  travel: {
    'summary': dynamic(() => import('@/app/home/[module]/travel/summary/page')),
    // Add more faculty sub-tabs as needed
  },
  accomodation: {
    'summary': dynamic(() => import('@/app/home/[module]/accomodation/summary/page')),
    // Add more faculty sub-tabs as needed
  },
  marketing: {
    'summary': dynamic(() => import('@/app/home/[module]/marketing/summary/page')),
    // Add more faculty sub-tabs as needed
  },
  communication: {
    'summary': dynamic(() => import('@/app/home/[module]/communication/summary/page')),
    'scheduled-email': dynamic(() => import('@/app/home/[module]/communication/scheduled-email/page')),
    'automated-emails': dynamic(() => import('@/app/home/[module]/communication/automated-emails/page')),
    'email-records': dynamic(() => import('@/app/home/[module]/communication/email-records/page')),
    // Add more faculty sub-tabs as needed
  },
  accounting: {
    'summary': dynamic(() => import('@/app/home/[module]/accounting/summary/page')),
    // Add more faculty sub-tabs as needed
  },
  badgings: {
    'summary': dynamic(() => import('@/app/home/[module]/badgings/summary/page')),
    // Add more faculty sub-tabs as needed
  },
  presentations: {
    'summary': dynamic(() => import('@/app/home/[module]/presentations/summary/page')),
    // Add more faculty sub-tabs as needed
  },
  eventapp: {
    'summary': dynamic(() => import('@/app/home/[module]/eventapp/summary/page')),
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

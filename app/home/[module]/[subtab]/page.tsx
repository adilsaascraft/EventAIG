'use client';

import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

// Dynamically import your components
const RegistrationSummary = dynamic(() => import('@/app/home/[module]/registration/summary/page'));
const RegistrationSettingPage = dynamic(() => import('@/app/home/[module]/registration/registration-settings/page'));
const AbstractSummary = dynamic(() => import('@/app/home/[module]/abstract/summary/page'));
const FacultySummary = dynamic(() => import('@/app/home/[module]/faculty/summary/page'));

// Define the module/subtab parameter structure
interface Params {
  module?: string;
  subtab?: string;
}

// Correctly type the views map
const views: Record<string, Record<string, ComponentType>> = {
  registrations: {
    summary: RegistrationSummary,
    'registration-settings': RegistrationSettingPage,
  },
  abstract: {
    summary: AbstractSummary,
  },
  faculty: {
    summary: FacultySummary,
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

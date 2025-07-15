import {
  Home,
  Users,
  BookOpen,
  LucideIcon,
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
    name: 'Registration',
    icon: Users,
    baseUrl: 'registration',
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
      { name: 'All Abstracts', icon: FileText },
      { name: 'Abstract Categories', icon: FileText },
      { name: 'Abstract Types', icon: FileText },
      { name: 'Reviewers', icon: FileText },
      { name: 'Abstract Settings', icon: Settings },
    ],
  },
  {
    name: 'Faculty',
    icon: Users,
    baseUrl: 'faculty',
    subtabs: [
      { name: 'Summary', icon: FileText },
      { name: 'All Faculty', icon: FileText },
      { name: 'Convert To Faculty', icon: FileText },
      { name: 'Faculty Categories', icon: FileText },
      { name: 'Faculty Allocation', icon: FileText },
      { name: 'Faculty Settings', icon: Settings },
    ],
  },
  {
    name: 'Agenda',
    icon: Users,
    baseUrl: 'agenda',
    subtabs: [
      { name: 'Summary', icon: FileText },
      { name: 'Sessions', icon: FileText },
      { name: 'Session Types', icon: FileText },
      { name: 'Session Halls', icon: FileText },
    ],
  },
  {
    name: 'Exhibitors',
    icon: Users,
    baseUrl: 'exhibitors',
    subtabs: [
      { name: 'Summary', icon: FileText },
      { name: 'All Exhibitors', icon: FileText },
      { name: 'Floor Plan', icon: FileText },
      { name: 'Booths', icon: FileText },
      { name: 'Exhibitor Category',icon: FileText },
      { name: 'Exhibitor Settings', icon: Settings },
    ],
  },
  {
    name: 'Sponsors',
    icon: Users,
    baseUrl: 'sponsors',
    subtabs: [
      { name: 'Summary', icon: FileText },
      { name: 'All Sponsors', icon: FileText },
      { name: 'Registration Quota', icon: FileText },
      { name: 'Accommodation Quota', icon: FileText },
      { name: 'Travel Quota', icon: FileText },
      { name: 'Floor Plan', icon: FileText },
      { name: 'Booths', icon: FileText },
      { name: 'Sponsor Category', icon: FileText },
      { name: 'Sponsor Settings', icon: Settings },
    ],
  },
  {
    name: 'Travel',
    icon: Users,
    baseUrl: 'travel',
    subtabs: [
      { name: 'Summary', icon: FileText },
      { name: 'All Travels', icon: FileText },
      { name: 'Travel Desk Team', icon: FileText },
      { name: 'Reports',  icon: FileText },
      { name: 'Travel Settings', icon: Settings },
    ],
  },
  {
    name: 'Accomodation',
    icon: Users,
    baseUrl: 'accomodation',
    subtabs: [
      { name: 'Summary', icon: FileText },
      { name: 'All Accomodation', icon: FileText },
    ],
  },
  {
    name: 'Marketing',
    icon: Users,
    baseUrl: 'marketing',
    subtabs: [
      { name: 'Summary', icon: FileText },
      { name: 'Email Campaign', icon: FileText },
      { name: 'SMS Campaign', icon: FileText },
      { name: 'WhatsApp Campaign', icon: FileText },
      { name: 'Reports', icon: FileText },
      { name: 'Marketing Settings', icon: Settings },
    ],
  },
  {
    name: 'Communication',
    icon: Users,
    baseUrl: 'communication',
    subtabs: [
      { name: 'Summary', icon: FileText },
      { name: 'Automated Emails', icon: FileText },
      { name: 'Scheduled Email', icon: FileText },
      { name: 'Email Records', icon: FileText },
      { name: 'Reports',  icon: FileText },
      { name: 'Communication Settings', icon: Settings },
    ],
  },
  {
    name: 'Accounting',
    icon: Users,
    baseUrl: 'accounting',
    subtabs: [
      { name: 'Summary', icon: FileText },
      { name: 'All Accounting', icon: FileText },
      { name: 'Reports', icon: FileText },
      { name: 'Account Settings', icon: Settings },
    ],
  },
  {
    name: 'Badging & Scanning',
    icon: Users,
    baseUrl: 'badgings',
    subtabs: [
      { name: 'Summary', icon: FileText },
      { name: 'Badging Settings', icon: Settings },
    ],
  },
  {
    name: 'Presentations',
    icon: Users,
    baseUrl: 'presentations',
    subtabs: [
      { name: 'Summary', icon: FileText },
      { name: 'All Presentations', icon: FileText },
      { name: 'Presentation Settings', icon: Settings },
    ],
  },
  {
    name: 'Event App',
    icon: Users,
    baseUrl: 'eventapp',
    subtabs: [
      { name: 'Summary', icon: FileText },
      { name: 'Get Event App', icon: FileText },
      { name: 'Event App Settings', icon: Settings },
    ],
  },
];

export default sideTabs
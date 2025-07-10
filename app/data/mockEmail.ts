// mockEmails.ts

export type EmailLabel = 'Before Event' | 'During Event' | 'After Event';
export type EmailLabelColor = 'orange' | 'blue' | 'red';

export interface Email {
  id: string;
  label: EmailLabel;
  labelColor: EmailLabelColor;
  title: string;
  scheduleDate: string;
  to: string;
  emailType: string;
  isActive: boolean;
}

export const mockEmails: Email[] = [
  {
    id: '1',
    label: 'Before Event',
    labelColor: 'orange',
    title: 'Event Promotion',
    scheduleDate: 'July 4, 2025 | 6:00 PM (IST)',
    to: 'All Purchasers',
    emailType: 'Marketing Email',
    isActive: true,
  },
  {
    id: '2',
    label: 'During Event',
    labelColor: 'blue',
    title: 'Scheduled Event Mail',
    scheduleDate: 'July 20, 2025 | 6:00 PM (IST)',
    to: 'All Attendees',
    emailType: 'Event Updates',
    isActive: true,
  },
  {
    id: '3',
    label: 'After Event',
    labelColor: 'red',
    title: 'Scheduled Event Mail',
    scheduleDate: 'July 22, 2025 | 6:00 PM (IST)',
    to: 'All Purchasers',
    emailType: 'Event Updates',
    isActive: false,
  },
];

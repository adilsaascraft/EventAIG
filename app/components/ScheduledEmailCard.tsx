'use client';

import { useState } from 'react';
import { Eye, MoreVertical } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

type EmailLabel = 'Before Event' | 'During Event' | 'After Event';
type EmailLabelColor = 'orange' | 'blue' | 'red';

type EmailSchedule = {
  id: string;
  label: EmailLabel;
  labelColor: EmailLabelColor;
  title: string;
  scheduleDate: string;
  to: string;
  emailType: string;
  isActive: boolean;
};

interface ScheduledEmailCardProps {
  email: EmailSchedule;
  onToggle?: (id: string, newStatus: boolean) => void;
  onView?: (id: string) => void;
  onMore?: (id: string) => void;
}

export default function ScheduledEmailCard({
  email,
  onToggle,
  onView,
  onMore,
}: ScheduledEmailCardProps) {
  const [active, setActive] = useState(email.isActive);

  const handleToggle = () => {
    const newStatus = !active;
    setActive(newStatus);
    onToggle?.(email.id, newStatus);
  };

  return (
    <div className="border rounded-lg pl-12 pr-12 mb-4 bg-white">
      {/* Label */}
      <span
        className={`inline-block text-white text-xs font-medium px-2 py-1 mb-2 ${
          email.labelColor === 'orange'
            ? 'bg-orange-500'
            : email.labelColor === 'blue'
            ? 'bg-blue-600'
            : 'bg-red-600'
        }`}
      >
        {email.label}
      </span>

      {/* Title and Toggle */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{email.title}</h3>
        <div className="flex items-center space-x-2">
          <Switch checked={active} onCheckedChange={handleToggle} />
          <span className="text-sm font-medium text-gray-800">
            {active ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>

      {/* Schedule + Actions */}
      <div className="flex justify-between items-center mt-1">
        <p className="text-sm text-gray-700">
          Scheduled at {email.scheduleDate}
        </p>

        <div className="flex items-center divide-x divide-gray-300 border rounded overflow-hidden">
          <button
            onClick={() => onView?.(email.id)}
            className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Eye size={16} />
            <span>View</span>
          </button>
          <button
            onClick={() => onMore?.(email.id)}
            className="p-2 hover:bg-gray-100 flex items-center justify-center"
          >
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      {/* Email Info */}
      <div className="text-sm text-gray-600 mt-2 mb-4">
        <p>
          <strong>To:</strong> {email.to}
        </p>
        <p>
          <strong>Email Type:</strong> {email.emailType}
        </p>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Eye, Pencil } from 'lucide-react';
import { Switch } from '@/components/ui/switch'; // your switch component

type EmailItem = {
  id: string;
  title: string;
  description: string;
  to: string;
  isActive: boolean;
};

type EmailGroup = {
  groupTitle: string;
  items: EmailItem[];
};

interface GroupedEmailCardSectionProps {
  data: EmailGroup[];
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
}

export default function GroupedEmailCardSection({
  data,
  onView,
  onEdit,
}: GroupedEmailCardSectionProps) {
  const [statuses, setStatuses] = useState<Record<string, boolean>>(
    Object.fromEntries(
      data.flatMap((group) =>
        group.items.map((item) => [item.id, item.isActive])
      )
    )
  );

  const handleToggle = async (id: string) => {
    const newStatus = !statuses[id];
    setStatuses((prev) => ({ ...prev, [id]: newStatus }));
    // await axios.put(`/api/email/${id}/toggle`, { active: newStatus });
  };

  return (
    <div>
      {data.map((group) => (
        <div key={group.groupTitle}>
          <h3 className="text-gray-800 font-medium mb-2">
            {group.groupTitle} ({group.items.length})
          </h3>

          {group.items.map((item) => (
  <div
    key={item.id}
    className="border rounded-lg p-4 mb-4 bg-white"
  >
    {/* Title + Switch Row */}
    <div className="flex justify-between items-center">
      <h4 className="text-base font-semibold text-gray-900">
        {item.title}
      </h4>
      <div className="flex items-center space-x-2">
        <Switch
          checked={statuses[item.id]}
          onCheckedChange={() => handleToggle(item.id)}
        />
        <span className="text-sm font-medium text-gray-800">
          {statuses[item.id] ? 'Active' : 'Inactive'}
        </span>
      </div>
    </div>

    {/* Description + Actions */}
    <div className="flex justify-between items-start mt-3">
      <div className="flex-1">
        <p className="text-sm text-gray-700">{item.description}</p>
        <p className="text-sm text-gray-600 mt-2">
          <strong>To:</strong> {item.to}
        </p>
      </div>

      {/* Buttons side by side */}
      <div className="flex space-x-2 ml-4 mt-1">
        <button
          onClick={() => onView?.(item.id)}
          className="border rounded px-3 py-1 flex items-center space-x-1 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Eye size={16} />
          <span>View</span>
        </button>
        <button
          onClick={() => onEdit?.(item.id)}
          className="border rounded px-3 py-1 flex items-center space-x-1 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Pencil size={16} />
          <span>Edit</span>
        </button>
      </div>
    </div>
  </div>
))}

        </div>
      ))}
    </div>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  PieChart, Pie, Cell,
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';

import {
  CalendarIcon,
  FileIcon,
  IndianRupeeIcon,
  UsersIcon,
  MailIcon,
  PresentationIcon,
  GroupIcon,
  TicketIcon,
  GlobeIcon,
  ClipboardListIcon,
  LayoutDashboardIcon,
} from 'lucide-react';

const registrationData = [
  { name: 'Sold', value: 130, color: '#7c3aed' },
  { name: 'Refunded', value: 25, color: '#22c55e' },
  { name: 'Yet To Be Sold', value: 145, color: '#f97316' },
];

const registrationTrend = [
  { name: 'Week 1', registrations: 120 },
  { name: 'Week 2', registrations: 240 },
  { name: 'Week 3', registrations: 280 },
  { name: 'Week 4', registrations: 390 },
  { name: 'Week 5', registrations: 180 },
  { name: 'Week 6', registrations: 90 },
];

export default function Dashboard() {
  const router = useRouter();

  const quickLinks = [
    { label: 'Agenda', path: 'agenda/summary', icon: ClipboardListIcon },
    { label: 'Session', path: 'agenda/sessions', icon: PresentationIcon },
    { label: 'Attendee', path: 'registration/registered-attendees', icon: UsersIcon },
    { label: 'Exhibitors', path: 'exhibitors/summary', icon: UsersIcon },
    { label: 'Sponsors', path: 'sponsors/summary', icon: TicketIcon },
    { label: 'Travel', path: 'travel/summary', icon: UsersIcon },
    { label: 'Accomodation', path: 'accomodation/summary', icon: GlobeIcon },
    { label: 'Marketing', path: 'marketing/summary', icon: MailIcon },
    { label: 'Communication', path: 'communication/scheduled-email', icon: MailIcon },
    { label: 'Presentation', path: 'presentations/summary', icon: LayoutDashboardIcon },
  ];

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Top Stats */}
      <div className="flex items-center p-4 bg-white shadow rounded border">
        <IndianRupeeIcon className="text-yellow-500 mr-3" />
        <div>
          <p className="text-sm font-medium text-gray-600">Ticket Sales</p>
          <p className="text-lg font-bold">₹ 130000.00</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-white shadow rounded border">
        <FileIcon className="text-pink-500 mr-3" />
        <div>
          <p className="text-sm font-medium text-gray-600">Registrations</p>
          <p className="text-lg font-bold">130</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-white shadow rounded border">
        <CalendarIcon className="text-purple-500 mr-3" />
        <div>
          <p className="text-sm font-medium text-gray-600">Days to Event</p>
          <p className="text-lg font-bold">9</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-4 rounded shadow border">
        <p className="font-semibold mb-3">Quick Actions</p>
        <div className="grid grid-cols-2 gap-2">
          {quickLinks.map(({ label, path, icon: Icon }) => (
            <button
              key={label}
              onClick={() => router.push(path)}
              className="flex items-center gap-2 px-3 py-2 bg-sky-100 text-sky-800 text-sm rounded hover:bg-sky-200"
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Registration Trend */}
      <div className="bg-white p-4 rounded shadow border">
        <p className="font-semibold mb-2">Registration Trend</p>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={registrationTrend}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="registrations" stroke="#075985" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <div className="text-center mt-2">
          <p className="text-sm">Reach your first attendee</p>
          <p className="text-xs text-gray-500">No attendees yet. Promote your event to sign people up.</p>
          <button className="mt-2 px-4 py-1 bg-sky-800 text-white text-sm rounded hover:bg-sky-900">Promote Your Event</button>
        </div>
      </div>

      {/* Pie Chart */}
      <Card>
          <CardContent className="p-4">
            <p className="text-sm font-semibold mb-2">Registrations</p>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={registrationData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  label={({ percent }) =>
                    percent !== undefined ? `${(percent * 100).toFixed(0)}%` : ''
                  }
                >
                  {registrationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <ul className="text-xs mt-2 space-y-1">
              {registrationData.map((d, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                  {d.name}: {d.value}
                </li>
              ))}
            </ul>
            <Button className="mt-4 w-full bg-sky-100 hover:bg-sky-200 text-sky-800 text-sm">
              View More
            </Button>
          </CardContent>
        </Card>

      {/* Attendance placeholder */}
      <div className="bg-white p-4 rounded shadow border text-center">
        <p className="font-semibold mb-2">Attendance</p>
        <div className="text-gray-300 text-7xl">○</div>
        <p className="text-sm mt-2">Promote Your Event</p>
      </div>

      {/* Event Website */}
      <div className="bg-white p-4 rounded shadow border">
        <p className="font-semibold mb-2">Event Website</p>
        <div className="rounded bg-pink-50 p-4">
          <h3 className="font-bold text-lg">AIG Summer Event 2025</h3>
          <p className="text-sm text-gray-500">📅 Aug 23, 2025 | 🕒 06:00 PM</p>
          <p className="text-sm text-gray-500">📍 Gachibowli, Hyderabad - India</p>
          <button className="mt-2 px-3 py-1 text-sm bg-red-500 text-white rounded">Register Now</button>
        </div>
      </div>

      {/* Event Numbers */}
      <div className="bg-white p-4 rounded shadow border">
        <p className="font-semibold mb-2">Event Numbers</p>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <PresentationIcon className="mx-auto text-sky-800 hover:sky-900 mb-1" />
            <p className="text-sm">Sessions</p>
            <p className="font-bold">2</p>
          </div>
          <div>
            <UsersIcon className="mx-auto text-sky-800 hover:sky-900 mb-1" />
            <p className="text-sm">Speakers</p>
            <p className="font-bold">4</p>
          </div>
          <div>
            <GroupIcon className="mx-auto text-sky-800 hover:sky-900 mb-1" />
            <p className="text-sm">Event Team</p>
            <p className="font-bold">8</p>
          </div>
          <div>
            <GlobeIcon className="mx-auto text-sky-800 hover:sky-900 mb-1" />
            <p className="text-sm">Sponsors</p>
            <p className="font-bold">2</p>
          </div>
          <div>
            <UsersIcon className="mx-auto text-sky-800 hover:sky-900 mb-1" />
            <p className="text-sm">Exhibitors</p>
            <p className="font-bold">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}



        
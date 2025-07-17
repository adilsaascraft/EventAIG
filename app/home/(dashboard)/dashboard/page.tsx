'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import BarChartInteractive from '@/app/components/BarChart'
import ChartPieDonutText from '@/app/components/PieChart'
import AttendenceChart from '@/app/components/AttendenceChart'
import CountdownTimer from '@/app/components/CountdownTimer';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

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

type EventType = {
  title: string;
  dates: string;
  location: string;
};

export default function Dashboard() {
  const router = useRouter();
  const [event, setEvent] = useState<EventType>();

  useEffect(() => {
    const stored = localStorage.getItem('selectedEvent');
    if (stored) {
      try {
        setEvent(JSON.parse(stored));
      } catch (e) {
        console.error('Error parsing event data', e);
      }
    }
  }, []);

  const calculateDaysLeft = (eventDate: string) => {
    const today = new Date();
    const eventDay = new Date(eventDate);
    const timeDiff = eventDay.getTime() - today.getTime();
    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return Math.max(daysLeft, 0);
  };

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
        <IndianRupeeIcon size={30} className=" text-yellow-500 mr-3" />
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
          <p className="text-sm font-medium text-gray-600">Days left to Event</p>
          <p className="text-lg font-bold">
            {event ? calculateDaysLeft(event.dates) : '--'}
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-4 rounded-lg shadow border">
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
      <div>
        <BarChartInteractive/>
      </div>

      {/* Pie Chart */}
      <div>
        <ChartPieDonutText/>
      </div>

      {/* Attendance placeholder */}
      <div>
      <AttendenceChart/>
      </div>
      {/* Event Website */}
      {event && (
        <div className="bg-white p-4 rounded-lg shadow border">
            <p className="font-semibold mb-2">Event Website</p>
            <div className="rounded bg-sky-50 p-4 text-center">
                <h3 className="font-bold text-lg">{event.title}</h3>

                {/* ⬇️ Wrap calendar icon and date in flex container to align horizontally */}
                <div className="flex items-center justify-center gap-2 mt-1">
                <FaCalendarAlt size={16} color="gray" />
                <p className="text-sm text-gray-500">{event.dates} | 🕒 06:00 PM</p>
                </div>

                {/* ⬇️ Wrap location icon and text in flex container to align horizontally */}
                <div className="flex items-center justify-center gap-2 mt-1">
                <FaMapMarkerAlt size={16} color="gray" />
                <p className="text-sm text-gray-500">{event.location}</p>
                </div>

                <button className="mt-3 px-3 py-1 text-sm bg-red-500 text-white rounded">
                Visit Website
                </button>

                {/* Countdown */}
                <div className="mt-3">
                <CountdownTimer date={event.dates} />
                </div>
            </div>
            </div>

      )}

      {/* Event Numbers */}
      <div className="bg-white p-4 rounded-lg shadow border">
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

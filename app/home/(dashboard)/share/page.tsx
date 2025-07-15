'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

type EventType = {
  image:string;
  title: string;
  dates: string;
  location: string;
};

export default function SharePage() {
  const [event, setEvent] = useState<EventType>();

  useEffect(() => {
    const stored = localStorage.getItem('selectedEvent');
    if (stored) {
      setEvent(JSON.parse(stored));
    }
  }, []);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const encodedTitle = event?.title ? encodeURIComponent(event.title) : '';
  const encodedUrl = encodeURIComponent(shareUrl);

  return (
    <div className="p-6 max-h-screen mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Share This Event</h2>

      {event && (
        <>
        {/* {Event Image} */}
        <div className="bg-pink-50 p-4 rounded mb-4">
        <div className="flex justify-center items-center mt-3">
            <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={160}
                      className="rounded-md object-cover"
                    />
        </div>
  <h3 className="text-xl font-semibold mb-2 text-center">{event.title}</h3>

  <div className="flex items-center justify-center gap-2 mb-1">
    <FaCalendarAlt size={16} color="gray" />
    <span className="text-sm text-gray-700">{event.dates} | 🕒 06:00 PM</span>
  </div>

  <div className="flex items-center justify-center gap-2">
    <FaMapMarkerAlt size={16} color="gray" />
    <span className="text-sm text-gray-700">{event.location}</span>
  </div>

  {/* ✅ Button centered using flex container */}
  <div className="flex justify-center items-center mt-3">
    <Button className="px-5 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded">
      Register Now
    </Button>
  </div>
</div>

          

          <div className="flex justify-center gap-4">
            {/* Social Share Icons with links */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </>
      )}
    </div>
  );
}

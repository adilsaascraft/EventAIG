'use client';
import { useEffect, useState } from 'react';

type CountdownTimerProps = {
  date: string; // e.g. "Sep 15, 2025"
};

export default function CountdownTimer({ date }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const target = new Date(date);
    const now = new Date();
    const difference = +target - +now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  return (
      <div className="inline-flex items-center mt-4 border border-gray-500 rounded overflow-hidden">
  {/* Days */}
  <div className="px-4 py-2 text-center">
    <div className="text-md font-semibold">{timeLeft.days}</div>
    <div className="text-sm text-gray-500">Days</div>
  </div>

  {/* Divider */}
  <div className="w-px h-10 bg-gray-300" />

  {/* Hours */}
  <div className="px-4 py-2 text-center">
    <div className="text-md font-semibold">{timeLeft.hours}</div>
    <div className="text-sm text-gray-500">Hours</div>
  </div>

  {/* Divider */}
  <div className="w-px h-10 bg-gray-300" />

  {/* Minutes */}
  <div className="px-4 py-2 text-center">
    <div className="text-md font-semibold">{timeLeft.minutes}</div>
    <div className="text-sm text-gray-500">Minutes</div>
  </div>

  {/* Divider */}
  <div className="w-px h-10 bg-gray-300" />

  {/* Seconds */}
  <div className="px-4 py-2 text-center">
    <div className="text-md font-semibold">{timeLeft.seconds}</div>
    <div className="text-sm text-gray-500">Seconds</div>
  </div>
</div>

  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Image - 50% height and 100% width */}
      <div className="h-[50vh] w-full relative">
        <Image
          src="https://res.cloudinary.com/dr5kn8993/image/upload/v1753275039/AIG_Event_Software/logo/ADillllllllllll_qejaum.svg"
          alt="404 Not Found Image"
          fill
          className="object-contain w-full"
          priority
        />
      </div>

      {/* Bottom Content - 50% height */}
      <div className="h-[50vh] flex flex-col items-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">Oops! The page you are looking for does not exist.</p>
        <Link href="/">
          <span className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Go back home
          </span>
        </Link>
      </div>
    </div>
  );
}

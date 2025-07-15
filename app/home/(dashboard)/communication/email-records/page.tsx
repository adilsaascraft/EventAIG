'use client';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';

export default function EmailRecordsPage() {
const [search, setSearch] = useState('')

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">Email Records</h3>
        </div>
      {/* Search input */}
  <div className="flex items-center justify-between mb-4">
            {/* Search Input with Icon */}
            <div className="relative w-[600px]">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Enter full email address to search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Install with: npm install react-icons

const options = [
  'Day-1: 02 Aug 2025',
  'Day-2: 03 Aug 2025',
  'Day-3: 04 Aug 2025',
  'Day-4: 05 Aug 2025',
  'Day-5: 06 Aug 2025',
  'Day-6: 07 Aug 2025',
  'Day-7: 08 Aug 2025',
];

export default function EventdayDropdown() {
  const [selected, setSelected] = useState('Day-1: 02 Aug 2025');
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter options based on search text
  useEffect(() => {
    setFilteredOptions(
      options.filter((opt) =>
        opt.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelected(option);
    setSearch('');
    setIsOpen(false);
  };

  const handleClickInput = () => {
    setIsOpen(true);
    setSearch('');
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        className={`flex items-center border rounded-md px-4 py-2 ${
          isOpen
            ? 'border-b-1 rounded-b-none border-gray-300'
            : 'border-gray-300'
        } bg-white`}
        onClick={handleClickInput}
      >
        <input
          type="text"
          readOnly={!isOpen}
          value={isOpen ? search : selected}
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
          className="w-full focus:outline-none"
          placeholder="Search..."
        />
        <FaChevronDown
          className={`ml-2 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>

      {/* Dropdown with accordion animation */}
      <div
        className={`absolute z-80 w-full bg-white border border-t-0 border-gray-300 rounded-b-md shadow-md overflow-hidden transition-[max-height] duration-300 ease-in-out custom-scrollbar ${
          isOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <div className="overflow-y-auto max-h-48">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No options found</div>
          )}
        </div>
      </div>
    </div>
  );
}

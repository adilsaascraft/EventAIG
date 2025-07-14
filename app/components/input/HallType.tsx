'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const options = [
  'Hall A', 'Hall B', 'Hall C', 'Hall D', 'Hall E',
  'Hall F', 'Hall G', 'Hall H', 'Hall I', 'Hall J',
];

export default function HallTypeDropdown() {
  const [selected, setSelected] = useState('Hall A');
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isTBA, setIsTBA] = useState(false); // ✅ Checkbox state
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFilteredOptions(
      options.filter((opt) =>
        opt.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

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
    if (isTBA) return;
    setIsOpen(true);
    setSearch('');
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div className="relative w-full space-y-2" ref={containerRef}>
      <div
        className={`flex items-center border rounded-md px-4 py-2 ${
          isOpen ? 'border-b-1 rounded-b-none border-gray-300' : 'border-gray-300'
        } ${isTBA ? 'bg-gray-100 cursor-not-allowed' : 'bg-white cursor-pointer'}`}
        onClick={handleClickInput}
      >
        <input
          type="text"
          readOnly
          value={isOpen ? search : selected}
          onChange={(e) => !isTBA && setSearch(e.target.value)}
          ref={inputRef}
          className={`w-full focus:outline-none ${isTBA ? 'bg-gray-100 cursor-not-allowed' : ''}`}
          placeholder="Search..."
          disabled={isTBA}
        />
        <FaChevronDown
          className={`ml-2 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>

      {!isTBA && isOpen && (
        <div
          className={`absolute z-20 w-full bg-white border border-t-0 border-gray-300 rounded-b-md shadow-md overflow-hidden transition-all duration-300`}
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
      )}

      {/* ✅ Checkbox to disable the dropdown */}
      <div className="flex items-center gap-2 pt-1">
        <input
          type="checkbox"
          id="hall-tba"
          checked={isTBA}
          onChange={(e) => setIsTBA(e.target.checked)}
        />
        <label htmlFor="hall-tba" className="text-sm">To be announced</label>
      </div>
    </div>
  );
}

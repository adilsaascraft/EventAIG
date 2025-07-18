'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const options = [
  'Track1', 'Track2', 'Track3', 'Track4', 'Track5',
  'Track6', 'Track7', 'Track8', 'Track9', 'Track10',
];

export default function TrackTypeDropdown() {
  const [selected, setSelected] = useState('Track1');
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isCommon, setIsCommon] = useState(false); // ✅ Checkbox state
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
    if (isCommon) return;
    setIsOpen(true);
    setSearch('');
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div className="relative w-full space-y-2" ref={containerRef}>
      <div
        className={`flex items-center border rounded-md px-4 py-2 ${
          isOpen ? 'border-b-1 rounded-b-none border-gray-300' : 'border-gray-300'
        } ${isCommon ? 'bg-gray-100 cursor-not-allowed' : 'bg-white cursor-pointer'}`}
        onClick={handleClickInput}
      >
        <input
          type="text"
          readOnly
          value={isOpen ? search : selected}
          onChange={(e) => !isCommon && setSearch(e.target.value)}
          ref={inputRef}
          className={`w-full focus:outline-none ${isCommon ? 'bg-gray-100 cursor-not-allowed' : ''}`}
          placeholder="Search..."
          disabled={isCommon}
        />
        <FaChevronDown
          className={`ml-2 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>

      {!isCommon && isOpen && (
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
          id="track-common"
          checked={isCommon}
          onChange={(e) => setIsCommon(e.target.checked)}
        />
        <label htmlFor="track-common" className="text-sm">Common for all tracks</label>
      </div>
    </div>
  );
}

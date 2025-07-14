'use client';

import { useEffect, useRef, useState } from 'react';
import {SelectorIcon } from '@heroicons/react/solid';

const LOCAL_TAGS = [
  'AI Events',
  'Technology',
  'travel',
  'Design',
  'Education',
  'Startups',
  'Marketing',
];

export default function TagSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filteredTags = LOCAL_TAGS.filter(
    (tag) => tag.toLowerCase().includes(query.toLowerCase()) && !selectedTags.includes(tag)
  );

  const handleAddTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
    setQuery('');
    setIsOpen(false);
  };

  const handleRemoveTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full" ref={containerRef}>

      {/* Input Box with Tags */}
      <div
        className="border rounded-lg px-3 py-2 min-h-[40px] flex flex-wrap items-center gap-2 cursor-text"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedTags.map((tag) => (
          <span
            key={tag}
            className="flex items-center bg-purple-100 text-green-800 text-sm px-2 py-1 rounded-full"
          >
            {tag}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveTag(tag);
              }}
              className="ml-1 text-red-700 hover:text-red-900 text-xl"
            >
              ×
            </button>
          </span>
        ))}

        <input
          type="text"
          className="flex-1 border-none focus:outline-none text-sm text-gray-700"
          placeholder={selectedTags.length === 0 ? 'Please enter at least one tag' : ''}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />

        <SelectorIcon className="w-5 h-5 text-gray-400" />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="border border-t-0 border-purple-400 rounded-b-md shadow-md bg-white mt-[-4px] max-h-48 overflow-auto z-10 relative">
          <div className="p-2">
            <div className="flex items-center gap-2 mb-2">
              <input
                value={query}
                readOnly
                className="flex-1 px-2 py-1 border rounded text-sm outline-none"
              />
              <button
                type="button"
                className="px-3 py-1 text-white bg-sky-800 hover:bg-sky-900 rounded text-sm"
                onClick={() => handleAddTag(query)}
              >
                Add
              </button>
            </div>

            {filteredTags.length > 0 ? (
              filteredTags.map((tag) => (
                <div
                  key={tag}
                  onClick={() => handleAddTag(tag)}
                  className="px-3 py-2 text-sm cursor-pointer hover:bg-purple-100 rounded"
                >
                  {tag}
                </div>
              ))
            ) : (
              <div className="text-sm text-gray-500 px-3 py-2">No Results Found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

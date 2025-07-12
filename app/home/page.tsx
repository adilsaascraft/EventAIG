'use client'

import { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import toast, { Toaster } from 'react-hot-toast'
import EventCard from '@/app/components/EventCard'
import eventData from '@/app/data/eventsData'
import HomeNavbar from '@/app/components/HomeNavbar'

const tabs = ['Running', 'Live', 'Drafts', 'Past', 'Cancelled', 'All', 'Trash']

export default function HomePage() {
  useEffect(() => {
  const showToast = localStorage.getItem('showWelcomeToast')
  if (showToast) {
    toast.success('Welcome back, Mr.Mintu Nath!', {
      duration: 5000,
      position: 'top-center',
    })
    localStorage.removeItem('showWelcomeToast') // ✅ Clean up
  }
}, [])

  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState('Running')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredByTab =
    activeTab === 'All'
      ? eventData
      : eventData.filter((event) => event.status === activeTab)

  const filteredEvents = filteredByTab.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  )

  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage)

  return (
    <>
    <HomeNavbar/>
    <div className="flex justify-center items-center bg-blue-50 p-4">
         <h3 className="text-2xl font-semibold text-center">
             Welcome to Your Dashboard, Mr. Mintu Nath!
         </h3>
     </div>
    <div className="w-full p-4">
      <Toaster position="top-center" />
     <div className="flex">
         <h2 className="text-2xl font-semibold text-left">
             Your Events
         </h2>
     </div>


      {/* Tabs & Search */}
    <div className="flex justify-between items-center mb-4 border-b border-gray-200">
    
  <div className="flex gap-6 text-sm text-gray-600">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => {
          setActiveTab(tab)
          setCurrentPage(1)
        }}
        className={`pb-2 border-b-2 transition-colors duration-200 cursor-pointer ${
          tab === activeTab
            ? 'border-[#035D8A] text-[#035D8A] font-semibold'
            : 'border-transparent hover:text-black'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* Search input */}
  <div className="ml-auto">
    <input
      type="text"
      placeholder="Search event..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value)
        setCurrentPage(1)
      }}
      className="max-w-full w-[300px] px-4 py-2 border border-gray-300 rounded shadow-sm mb-3"
    />
  </div>
</div>
      

      {/* Event Cards */}
      {filteredEvents.length > 0 ? (
        <div className="flex flex-col gap-4">
          {paginatedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[30vh] w-full border border-gray-300 p-4 rounded">
  <div className="text-center">
    <Image
      src="https://res.cloudinary.com/dr5kn8993/image/upload/v1752307409/AIG_Event_Software/icons/not-found.png"
      alt="Not Found Icon"
      width={150}
      height={150}
      className="mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold mb-2">No Results Found</h3>
    <p className="text-base text-gray-600">
      We could not find anything matching your search criteria.
    </p>
  </div>
</div>


      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded transition-colors duration-200 ${
                currentPage === i + 1
                  ? 'bg-[#035D8A] text-white'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
    </>
  )
}

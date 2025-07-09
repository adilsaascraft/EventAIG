'use client'

import { useState } from 'react'
const tabs = ['Registration', 'Notifications', 'Other Preferences']

export default function RegistrationSettingPage() {
  const [activeTab, setActiveTab] = useState('Notifications')

  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Registration Settings</h1>
        </div>
     
      {/* Tabs */}
      <div className="flex gap-6 mb-4 text-sm text-gray-600 border-b border-gray-200">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab)
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
    </div>
  )
}
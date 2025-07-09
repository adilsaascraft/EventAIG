'use client'

import { useParams } from 'next/navigation'

export default function Page() {
  const { module, subtab } = useParams()

  if (module === 'registrations' && subtab === 'summary') {
    return <div>📝 Registrations Summary Content</div>
  }

  if (module === 'abstract' && subtab === 'summary') {
    return <div>📄 Abstract Summary Content</div>
  }

  return (
    <div className="text-gray-700">
      <h2 className="text-xl font-semibold mb-4">Module: {module}</h2>
      <p>Subtab: {subtab}</p>
    </div>
  )
}

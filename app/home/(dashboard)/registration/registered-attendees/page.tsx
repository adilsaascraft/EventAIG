// app/dashboard/page.tsx (or any page)
'use client';
import GridExample from '@/app/components/ag-grid'; // adjust path as needed

export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Registration Data</h1>
      <GridExample />
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';

type SummaryData = {
  registrationAmount: number;
  thisMonthAmount: number;
  outstandingAmount: number;
  totalTickets: number;
  salesByClass: number;
};

export default function SummarySection() {
  const [summary, setSummary] = useState<SummaryData>({
    registrationAmount: 0,
    thisMonthAmount: 0,
    outstandingAmount: 0,
    totalTickets: 0,
    salesByClass: 0,
  });

  // Simulating fetching data from API
  useEffect(() => {
    // This should be replaced with actual API logic
    const fetchData = async () => {
      // Simulate loading delay
      await new Promise((res) => setTimeout(res, 500));

      setSummary({
        registrationAmount: 3500000,
        thisMonthAmount: 0,
        outstandingAmount: 0,
        totalTickets: 0,
        salesByClass: 0,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>

      <div className="flex flex-wrap gap-4">
        {/* Registration Amount */}
        <div className="bg-[#f8fbff] rounded-xl border border-gray-200 w-full sm:w-[260px] flex flex-col justify-between p-4">
          <h3 className="text-sm font-semibold text-center">Registration Amount</h3>
          <p className="text-2xl font-bold text-center mt-6 mb-4">
            ₹ {summary.registrationAmount.toLocaleString('en-IN')}
          </p>

          <div className="flex justify-between text-sm text-gray-600 border-t pt-2 mt-auto">
            <div className="flex flex-col items-center">
              <span className="text-xs">This Month</span>
              <span className="text-sm font-semibold">
                ₹ {summary.thisMonthAmount.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs">Outstanding Amount</span>
              <span className="text-sm font-semibold">
                ₹ {summary.outstandingAmount.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>

        {/* Total Tickets */}
        <div className="bg-[#f8fbff] rounded-xl border border-gray-200 w-full sm:w-[260px] flex items-center justify-center p-4">
          {summary.totalTickets > 0 ? (
            <p className="text-2xl font-bold">{summary.totalTickets}</p>
          ) : (
            <p className="text-sm text-gray-600">No tickets purchased</p>
          )}
        </div>

        {/* Total Sales by Ticket Class */}
        <div className="bg-[#f8fbff] rounded-xl border border-gray-200 w-full sm:w-[260px] flex items-center justify-center p-4">
          {summary.salesByClass > 0 ? (
            <p className="text-2xl font-bold">{summary.salesByClass}</p>
          ) : (
            <p className="text-sm text-gray-600">No tickets purchased</p>
          )}
        </div>
      </div>
    </div>
  );
}

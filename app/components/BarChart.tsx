"use client"

import * as React from "react"
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive bar chart"

const chartData = [
  { date: "2025-08-01", registrationCount: 14 },
  { date: "2025-08-02", registrationCount: 12 },
  { date: "2025-08-03", registrationCount: 11 },
  { date: "2025-08-04", registrationCount: 18 },
  { date: "2025-08-05", registrationCount: 35 },
  { date: "2025-08-06", registrationCount: 17 },
  { date: "2025-08-07", registrationCount: 14 },
  { date: "2025-08-08", registrationCount: 55 },
  { date: "2025-08-09", registrationCount: 37 },
  { date: "2025-08-10", registrationCount: 25 },
  { date: "2025-08-11", registrationCount: 7 },
  { date: "2025-08-12", registrationCount: 6 },
  { date: "2025-08-13", registrationCount: 26 },
  { date: "2025-08-14", registrationCount: 44 },
  { date: "2025-08-15", registrationCount: 47 },
  { date: "2025-08-16", registrationCount: 11 },
  { date: "2025-08-17", registrationCount: 14 },
  { date: "2025-08-18", registrationCount: 16 },
  { date: "2025-08-19", registrationCount: 33 },
  { date: "2025-08-20", registrationCount: 55 },
  { date: "2025-08-21", registrationCount: 45 },
  { date: "2025-08-22", registrationCount: 46 },
  { date: "2025-08-23", registrationCount: 28 },
  { date: "2025-08-24", registrationCount: 34 },
  { date: "2025-08-25", registrationCount: 50 },
  { date: "2025-08-26", registrationCount: 31 },
  { date: "2025-08-27", registrationCount: 25 },
  { date: "2025-08-28", registrationCount: 8 },
  { date: "2025-08-29", registrationCount: 42 },
  { date: "2025-08-30", registrationCount: 47 },
  { date: "2025-08-31", registrationCount: 49 },
  { date: "2025-09-01", registrationCount: 40 },
  { date: "2025-09-02", registrationCount: 50 },
  { date: "2025-09-03", registrationCount: 22 },
  { date: "2025-09-04", registrationCount: 48 },
  { date: "2025-09-05", registrationCount: 11 },
  { date: "2025-09-06", registrationCount: 55 },
  { date: "2025-09-07", registrationCount: 14 },
  { date: "2025-09-08", registrationCount: 50 },
  { date: "2025-09-09", registrationCount: 28 },
  { date: "2025-09-10", registrationCount: 18 },
  { date: "2025-09-11", registrationCount: 19 },
  { date: "2025-09-12", registrationCount: 33 },
  { date: "2025-09-13", registrationCount: 37 },
  { date: "2025-09-14", registrationCount: 21 },
  { date: "2025-09-15", registrationCount: 47 },
  { date: "2025-09-16", registrationCount: 39 },
  { date: "2025-09-17", registrationCount: 23 },
  { date: "2025-09-18", registrationCount: 29 },
  { date: "2025-09-19", registrationCount: 22 },
  { date: "2025-09-20", registrationCount: 46 },
  { date: "2025-09-21", registrationCount: 10 },
  { date: "2025-09-22", registrationCount: 9 },
  { date: "2025-09-23", registrationCount: 55 },
  { date: "2025-09-24", registrationCount: 49 },
  { date: "2025-09-25", registrationCount: 12 },
  { date: "2025-09-26", registrationCount: 17 },
  { date: "2025-09-27", registrationCount: 60 },
  { date: "2025-09-28", registrationCount: 43 },
  { date: "2025-09-29", registrationCount: 51 },
  { date: "2025-09-30", registrationCount: 32 },
  { date: "2025-10-01", registrationCount: 53 },
  { date: "2025-10-02", registrationCount: 20 },
  { date: "2025-10-03", registrationCount: 36 },
  { date: "2025-10-04", registrationCount: 24 },
  { date: "2025-10-05", registrationCount: 48 },
  { date: "2025-10-06", registrationCount: 30 },
  { date: "2025-10-07", registrationCount: 26 },
  { date: "2025-10-08", registrationCount: 27 },
  { date: "2025-10-09", registrationCount: 54 },
  { date: "2025-10-10", registrationCount: 33 },
  { date: "2025-10-11", registrationCount: 36 },
  { date: "2025-10-12", registrationCount: 42 },
  { date: "2025-10-13", registrationCount: 51 },
  { date: "2025-10-14", registrationCount: 24 },
  { date: "2025-10-15", registrationCount: 47 },
  { date: "2025-10-16", registrationCount: 13 },
  { date: "2025-10-17", registrationCount: 51 },
  { date: "2025-10-18", registrationCount: 58 },
  { date: "2025-10-19", registrationCount: 37 },
  { date: "2025-10-20", registrationCount: 48 },
  { date: "2025-10-21", registrationCount: 49 },
  { date: "2025-10-22", registrationCount: 46 },
  { date: "2025-10-23", registrationCount: 52 },
  { date: "2025-10-24", registrationCount: 30 },
  { date: "2025-10-25", registrationCount: 39 },
  { date: "2025-10-26", registrationCount: 27 },
  { date: "2025-10-27", registrationCount: 35 },
  { date: "2025-10-28", registrationCount: 38 },
  { date: "2025-10-29", registrationCount: 31 },
  { date: "2025-10-30", registrationCount: 39 },
  { date: "2025-10-31", registrationCount: 35 }
];





const chartConfig = {
  views: {
    label: "Registrations",
  },
  registrationCount: {
    label: "Count",
    color: "var(--chart-2)",
  }
} satisfies ChartConfig

export default function BarChartInteractive() {
    const router = useRouter();
    const [activeChart] =
    React.useState<keyof typeof chartConfig>("registrationCount")

  return (
    <Card className="py-0">
      <CardHeader>
        <div className="pt-4">
          <CardTitle>Registration Trend</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-2">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <div className="text-center">
          <p className="text-md pb-2">Did not get enough registrations 🤔?</p>
          <Button onClick={() => router.push('/home/share')} className="mt-2 mb-2 px-4 py-1 bg-sky-800 text-white text-sm rounded hover:bg-sky-900">Promote Your Event</Button>
        </div>
    </Card>
  )
}

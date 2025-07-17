"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Pie, PieChart,Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

const chartData = [
  { ticket: "Sold", count: 130, fill: "var(--color-chrome)" },
  { ticket: "Refunded", count: 20, fill: "var(--color-safari)" },
  { ticket: "Yet to be sold", count: 150, fill: "var(--color-firefox)" },
  
]

const chartConfig = {
  registration: {
    label: "Registrations",
  },
  sold: {
    label: "Sold",
    color: "var(--chart-1)",
  },
  refund: {
    label: "Refunded",
    color: "var(--chart-2)",
  },
  yettostart: {
    label: "Yet to be sold",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export default function ChartPieDonutText() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Registrations</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
  <div className="flex items-center justify-between px-4 py-4">
    {/* Pie Chart on the left */}
    <ChartContainer
      config={chartConfig}
      className="w-[250px] h-[250px]"
    >
      <PieChart width={260} height={260}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="count"
          nameKey="ticket"
          innerRadius={60}
          outerRadius={100}
          strokeWidth={5}
          activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
            <Sector {...props} outerRadius={outerRadius + 10} />
          )}
          labelLine={false}
          label={({ cx, cy }) => (
            <text
              x={cx}
              y={cy}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              <tspan
                x={cx}
                y={cy}
                fill="black"
                fontSize="20"
                fontWeight="bold"
              >
                {totalVisitors.toLocaleString()}
              </tspan>
              <tspan
                x={cx}
                y={cy + 20}
                fill="black"
                fontSize="14"
              >
                Total Tickets
              </tspan>
            </text>
          )}
        />
      </PieChart>
    </ChartContainer>

    {/* Legend on the right */}
    <div className="flex flex-col gap-4 text-sm w-full max-w-[200px]">
      {chartData.map((item) => (
        <div key={item.ticket} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: item.fill }}
            />
            <span className="text-gray-700">{item.ticket}</span>
          </div>
          <span className="font-semibold">{item.count}</span>
        </div>
      ))}
    </div>
  </div>
</CardContent>

      
      <CardFooter className="flex-col text-sm">
        <Button className="w-full bg-sky-100 hover:bg-sky-200 text-sky-800 text-sm">
          View More
        </Button>
      </CardFooter>
    </Card>
  )
}

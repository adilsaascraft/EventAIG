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
  chrome: {
    label: "Sold",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Refunded",
    color: "var(--chart-2)",
  },
  firefox: {
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
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
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
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
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
                    fontSize="24"
                    fontWeight="bold"
                  >
                    {totalVisitors.toLocaleString()}
                  </tspan>
                  <tspan
                    x={cx}
                    y={cy + 24}
                    fill="black"
                    fontWeight="semi-bold"
                    fontSize="16"
                  >
                    Total Tickets
                  </tspan>
                </text>
              )}
            />
          </PieChart>
        </ChartContainer>
        
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <Button className="mt-4 w-full bg-sky-100 hover:bg-sky-200 text-sky-800 text-sm">
          View More
        </Button>
      </CardFooter>
    </Card>
  )
}

"use client"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart"

const chartData = [
  { browser: "Attendee", visitors: 130, fill: "var(--color-chrome)" },
  { browser: "Not Attendee", visitors: 150, fill: "var(--color-firefox)" },
  
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Attendee",
    color: "var(--chart-1)",
  },
  firefox: {
    label: "Not Attendee",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export default function AttendenceChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Attendence</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
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
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

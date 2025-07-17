"use client"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
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
  { attendence: "Checked-in", visitors: 130, fill: "var(--color-chrome)" },
  { attendence: "Yet to check-in", visitors: 150, fill: "var(--color-firefox)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  checked: {
    label: "Checked-in",
    color: "var(--color-chrome)",
  },
  unchecked: {
    label: "Yet to check-in",
    color: "var(--color-firefox)",
  },
} satisfies ChartConfig

export default function AttendenceChart() {
  const totalVisitors = chartData.reduce((sum, item) => sum + item.visitors, 0)

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex items-center justify-between pb-0">
        <CardTitle>Attendance</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Pie Chart on the left */}
          <ChartContainer
            config={chartConfig}
            className="w-[260px] h-[260px]"
          >
            <PieChart width={250} height={250}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="attendence"
                innerRadius={60}
                outerRadius={100}
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
                      {totalVisitors}
                    </tspan>
                    <tspan
                      x={cx}
                      y={cy + 20}
                      fill="black"
                      fontSize="14"
                    >
                      Total Visitors
                    </tspan>
                  </text>
                )}
              />
            </PieChart>
          </ChartContainer>

          {/* Legend on the right */}
          <div className="flex flex-col gap-4 text-sm w-full max-w-[200px]">
            {chartData.map((item) => (
              <div key={item.attendence} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-gray-700">{item.attendence}</span>
                </div>
                <span className="font-semibold">{item.visitors}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


import data from "./data.json"
import { SectionCards } from '@/components/section-cards'
import { DataTable } from '@/components/data-table'
import { ChartAreaInteractive } from '@/components/chart-area-interactive'

export default function DashboardPage() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-4 md:gap-8 pt-4">
      <SectionCards />
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 px-4 lg:px-6">
        <div className="col-span-full">
          <ChartAreaInteractive />
        </div>
      </div>
      <DataTable data={data} />
    </div>
  )
}

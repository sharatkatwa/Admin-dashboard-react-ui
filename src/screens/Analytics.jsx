import Calendar from "../components/analytics/Calendar";
import DonutChart from "../components/analytics/DonutChart";
import LatestProjects from "../components/analytics/LatestProjects";
import MonthlySales from "../components/analytics/MonthlySales";
import SalesChart from "../components/analytics/SalesChart";
import StatCards from "../components/analytics/StatCards";
import WorldMap from "../components/analytics/WorldMap";

const Analytics = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <h1 className="text-[20px] font-semibold tracking-[-0.02em] text-white">
          Analytics Dashboard
        </h1>

        <div className="flex items-center gap-2 self-start xl:self-auto">
          <button className="rounded-sm border border-white/5 bg-[#1f2a39] px-3 py-2 text-[11px] font-medium text-[#c8d2de] hover:bg-[#243246]">
            Invite a Friend
          </button>
          <button className="rounded-sm bg-[#2f7df6] px-3 py-2 text-[11px] font-semibold text-white hover:bg-[#4188f7]">
            New Project
          </button>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-12">
        <div className="xl:col-span-5">
          <StatCards />
        </div>

        <div className="xl:col-span-7">
          <SalesChart />
        </div>

        <div className="xl:col-span-3">
          <Calendar />
        </div>

        <div className="xl:col-span-6">
          <WorldMap />
        </div>

        <div className="xl:col-span-3">
          <DonutChart />
        </div>

        <div className="xl:col-span-9">
          <LatestProjects />
        </div>

        <div className="xl:col-span-3">
          <MonthlySales />
        </div>
      </div>
    </div>
  );
};

export default Analytics;

import RevenueChart from "../components/ecommerce/RevenueChart";
import SalesByState from "../components/ecommerce/SalesByState";
import SalesRevenue from "../components/ecommerce/SalesRevenue";
import StatCards from "../components/ecommerce/StatCards";
import TopSellingProducts from "../components/ecommerce/TopSellingProducts";

const Ecommerce = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <h1 className="text-[20px] font-semibold tracking-[-0.02em] text-white">
          E-Commerce Dashboard
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

      <StatCards />

      <div className="grid gap-4 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <RevenueChart />
        </div>

        <div className="xl:col-span-4">
          <SalesByState />
        </div>

        <div className="xl:col-span-4">
          <SalesRevenue />
        </div>

        <div className="xl:col-span-8">
          <TopSellingProducts />
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;

import {
  Activity,
  CircleDollarSign,
  ShoppingCart,
  Wallet,
} from "lucide-react";

export default function StatCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-sm border border-white/5 bg-[#1B2635] p-4">
        <div className="mb-5 flex items-center justify-between">
          <div className="text-[12px] font-semibold text-[#a7b3c5]">Income</div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#243246] text-[#6ea5ff]">
            <CircleDollarSign size={15} />
          </div>
        </div>
        <div className="mb-2 text-[18px] font-semibold text-white">$47.482</div>
        <div className="flex items-center gap-2 text-[11px] text-[#8291a7]">
          <span className="rounded bg-[#1e7f5a]/20 px-1.5 py-0.5 font-semibold text-[#37c48d]">3.65%</span>
          Since last week
        </div>
      </div>

      <div className="rounded-sm border border-white/5 bg-[#1B2635] p-4">
        <div className="mb-5 flex items-center justify-between">
          <div className="text-[12px] font-semibold text-[#a7b3c5]">Orders</div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#243246] text-[#6ea5ff]">
            <Wallet size={15} />
          </div>
        </div>
        <div className="mb-2 text-[18px] font-semibold text-white">2.542</div>
        <div className="flex items-center gap-2 text-[11px] text-[#8291a7]">
          <span className="rounded bg-[#90364f]/20 px-1.5 py-0.5 font-semibold text-[#ff6f8a]">-5.25%</span>
          Since last week
        </div>
      </div>

      <div className="rounded-sm border border-white/5 bg-[#1B2635] p-4">
        <div className="mb-5 flex items-center justify-between">
          <div className="text-[12px] font-semibold text-[#a7b3c5]">Activity</div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#243246] text-[#6ea5ff]">
            <Activity size={15} />
          </div>
        </div>
        <div className="mb-2 text-[18px] font-semibold text-white">16.300</div>
        <div className="flex items-center gap-2 text-[11px] text-[#8291a7]">
          <span className="rounded bg-[#1e7f5a]/20 px-1.5 py-0.5 font-semibold text-[#37c48d]">4.65%</span>
          Since last week
        </div>
      </div>

      <div className="rounded-sm border border-white/5 bg-[#1B2635] p-4">
        <div className="mb-5 flex items-center justify-between">
          <div className="text-[12px] font-semibold text-[#a7b3c5]">Revenue</div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#243246] text-[#6ea5ff]">
            <ShoppingCart size={15} />
          </div>
        </div>
        <div className="mb-2 text-[18px] font-semibold text-white">$20.120</div>
        <div className="flex items-center gap-2 text-[11px] text-[#8291a7]">
          <span className="rounded bg-[#1e7f5a]/20 px-1.5 py-0.5 font-semibold text-[#37c48d]">2.35%</span>
          Since last week
        </div>
      </div>
    </div>
  );
}

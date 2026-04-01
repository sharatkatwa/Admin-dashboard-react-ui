import {
  CircleDollarSign,
  CreditCard,
  ShoppingCart,
  Users,
} from 'lucide-react'

const StatCards = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-sm border border-white/5 bg-[#1b2635] p-4">
        <div className="mb-5 flex items-center justify-between">
          <div className="text-[12px] font-semibold text-[#a7b3c5]">Sales</div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#243246] text-[#6ea5ff]">
            <CircleDollarSign size={15} />
          </div>
        </div>
        <div className="mb-2 text-[32px] leading-none font-semibold tracking-[-0.04em] text-white">2.382</div>
        <div className="flex items-center gap-2 text-[11px] text-[#8291a7]">
          <span className="rounded bg-[#1e7f5a]/20 px-1.5 py-0.5 font-semibold text-[#37c48d]">+3.65%</span>
          Since last week
        </div>
      </div>

      <div className="rounded-sm border border-white/5 bg-[#1b2635] p-4">
        <div className="mb-5 flex items-center justify-between">
          <div className="text-[12px] font-semibold text-[#a7b3c5]">Earnings</div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#243246] text-[#6ea5ff]">
            <CreditCard size={15} />
          </div>
        </div>
        <div className="mb-2 text-[32px] leading-none font-semibold tracking-[-0.04em] text-white">$21.300</div>
        <div className="flex items-center gap-2 text-[11px] text-[#8291a7]">
          <span className="rounded bg-[#1e7f5a]/20 px-1.5 py-0.5 font-semibold text-[#37c48d]">+6.65%</span>
          Since last week
        </div>
      </div>

      <div className="rounded-sm border border-white/5 bg-[#1b2635] p-4">
        <div className="mb-5 flex items-center justify-between">
          <div className="text-[12px] font-semibold text-[#a7b3c5]">Visitors</div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#243246] text-[#6ea5ff]">
            <Users size={15} />
          </div>
        </div>
        <div className="mb-2 text-[32px] leading-none font-semibold tracking-[-0.04em] text-white">14.212</div>
        <div className="flex items-center gap-2 text-[11px] text-[#8291a7]">
          <span className="rounded bg-[#1e7f5a]/20 px-1.5 py-0.5 font-semibold text-[#37c48d]">+5.25%</span>
          Since last week
        </div>
      </div>

      <div className="rounded-sm border border-white/5 bg-[#1b2635] p-4">
        <div className="mb-5 flex items-center justify-between">
          <div className="text-[12px] font-semibold text-[#a7b3c5]">Orders</div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#243246] text-[#6ea5ff]">
            <ShoppingCart size={15} />
          </div>
        </div>
        <div className="mb-2 text-[32px] leading-none font-semibold tracking-[-0.04em] text-white">64</div>
        <div className="flex items-center gap-2 text-[11px] text-[#8291a7]">
          <span className="rounded bg-[#90364f]/20 px-1.5 py-0.5 font-semibold text-[#ff6f8a]">-2.25%</span>
          Since last week
        </div>
      </div>
    </div>
  )
}

export default StatCards
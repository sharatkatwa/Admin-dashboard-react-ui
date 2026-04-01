import { MoreHorizontal } from "lucide-react";

export default function TopSellingProducts() {
  return (
    <div className="rounded-sm border border-white/5 bg-[#1B2635] p-4 text-white">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[12px] font-semibold text-[#a7b3c5]">Top Selling Products</h2>
        <button className="text-[#7f8ea2]">
          <MoreHorizontal size={15} />
        </button>
      </div>

      <div className="hidden grid-cols-[1.35fr_1.25fr_1.35fr_80px_90px] gap-4 border-b border-white/5 pb-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#738298] lg:grid">
        <div>Name</div>
        <div>Company</div>
        <div>Assigned</div>
        <div>Orders</div>
        <div>Status</div>
      </div>

      <div className="space-y-1 pt-2">
        <div className="grid gap-4 border-b border-white/5 py-3 lg:grid-cols-[1.35fr_1.25fr_1.35fr_80px_90px]">
          <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#ef4444] text-[11px] font-bold text-white">9</div><div><div className="text-[12px] font-semibold text-white">Aurora</div><div className="text-[11px] text-[#7e8ca0]">UI Kit</div></div></div>
          <div><div className="text-[12px] font-semibold text-white">Lechters</div><div className="text-[11px] text-[#7e8ca0]">Real Estate</div></div>
          <div><div className="text-[12px] font-semibold text-white">Vanessa Tucker</div><div className="text-[11px] text-[#7e8ca0]">HTML, JS, React</div></div>
          <div className="text-[12px] text-[#d7deea]">520</div>
          <div><span className="rounded bg-green-500/20 px-2 py-0.5 text-[10px] font-semibold text-green-400">In progress</span></div>
        </div>

        <div className="grid gap-4 border-b border-white/5 py-3 lg:grid-cols-[1.35fr_1.25fr_1.35fr_80px_90px]">
          <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#7c3aed] text-[11px] font-bold text-white">V</div><div><div className="text-[12px] font-semibold text-white">Bender</div><div className="text-[11px] text-[#7e8ca0]">Dashboard</div></div></div>
          <div><div className="text-[12px] font-semibold text-white">Cellophane Transportation</div><div className="text-[11px] text-[#7e8ca0]">Transportation</div></div>
          <div><div className="text-[12px] font-semibold text-white">William Harris</div><div className="text-[11px] text-[#7e8ca0]">HTML, JS, Vue</div></div>
          <div className="text-[12px] text-[#d7deea]">240</div>
          <div><span className="rounded bg-yellow-500/20 px-2 py-0.5 text-[10px] font-semibold text-yellow-400">Paused</span></div>
        </div>

        <div className="grid gap-4 border-b border-white/5 py-3 lg:grid-cols-[1.35fr_1.25fr_1.35fr_80px_90px]">
          <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#0ea5e9] text-[11px] font-bold text-white">A</div><div><div className="text-[12px] font-semibold text-white">Camelot</div><div className="text-[11px] text-[#7e8ca0]">Dashboard</div></div></div>
          <div><div className="text-[12px] font-semibold text-white">Clemens</div><div className="text-[11px] text-[#7e8ca0]">Insurance</div></div>
          <div><div className="text-[12px] font-semibold text-white">Darwin</div><div className="text-[11px] text-[#7e8ca0]">HTML, JS, Laravel</div></div>
          <div className="text-[12px] text-[#d7deea]">180</div>
          <div><span className="rounded bg-green-500/20 px-2 py-0.5 text-[10px] font-semibold text-green-400">In progress</span></div>
        </div>

        <div className="grid gap-4 border-b border-white/5 py-3 lg:grid-cols-[1.35fr_1.25fr_1.35fr_80px_90px]">
          <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#22c55e] text-[11px] font-bold text-white">E</div><div><div className="text-[12px] font-semibold text-white">Edison</div><div className="text-[11px] text-[#7e8ca0]">UI Kit</div></div></div>
          <div><div className="text-[12px] font-semibold text-white">Affinity Investment Group</div><div className="text-[11px] text-[#7e8ca0]">Finance</div></div>
          <div><div className="text-[12px] font-semibold text-white">Vanessa Tucker</div><div className="text-[11px] text-[#7e8ca0]">HTML, JS, React</div></div>
          <div className="text-[12px] text-[#d7deea]">410</div>
          <div><span className="rounded bg-red-500/20 px-2 py-0.5 text-[10px] font-semibold text-red-400">Cancelled</span></div>
        </div>

        <div className="grid gap-4 py-3 lg:grid-cols-[1.35fr_1.25fr_1.35fr_80px_90px]">
          <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#f59e0b] text-[11px] font-bold text-white">F</div><div><div className="text-[12px] font-semibold text-white">Fusion</div><div className="text-[11px] text-[#7e8ca0]">Dashboard</div></div></div>
          <div><div className="text-[12px] font-semibold text-white">Konsli</div><div className="text-[11px] text-[#7e8ca0]">Retail</div></div>
          <div><div className="text-[12px] font-semibold text-white">Christina Mason</div><div className="text-[11px] text-[#7e8ca0]">HTML, JS, Vue</div></div>
          <div className="text-[12px] text-[#d7deea]">250</div>
          <div><span className="rounded bg-yellow-500/20 px-2 py-0.5 text-[10px] font-semibold text-yellow-400">Paused</span></div>
        </div>
      </div>
    </div>
  );
}

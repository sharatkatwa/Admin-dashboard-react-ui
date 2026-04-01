import { MoreHorizontal } from "lucide-react";

export default function LatestProjects() {
  return (
    <div className="rounded-sm border border-white/5 bg-[#1B2635] p-4 text-white">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[12px] font-semibold text-[#a7b3c5]">Latest Projects</h2>
        <button className="text-[#7f8ea2]">
          <MoreHorizontal size={15} />
        </button>
      </div>

      <div className="hidden grid-cols-[1.45fr_1.35fr_1.1fr_0.9fr_76px] gap-4 border-b border-white/5 pb-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#738298] lg:grid">
        <div>Name</div>
        <div>Company</div>
        <div>Author</div>
        <div>Status</div>
        <div>Action</div>
      </div>

      <div className="space-y-1 pt-2">
        <div className="grid gap-4 border-b border-white/5 py-3 lg:grid-cols-[1.45fr_1.35fr_1.1fr_0.9fr_76px]">
          <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#7c3aed] text-[11px] font-bold text-white">V</div><div><div className="text-[12px] font-semibold text-white">Project Apollo</div><div className="text-[11px] text-[#7e8ca0]">Web, UI/UX Design</div></div></div>
          <div><div className="text-[12px] font-semibold text-white">Lechters</div><div className="text-[11px] text-[#7e8ca0]">Real Estate</div></div>
          <div><div className="text-[12px] font-semibold text-white">Vanessa Tucker</div><div className="text-[11px] text-[#7e8ca0]">HTML, JS, React</div></div>
          <div className="flex items-center gap-2"><span className="w-8 text-[11px] text-[#91a0b4]">65%</span><div className="h-1.5 flex-1 rounded-full bg-white/8"><div className="h-1.5 w-[65%] rounded-full bg-[#52d5b5]" /></div></div>
          <div><button className="rounded-sm bg-[#283445] px-3 py-1.5 text-[11px] text-white">View</button></div>
        </div>

        <div className="grid gap-4 border-b border-white/5 py-3 lg:grid-cols-[1.45fr_1.35fr_1.1fr_0.9fr_76px]">
          <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#22c55e] text-[11px] font-bold text-white">B</div><div><div className="text-[12px] font-semibold text-white">Project Bongo</div><div className="text-[11px] text-[#7e8ca0]">Web</div></div></div>
          <div><div className="text-[12px] font-semibold text-white">Cellophane Transportation</div><div className="text-[11px] text-[#7e8ca0]">Transportation</div></div>
          <div><div className="text-[12px] font-semibold text-white">William Harris</div><div className="text-[11px] text-[#7e8ca0]">HTML, JS, Vue</div></div>
          <div className="flex items-center gap-2"><span className="w-8 text-[11px] text-[#91a0b4]">33%</span><div className="h-1.5 flex-1 rounded-full bg-white/8"><div className="h-1.5 w-[33%] rounded-full bg-[#ff8aa0]" /></div></div>
          <div><button className="rounded-sm bg-[#283445] px-3 py-1.5 text-[11px] text-white">View</button></div>
        </div>

        <div className="grid gap-4 border-b border-white/5 py-3 lg:grid-cols-[1.45fr_1.35fr_1.1fr_0.9fr_76px]">
          <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#2563eb] text-[11px] font-bold text-white">C</div><div><div className="text-[12px] font-semibold text-white">Project Canary</div><div className="text-[11px] text-[#7e8ca0]">Web, UI/UX Design</div></div></div>
          <div><div className="text-[12px] font-semibold text-white">Clemens</div><div className="text-[11px] text-[#7e8ca0]">Insurance</div></div>
          <div><div className="text-[12px] font-semibold text-white">Sharon Lessman</div><div className="text-[11px] text-[#7e8ca0]">HTML, JS, Laravel</div></div>
          <div className="flex items-center gap-2"><span className="w-8 text-[11px] text-[#91a0b4]">50%</span><div className="h-1.5 flex-1 rounded-full bg-white/8"><div className="h-1.5 w-[50%] rounded-full bg-[#f8bf4d]" /></div></div>
          <div><button className="rounded-sm bg-[#283445] px-3 py-1.5 text-[11px] text-white">View</button></div>
        </div>

        <div className="grid gap-4 border-b border-white/5 py-3 lg:grid-cols-[1.45fr_1.35fr_1.1fr_0.9fr_76px]">
          <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#ef4444] text-[11px] font-bold text-white">9</div><div><div className="text-[12px] font-semibold text-white">Project Edison</div><div className="text-[11px] text-[#7e8ca0]">UI/UX Design</div></div></div>
          <div><div className="text-[12px] font-semibold text-white">Affinity Investment Group</div><div className="text-[11px] text-[#7e8ca0]">Finance</div></div>
          <div><div className="text-[12px] font-semibold text-white">Vanessa Tucker</div><div className="text-[11px] text-[#7e8ca0]">HTML, JS, Vue</div></div>
          <div className="flex items-center gap-2"><span className="w-8 text-[11px] text-[#91a0b4]">80%</span><div className="h-1.5 flex-1 rounded-full bg-white/8"><div className="h-1.5 w-[80%] rounded-full bg-[#52d5b5]" /></div></div>
          <div><button className="rounded-sm bg-[#283445] px-3 py-1.5 text-[11px] text-white">View</button></div>
        </div>

        <div className="grid gap-4 py-3 lg:grid-cols-[1.45fr_1.35fr_1.1fr_0.9fr_76px]">
          <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#0ea5e9] text-[11px] font-bold text-white">A</div><div><div className="text-[12px] font-semibold text-white">Project Indigo</div><div className="text-[11px] text-[#7e8ca0]">Retail, UI/UX Design</div></div></div>
          <div><div className="text-[12px] font-semibold text-white">Konsli</div><div className="text-[11px] text-[#7e8ca0]">Retail</div></div>
          <div><div className="text-[12px] font-semibold text-white">Christina Mason</div><div className="text-[11px] text-[#7e8ca0]">HTML, JS, Vue</div></div>
          <div className="flex items-center gap-2"><span className="w-8 text-[11px] text-[#91a0b4]">78%</span><div className="h-1.5 flex-1 rounded-full bg-white/8"><div className="h-1.5 w-[78%] rounded-full bg-[#60a5fa]" /></div></div>
          <div><button className="rounded-sm bg-[#283445] px-3 py-1.5 text-[11px] text-white">View</button></div>
        </div>
      </div>
    </div>
  );
}

import { MoreHorizontal } from "lucide-react";

export default function MonthlySales() {
  return (
    <div className="rounded-sm border border-white/5 bg-[#1B2635] p-4 text-white">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[12px] font-semibold text-[#a7b3c5]">Monthly Sales</h2>
        <button className="text-[#7f8ea2]">
          <MoreHorizontal size={15} />
        </button>
      </div>

      <div className="flex h-[230px] gap-3">
        <div className="flex h-[180px] w-8 flex-col justify-between pt-1 text-[10px] text-[#738298]">
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
        </div>

        <div className="relative flex-1">
          <div className="absolute inset-0 border-b border-l border-white/6">
            <div className="absolute inset-x-0 top-0 border-t border-white/4" />
            <div className="absolute inset-x-0 top-1/3 border-t border-white/4" />
            <div className="absolute inset-x-0 top-2/3 border-t border-white/4" />
          </div>

          <div className="relative flex h-[180px] items-end justify-between gap-2 px-2">
            <div className="flex flex-col items-center gap-2"><div className="w-[6px] rounded-t-sm bg-[#3b82f6]" style={{ height: "62px" }} /><span className="rotate-[-58deg] text-[9px] text-[#66768c]">Jan</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-[6px] rounded-t-sm bg-[#3b82f6]" style={{ height: "103px" }} /><span className="rotate-[-58deg] text-[9px] text-[#66768c]">Feb</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-[6px] rounded-t-sm bg-[#3b82f6]" style={{ height: "16px" }} /><span className="rotate-[-58deg] text-[9px] text-[#66768c]">Mar</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-[6px] rounded-t-sm bg-[#3b82f6]" style={{ height: "84px" }} /><span className="rotate-[-58deg] text-[9px] text-[#66768c]">Apr</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-[6px] rounded-t-sm bg-[#3b82f6]" style={{ height: "24px" }} /><span className="rotate-[-58deg] text-[9px] text-[#66768c]">May</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-[6px] rounded-t-sm bg-[#3b82f6]" style={{ height: "71px" }} /><span className="rotate-[-58deg] text-[9px] text-[#66768c]">Jun</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-[6px] rounded-t-sm bg-[#3b82f6]" style={{ height: "36px" }} /><span className="rotate-[-58deg] text-[9px] text-[#66768c]">Jul</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-[6px] rounded-t-sm bg-[#3b82f6]" style={{ height: "127px" }} /><span className="rotate-[-58deg] text-[9px] text-[#66768c]">Aug</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-[6px] rounded-t-sm bg-[#3b82f6]" style={{ height: "96px" }} /><span className="rotate-[-58deg] text-[9px] text-[#66768c]">Sep</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-[6px] rounded-t-sm bg-[#3b82f6]" style={{ height: "138px" }} /><span className="rotate-[-58deg] text-[9px] text-[#66768c]">Oct</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-[6px] rounded-t-sm bg-[#3b82f6]" style={{ height: "52px" }} /><span className="rotate-[-58deg] text-[9px] text-[#66768c]">Nov</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-[6px] rounded-t-sm bg-[#3b82f6]" style={{ height: "148px" }} /><span className="rotate-[-58deg] text-[9px] text-[#66768c]">Dec</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

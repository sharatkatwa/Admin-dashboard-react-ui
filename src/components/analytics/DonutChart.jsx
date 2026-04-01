import { MoreHorizontal } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Chrome", value: 4306, color: "#3b82f6", change: "+12%" },
  { name: "Firefox", value: 3801, color: "#fbbf24", change: "-3%" },
  { name: "Edge", value: 1689, color: "#ef4444", change: null },
  { name: "Other", value: 3251, color: "#e5e7eb", change: null },
];

export default function DonutChart() {
  return (
    <div className="rounded-sm border border-white/5 bg-[#1B2635] p-4 text-white">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[12px] font-semibold text-[#a7b3c5]">Browser Usage</h2>
        <button className="text-[#7f8ea2]">
          <MoreHorizontal size={15} />
        </button>
      </div>

      <div className="h-[150px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={40}
              outerRadius={62}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 space-y-3">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between border-t border-white/5 pt-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-[12px] text-[#c7d0dd]">{item.name}</span>
              {item.change ? (
                <span
                  className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                    item.change.startsWith("+")
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {item.change}
                </span>
              ) : null}
            </div>
            <span className="text-[12px] text-[#d7deea]">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

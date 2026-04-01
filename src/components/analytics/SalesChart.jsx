import {
  Area,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", sales: 2100 },
  { name: "Feb", sales: 1500 },
  { name: "Mar", sales: 1600 },
  { name: "Apr", sales: 1900 },
  { name: "May", sales: 1600 },
  { name: "Jun", sales: 2000 },
  { name: "Jul", sales: 2600 },
  { name: "Aug", sales: 2400 },
  { name: "Sep", sales: 2800 },
  { name: "Oct", sales: 3400 },
  { name: "Nov", sales: 2900 },
  { name: "Dec", sales: 3300 },
];

export default function SalesChart() {
  return (
    <div className="rounded-sm border border-white/5 bg-[#1B2635] p-4">
      <div className="mb-3 h-21 flex items-center justify-between">
        <h2 className="text-[12px] font-semibold text-[#a7b3c5]">Recent Movement</h2>
        <div className="hidden items-center gap-2 md:flex">
          <button className="rounded-sm border border-white/5 bg-[#1f2a39] px-2.5 py-1.5 text-[10px] text-[#94a1b5]">
            Jan
          </button>
          <div className="rounded-sm border border-white/5 bg-[#1f2a39] px-2.5 py-1.5 text-[10px] text-[#6f7e93]">
            Search...
          </div>
        </div>
      </div>

      <div className="h-[144px] md:h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: -18, top: 5, right: 6, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.18} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#334155" vertical={false} strokeOpacity={0.28} />
            <XAxis dataKey="name" stroke="#94a3b8" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
            <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} width={28} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px",
                color: "white",
              }}
            />
            <Area type="monotone" dataKey="sales" stroke="none" fill="url(#colorSales)" />
            <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2.5} dot={false} activeDot={{ r: 4, fill: "#3b82f6" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

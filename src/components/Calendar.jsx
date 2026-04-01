import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import "react-day-picker/dist/style.css";

export default function Calendar() {
  const [selected, setSelected] = useState(new Date(2026, 2, 27));
  const [month, setMonth] = useState(new Date(2026, 2, 1));

  return (
    <div className="rounded-sm h-98 border border-white/5 bg-[#1B2635] p-4 text-white">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[12px] font-semibold text-[#a7b3c5]">Calendar</h2>
        <button className="text-[#7f8ea2]">
          <MoreHorizontal size={15} />
        </button>
      </div>

      <div className="mb-4 flex items-center justify-between text-[12px] text-white">
        <button
          onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1))}
          className="text-[#95a3b6]"
          aria-label="Previous month"
        >
          <ChevronLeft size={14} />
        </button>

        <div className="flex items-center gap-3 font-semibold">
          <span>{format(month, "MMMM")}</span>
          <span>{format(month, "yyyy")}</span>
        </div>

        <button
          onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1))}
          className="text-[#95a3b6]"
          aria-label="Next month"
        >
          <ChevronRight size={14} />
        </button>
      </div>

      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        month={month}
        onMonthChange={setMonth}
        showOutsideDays
        className="text-sm"
        classNames={{
          root: "w-full",
          months: "flex justify-center",
          month: "w-full space-y-3",
          month_caption: "hidden",
          month_grid: "w-full border-collapse",
          weekdays: "mb-2 grid grid-cols-7",
          weekday:
            "text-center text-[9px] font-medium text-[#7f8ea2]",
          weeks: "space-y-1",
          week: "grid grid-cols-7 gap-1",
          day: "flex items-center justify-center",
          day_button:
            "flex h-8 w-8 items-center justify-center rounded-[2px] text-[11px] font-medium text-[#c7d0dd] transition hover:bg-white/6 hover:text-white",
          selected:
            "bg-[#2f7df6] text-white hover:bg-[#2f7df6] hover:text-white",
          today: "text-white",
          outside: "text-[#56657a]",
          disabled: "text-[#475569] opacity-50",
        }}
      />
    </div>
  );
}

import { useState } from "react";
import {
  Calendar,
  ChevronDown,
  Folder,
  Globe,
  Grid2X2,
  LayoutDashboard,
  ListTodo,
  Shield,
  User,
} from "lucide-react";

const Sidebar = () => {
  const [dashboardsOpen, setDashboardsOpen] = useState(true);

  return (
    <aside className="hidden w-[246px] shrink-0 border-r border-white/5 bg-[#17202d] xl:block">
      <div className="px-4 pt-3">
        <div className="mb-6 flex items-center gap-2">
          <div className="text-[22px] font-semibold tracking-[-0.03em] text-white">
            AdminKit
          </div>
          <div className="rounded bg-[#2f7df6] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
            Pro
          </div>
        </div>

        <div className="mb-5 flex items-center gap-3 border-b border-white/5 px-1 pb-4">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-sm bg-linear-to-br from-[#eec89b] to-[#b98056] text-[12px] font-bold text-[#1b2230]">
            CH
          </div>
          <div>
            <div className="text-[13px] font-semibold text-white">Charles Hall</div>
            <div className="text-[11px] text-[#8d99ab]">Designer</div>
          </div>
        </div>

        <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#718198]">
          Pages
        </div>

        <nav className="space-y-0.5 text-[12px]">
          <div className="rounded-sm bg-white/[0.02]">
            <button
              type="button"
              onClick={() => setDashboardsOpen((open) => !open)}
              className="flex w-full items-center justify-between rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
            >
              <span className="flex items-center gap-2.5">
                <LayoutDashboard size={14} strokeWidth={1.8} />
                Dashboards
              </span>
              <ChevronDown
                size={12}
                className={`transition-transform ${dashboardsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dashboardsOpen ? (
              <div className="mt-0.5 space-y-0.5 pb-1">
                <a
                  href="/"
                  onClick={(event) => event.preventDefault()}
                  className="ml-6 flex items-center gap-2 rounded-sm bg-[#223146] px-3 py-2 text-[#63a4ff]"
                >
                  <span className="text-[#7f8ea2]">-</span>
                  <span>Analytics</span>
                </a>
              </div>
            ) : null}
          </div>

          <a
            href="/"
            onClick={(event) => event.preventDefault()}
            className="flex items-center gap-2.5 rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
          >
            <User size={14} strokeWidth={1.8} />
            Profile
          </a>

          <a
            href="/"
            onClick={(event) => event.preventDefault()}
            className="flex items-center justify-between rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
          >
            <span className="flex items-center gap-2.5">
              <ListTodo size={14} strokeWidth={1.8} />
              Tasks
            </span>
            <span className="rounded bg-[#2f7df6] px-1.5 py-0.5 text-[9px] font-semibold text-white">
              Pro
            </span>
          </a>

          <a
            href="/"
            onClick={(event) => event.preventDefault()}
            className="flex items-center justify-between rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
          >
            <span className="flex items-center gap-2.5">
              <Calendar size={14} strokeWidth={1.8} />
              Calendar
            </span>
            <span className="rounded bg-[#2f7df6] px-1.5 py-0.5 text-[9px] font-semibold text-white">
              Pro
            </span>
          </a>

          <a
            href="/"
            onClick={(event) => event.preventDefault()}
            className="flex items-center gap-2.5 rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
          >
            <Shield size={14} strokeWidth={1.8} />
            Auth
          </a>
        </nav>

        <div className="mb-3 mt-7 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#718198]">
          Components
        </div>

        <nav className="space-y-0.5 text-[12px]">
          <a
            href="/"
            onClick={(event) => event.preventDefault()}
            className="flex items-center gap-2.5 rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
          >
            <Grid2X2 size={14} strokeWidth={1.8} />
            UI Elements
          </a>

          <a
            href="/"
            onClick={(event) => event.preventDefault()}
            className="flex items-center justify-between rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
          >
            <span className="flex items-center gap-2.5">
              <Globe size={14} strokeWidth={1.8} />
              Icons
            </span>
            <span className="text-[10px] text-[#7f8ea2]">1500+</span>
          </a>

          <a
            href="/"
            onClick={(event) => event.preventDefault()}
            className="flex items-center gap-2.5 rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
          >
            <Folder size={14} strokeWidth={1.8} />
            Forms
          </a>

          <a
            href="/"
            onClick={(event) => event.preventDefault()}
            className="flex items-center gap-2.5 rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
          >
            <Folder size={14} strokeWidth={1.8} />
            Tables
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

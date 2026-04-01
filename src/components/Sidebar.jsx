import { useState } from "react";
import {
  Calendar,
  ChevronDown,
  Folder,
  Globe,
  Grid2X2,
  LayoutDashboard,
  ListTodo,
  ReceiptText,
  Shield,
  User,
} from "lucide-react";
import { NavLink } from "react-router";

const Sidebar = ({ isOpen, onClose }) => {
  const [dashboardsOpen, setDashboardsOpen] = useState(true);
  const [authOpen, setAuthOpen] = useState(false);

  const handleNavClick = () => {
    if (window.innerWidth < 1280) {
      onClose?.();
    }
  };

  return (
    <>
      <button
        type="button"
        aria-label="Close sidebar overlay"
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/45 transition-opacity xl:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-[246px] shrink-0 overflow-hidden bg-[#17202d] transition-[transform,width,border-color] duration-300 ${
          isOpen
            ? "translate-x-0 border-r border-white/5 xl:w-[246px]"
            : "-translate-x-full border-r-0 xl:w-0 xl:translate-x-0"
        }`}
      >
        <div
          className={`h-full overflow-y-auto px-4 pt-3 transition-opacity duration-200 ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center gap-2">
            <div className="text-[22px] font-semibold tracking-[-0.03em] text-white">AdminKit</div>
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

          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#718198]">Pages</div>

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
                <ChevronDown size={12} className={`transition-transform ${dashboardsOpen ? "rotate-180" : ""}`} />
              </button>

              {dashboardsOpen ? (
                <div className="mt-0.5 space-y-0.5 pb-1">
                  <NavLink
                    to="/"
                    onClick={handleNavClick}
                    className="flex items-center gap-2 rounded-sm bg-[#223146] px-3 py-2 text-[#63a4ff]"
                  >
                    <span className="text-[#7f8ea2]">-</span>
                    <span>Analytics</span>
                  </NavLink>
                  <NavLink
                    to="/Ecommerce"
                    onClick={handleNavClick}
                    className="flex items-center gap-2 rounded-sm bg-[#223146] px-3 py-2 text-[#63a4ff]"
                  >
                    <span className="text-[#7f8ea2]">-</span>
                    <span>E-Commerce</span>
                  </NavLink>
                </div>
              ) : null}
            </div>

            <NavLink
              to="/Profile"
              onClick={handleNavClick}
              className="flex items-center gap-2.5 rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
            >
              <User size={14} strokeWidth={1.8} />
              Profile
            </NavLink>

            <NavLink
              to="/invoice"
              onClick={handleNavClick}
              className="flex items-center gap-2.5 rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
            >
              <ReceiptText size={14} strokeWidth={1.8} />
              Invoice
            </NavLink>

            <NavLink
              to={'/Tasks'}
              className="flex items-center justify-between rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
            >
              <span className="flex items-center gap-2.5">
                <ListTodo size={14} strokeWidth={1.8} />
                Tasks
              </span>
              <span className="rounded bg-[#2f7df6] px-1.5 py-0.5 text-[9px] font-semibold text-white">Pro</span>
            </NavLink>

            <NavLink
              to={'/Calendar'}
              className="flex items-center justify-between rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
            >
              <span className="flex items-center gap-2.5">
                <Calendar size={14} strokeWidth={1.8} />
                Calendar
              </span>
              <span className="rounded bg-[#2f7df6] px-1.5 py-0.5 text-[9px] font-semibold text-white">Pro</span>
            </NavLink>

            <div className="rounded-sm bg-white/[0.02]">
              <button
                type="button"
                onClick={() => setAuthOpen((open) => !open)}
                className="flex w-full items-center justify-between rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
              >
                <span className="flex items-center gap-2.5">
                  <Shield size={14} strokeWidth={1.8} />
                  Auth
                </span>
                <ChevronDown size={12} className={`transition-transform ${authOpen ? "rotate-180" : ""}`} />
              </button>

              {authOpen ? (
                <div className="mt-0.5 space-y-0.5 pb-1">
                  <NavLink
                    to={'/Auth/Signup'}
                    className="flex items-center gap-2 rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
                  >
                    <span className="text-[#7f8ea2]">-</span>
                    <span>Signup</span>
                  </NavLink>
                  <NavLink
                    to={'/Auth'}
                    className="flex items-center gap-2 rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
                  >
                    <span className="text-[#7f8ea2]">-</span>
                    <span>Login</span>
                  </NavLink>
                  <NavLink
                    to={'/Auth/ResetPassword'}
                    className="flex items-center gap-2 rounded-sm px-3 py-2 text-[#9aa8bb] hover:bg-white/5"
                  >
                    <span className="text-[#7f8ea2]">-</span>
                    <span>Reset Password</span>
                  </NavLink>
                </div>
              ) : null}
            </div>
          </nav>

         
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

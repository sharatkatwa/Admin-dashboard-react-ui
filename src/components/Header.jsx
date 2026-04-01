import {
  Bell,
  ChevronDown,
  CircleDot,
  Menu,
  Moon,
  Search,
  Settings,
} from 'lucide-react'

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="flex h-[62px] items-center justify-between border-b border-white/5 bg-[#17202d] px-4 sm:px-6">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="flex h-8 w-8 items-center justify-center rounded text-[#93a0b4] hover:bg-white/5 hover:text-white"
        >
          <Menu size={17} />
        </button>
        <div className="relative hidden w-[240px] md:block">
          <Search size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6e7c91]" />
          <input type="text" placeholder="Search..." className="h-8 w-full rounded-sm border border-white/5 bg-[#1f2a39] pl-9 pr-3 text-[12px] text-white outline-none placeholder:text-[#6e7c91]" />
        </div>
        <div className="hidden items-center gap-5 text-[12px] text-[#8a97ab] lg:flex">
          <button className="flex items-center gap-1 hover:text-white">
            Mega Menu
            <ChevronDown size={12} />
          </button>
          <button className="flex items-center gap-1 hover:text-white">
            Resources
            <ChevronDown size={12} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2">
        <button className="relative flex h-8 w-8 items-center justify-center rounded text-[#93a0b4] hover:bg-white/5 hover:text-white">
          <Bell size={15} />
          <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-[#2f7df6]" />
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded text-[#93a0b4] hover:bg-white/5 hover:text-white">
          <CircleDot size={15} />
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded text-[#93a0b4] hover:bg-white/5 hover:text-white">
          <Moon size={15} />
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded text-[#93a0b4] hover:bg-white/5 hover:text-white">
          <Settings size={15} />
        </button>
        <div className="hidden h-8 w-8 items-center justify-center rounded-sm bg-linear-to-br from-[#f0d1ab] to-[#b77b4f] text-[10px] font-bold text-[#1d2330] sm:flex">
          CH
        </div>
      </div>
    </header>
  )
}

export default Header

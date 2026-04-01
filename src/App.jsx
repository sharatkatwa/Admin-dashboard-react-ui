import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#151d2a] text-[#c7d0dd]">
      <div className="min-h-screen">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main
          className={`min-h-screen min-w-0 transition-[margin] duration-300 ${
            sidebarOpen ? "xl:ml-[246px]" : "xl:ml-0"
          }`}
        >
          <Header onToggleSidebar={() => setSidebarOpen((open) => !open)} />

          <div className="px-4 py-5 sm:px-6">
            <AppRoutes />

            <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-[11px] text-[#728196]">
              <span>AdminKit ©</span>
              <div className="flex items-center gap-3">
                <span>Support</span>
                <span>Help Center</span>
                <span>Privacy</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

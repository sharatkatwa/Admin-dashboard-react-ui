import Analytics from "./screens/Analytics";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-[#151d2a] text-[#c7d0dd]">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="min-w-0 flex-1">
          <Header />

          <div className="px-4 py-5 sm:px-6">
            <Analytics />

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

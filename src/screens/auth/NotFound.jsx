import { useNavigate } from "react-router";

export default function NotFound() {
const navigate = useNavigate()
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#151d2a] px-4">
      <div className="absolute inset-0 " />

      <div className="relative w-full max-w-[760px] rounded-sm border border-white/5 bg-[#1B2635]/95 px-8 py-14 text-center shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#4b90ff]/20 bg-[#4b90ff]/10 text-[26px] font-semibold text-[#78a9ff]">
          404
        </div>

        <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#4b90ff]">
          Page Not Found
        </p>

        <h1 className="mt-4 text-[34px] font-semibold tracking-[-0.04em] text-white">
          We couldn&apos;t find that page
        </h1>

        <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-8 text-[#9fb0c8]">
          The page you&apos;re looking for may have been moved, deleted, or never
          existed in the first place. Let&apos;s get you back to something useful.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button onClick={()=>navigate('/')} className="h-11 min-w-[170px] rounded-sm bg-[#4b80d9] px-5 text-[14px] font-semibold text-white hover:bg-[#5a8de3]">
            Go To Dashboard
          </button>
        
        </div>

        <div className="mt-10 grid gap-4 border-t border-white/5 pt-8 text-left sm:grid-cols-3">
          <div className="rounded-sm border border-white/5 bg-white/[0.02] p-4">
            <p className="text-[12px] font-semibold text-white">Check The URL</p>
            <p className="mt-2 text-[13px] leading-6 text-[#8ea0b8]">
              Make sure the address is typed correctly and doesn&apos;t include old links.
            </p>
          </div>
          <div className="rounded-sm border border-white/5 bg-white/[0.02] p-4">
            <p className="text-[12px] font-semibold text-white">Go Back Home</p>
            <p className="mt-2 text-[13px] leading-6 text-[#8ea0b8]">
              Return to the dashboard and continue from a page you know is available.
            </p>
          </div>
          <div className="rounded-sm border border-white/5 bg-white/[0.02] p-4">
            <p className="text-[12px] font-semibold text-white">Need Help?</p>
            <p className="mt-2 text-[13px] leading-6 text-[#8ea0b8]">
              Reach out to support if you think this page should exist or something broke.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

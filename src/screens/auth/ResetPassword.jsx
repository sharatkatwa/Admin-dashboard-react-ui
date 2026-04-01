import { useNavigate } from "react-router";

export default function ResetPassword() {
const navigate = useNavigate()
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#151d2a] px-4">
      <div className="w-full max-w-[560px] text-center">
        <h1 className="text-[24px] font-semibold text-white">Reset password</h1>
        <p className="mt-2 text-[16px] text-[#a8b4c6]">
          Enter your email to reset your password.
        </p>

        <div className="mt-6 rounded-sm border border-white/5 bg-[#1B2635] p-9 text-left">
          <div>
            <label className="mb-2 block text-[13px] text-[#d7deea]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="h-10 w-full rounded-sm border border-white/10 bg-transparent px-4 text-[14px] text-white outline-none placeholder:text-[#7f8ea2]"
            />
          </div>

          <button className="mt-4 h-10 w-full rounded-sm bg-[#4b80d9] text-[14px] font-semibold text-white hover:bg-[#5a8de3]">
            Reset password
          </button>
        </div>

        <p className="mt-6 text-[14px] text-[#d7deea]">
          Don&apos;t have an account?{" "}
          <span  onClick={() =>navigate('/Auth/Signup')}className="cursor-pointer text-[#4b90ff]">Sign up</span>
        </p>
      </div>
    </div>
  );
}

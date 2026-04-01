import { useNavigate } from "react-router";

export default function Login() {
const navigate = useNavigate()
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#151d2a] px-4">
      <div className="w-full max-w-[520px] text-center">
        <h1 className="text-[24px] font-semibold text-white">Welcome back!</h1>
        <p className="mt-2 text-[16px] text-[#a8b4c6]">
          Sign in to your account to continue
        </p>

        <div className="mt-6 rounded-sm border border-white/5 bg-[#1B2635] p-9 text-left">
          <div className="space-y-3">
            <button className="flex h-9 w-full items-center justify-center rounded-sm bg-[#e55244] text-[13px] font-semibold text-white">
              G Sign in with Google
            </button>
            <button className="flex h-9 w-full items-center justify-center rounded-sm bg-[#4462a8] text-[13px] font-semibold text-white">
              f Sign in with Facebook
            </button>
            <button className="flex h-9 w-full items-center justify-center rounded-sm bg-[#3a3737] text-[13px] font-semibold text-white">
              □ Sign in with Microsoft
            </button>
          </div>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[13px] text-[#c3cddd]">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="space-y-4">
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

            <div>
              <label className="mb-2 block text-[13px] text-[#d7deea]">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="h-10 w-full rounded-sm border border-white/10 bg-transparent px-4 text-[14px] text-white outline-none placeholder:text-[#7f8ea2]"
              />
              <button onClick={()=>navigate('/Auth/ResetPassword')} className="cursor-pointer mt-2 text-[12px] text-[#4b90ff]">
                Forgot password?
              </button>
            </div>

            <label className="flex items-center gap-2 text-[13px] text-[#d7deea]">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-[#4b90ff]"
              />
              Remember me
            </label>

            <button  className="h-10 w-full rounded-sm bg-[#4b80d9] text-[14px] font-semibold text-white hover:bg-[#5a8de3]">
              Sign in
            </button>
          </div>
        </div>

        <p className="mt-6 text-[14px] text-[#d7deea]">
          Don&apos;t have an account?{" "}
          <span onClick={()=>navigate('/Auth/Signup')} className="cursor-pointer text-[#4b90ff]">Sign up</span>
        </p>
      </div>
    </div>
  );
}

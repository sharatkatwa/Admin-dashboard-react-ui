import {
  BriefcaseBusiness,
  Globe,
  Heart,
  House,
  MapPin,
  MessageSquare,
  Share2,
  Send,
} from "lucide-react";

const avatar =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=320&q=80";
const activityOne =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80";
const activityTwo =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80";
const feedOne =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80";
const feedTwo =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80";

export default function Profile() {
  return (
    <div className="space-y-4">
      <h1 className="text-[20px] font-semibold tracking-[-0.02em] text-white">Profile</h1>

      <div className="grid gap-4 xl:grid-cols-[306px_minmax(0,1fr)]">
        <div className="space-y-4">
          <section className="rounded-sm border border-white/5 bg-[#1B2635]">
            <div className="border-b border-white/5 px-4 py-3 text-[12px] font-semibold text-[#d7deea]">
              Profile Details
            </div>

            <div className="px-4 py-6 text-center">
              <img
                src={avatar}
                alt="Christina Mason"
                className="mx-auto h-32 w-32 rounded-full object-cover"
              />
              <h2 className="mt-4 text-[16px] font-semibold text-white">Christina Mason</h2>
              <p className="text-[12px] text-[#94a1b5]">Lead Developer</p>

              <div className="mt-4 flex justify-center gap-2">
                <button className="rounded-sm bg-[#2f7df6] px-3 py-1.5 text-[12px] font-medium text-white">
                  Follow
                </button>
                <button className="inline-flex items-center gap-1 rounded-sm bg-[#2f7df6] px-3 py-1.5 text-[12px] font-medium text-white">
                  <MessageSquare size={13} />
                  Message
                </button>
              </div>
            </div>
          </section>

          <section className="rounded-sm border border-white/5 bg-[#1B2635]">
            <div className="border-b border-white/5 px-4 py-3 text-[12px] font-semibold text-[#d7deea]">
              Skills
            </div>
            <div className="flex flex-wrap gap-2 px-4 py-4">
              {["HTML", "JavaScript", "Sass", "Angular", "Vue", "React", "Redux", "UI", "UX"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-sm bg-[#2f7df6] px-2 py-1 text-[11px] font-medium text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-sm border border-white/5 bg-[#1B2635]">
            <div className="border-b border-white/5 px-4 py-3 text-[12px] font-semibold text-[#d7deea]">
              About
            </div>
            <div className="space-y-3 px-4 py-4 text-[13px] text-[#c3cddd]">
              <div className="flex items-center gap-2">
                <House size={14} className="text-[#95a3b6]" />
                <span>
                  Lives in <span className="text-[#4b90ff]">San Francisco, SA</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BriefcaseBusiness size={14} className="text-[#95a3b6]" />
                <span>
                  Works at <span className="text-[#4b90ff]">GitHub</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#95a3b6]" />
                <span>
                  From <span className="text-[#4b90ff]">Boston</span>
                </span>
              </div>
            </div>
          </section>

          <section className="rounded-sm border border-white/5 bg-[#1B2635]">
            <div className="border-b border-white/5 px-4 py-3 text-[12px] font-semibold text-[#d7deea]">
              Elsewhere
            </div>
            <div className="space-y-3 px-4 py-4 text-[13px]">
              <div className="flex items-center gap-2 text-[#4b90ff]"><Globe size={14} className="text-[#95a3b6]" /> staciehall.co</div>
              <div className="flex items-center gap-2 text-[#4b90ff]"><Send size={14} className="text-[#95a3b6]" /> Twitter</div>
              <div className="flex items-center gap-2 text-[#4b90ff]"><Globe size={14} className="text-[#95a3b6]" /> Facebook</div>
              <div className="flex items-center gap-2 text-[#4b90ff]"><Share2 size={14} className="text-[#95a3b6]" /> Instagram</div>
              <div className="flex items-center gap-2 text-[#4b90ff]"><Share2 size={14} className="text-[#95a3b6]" /> LinkedIn</div>
            </div>
          </section>
        </div>

        <section className="rounded-sm border border-white/5 bg-[#1B2635]">
          <div className="border-b border-white/5 px-4 py-3 text-[12px] font-semibold text-[#d7deea]">
            Activities
          </div>

          <div className="space-y-0 px-4">
            <div className="border-b border-white/5 py-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <img src={activityTwo} alt="" className="h-8 w-8 rounded-full object-cover" />
                  <div>
                    <p className="text-[13px] text-[#b8c3d3]">
                      <span className="font-semibold text-[#d7deea]">Vanessa Tucker</span> started following <span className="font-semibold text-[#d7deea]">Christina Mason</span>
                    </p>
                    <p className="mt-1 text-[12px] text-[#8694a9]">Today 7:51 pm</p>
                  </div>
                </div>
                <span className="text-[12px] text-[#8694a9]">5m ago</span>
              </div>
            </div>

            <div className="border-b border-white/5 py-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <img src={activityOne} alt="" className="h-8 w-8 rounded-full object-cover" />
                  <div>
                    <p className="text-[13px] text-[#b8c3d3]">
                      <span className="font-semibold text-[#d7deea]">Charles Hall</span> posted something on <span className="font-semibold text-[#d7deea]">Christina Mason&apos;s</span> timeline
                    </p>
                    <p className="mt-1 text-[12px] text-[#8694a9]">Today 7:21 pm</p>
                    <div className="mt-3 border border-white/10 px-3 py-3 text-[13px] leading-6 text-[#95a3b6]">
                      Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                    </div>
                    <button className="mt-3 inline-flex items-center gap-1 rounded-sm bg-[#ef445b] px-3 py-1.5 text-[12px] font-medium text-white">
                      <Heart size={13} />
                      Like
                    </button>
                  </div>
                </div>
                <span className="text-[12px] text-[#8694a9]">30m ago</span>
              </div>
            </div>

            <div className="border-b border-white/5 py-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <img src={avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
                  <div>
                    <p className="text-[13px] text-[#b8c3d3]">
                      <span className="font-semibold text-[#d7deea]">Christina Mason</span> posted a new blog
                    </p>
                    <p className="mt-1 text-[12px] text-[#8694a9]">Today 6:35 pm</p>
                  </div>
                </div>
                <span className="text-[12px] text-[#8694a9]">1h ago</span>
              </div>
            </div>

            <div className="border-b border-white/5 py-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <img src={activityOne} alt="" className="h-8 w-8 rounded-full object-cover" />
                  <div>
                    <p className="text-[13px] text-[#b8c3d3]">
                      <span className="font-semibold text-[#d7deea]">William Harris</span> posted two photos on <span className="font-semibold text-[#d7deea]">Christina Mason&apos;s</span> timeline
                    </p>
                    <p className="mt-1 text-[12px] text-[#8694a9]">Today 5:12 pm</p>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      <img src={feedOne} alt="" className="h-36 w-full object-cover" />
                      <img src={feedTwo} alt="" className="h-36 w-full object-cover" />
                    </div>
                    <button className="mt-3 inline-flex items-center gap-1 rounded-sm bg-[#ef445b] px-3 py-1.5 text-[12px] font-medium text-white">
                      <Heart size={13} />
                      Like
                    </button>
                  </div>
                </div>
                <span className="text-[12px] text-[#8694a9]">3h ago</span>
              </div>
            </div>

            <div className="py-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <img src={activityOne} alt="" className="h-8 w-8 rounded-full object-cover" />
                  <div>
                    <p className="text-[13px] text-[#b8c3d3]">
                      <span className="font-semibold text-[#d7deea]">William Harris</span> started following <span className="font-semibold text-[#d7deea]">Christina Mason</span>
                    </p>
                    <p className="mt-1 text-[12px] text-[#8694a9]">Yesterday 3:12 pm</p>
                    <div className="mt-3 flex items-center gap-3 border border-white/10 px-3 py-3 text-[13px] text-[#95a3b6]">
                      <img src={avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
                      <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
                    </div>
                  </div>
                </div>
                <span className="text-[12px] text-[#8694a9]">1d ago</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

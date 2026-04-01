import { CheckSquare, MoreHorizontal, Plus, Square } from "lucide-react";

const avatar1 =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80";
const avatar2 =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80";
const avatar3 =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80";
const avatar4 =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80";

function TaskCard({ text, avatar, checked = false }) {
  return (
    <div className="rounded-sm border border-white/10 bg-[#2f3c4f] p-4">
      <div className="flex items-start justify-between gap-3">
        <p className="max-w-[85%] text-[13px] leading-8 text-[#d0d7e3]">{text}</p>
        <button type="button" className="mt-0.5 text-[#c9d3e2]">
          {checked ? <CheckSquare size={15} /> : <Square size={15} />}
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button className="rounded-sm bg-[#4b80d9] px-3 py-1.5 text-[12px] font-medium text-white">
          View
        </button>
        <img src={avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
      </div>
    </div>
  );
}

function Column({ title, description, cards, addButton = false }) {
  return (
    <section className="rounded-sm border border-white/5 bg-[#1B2635] p-4">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="text-[16px] font-semibold text-[#d7deea]">{title}</h2>
        <button className="text-[#95a3b6]">
          <MoreHorizontal size={16} />
        </button>
      </div>
      <p className="mb-6 text-[13px] text-[#8f9caf]">{description}</p>

      <div className="space-y-4">
        {cards}
        {addButton ? (
          <button className="h-8 w-full rounded-sm bg-[#4b80d9] text-[13px] font-semibold text-white hover:bg-[#5a8de3]">
            Add new task
          </button>
        ) : null}
      </div>
    </section>
  );
}

export default function Tasks() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-[22px] font-semibold text-white">Tasks</h1>
          <span className="rounded-sm bg-[#4b80d9] px-2 py-1 text-[11px] font-semibold text-white">
            Pro Component
          </span>
        </div>

        <button className="inline-flex items-center gap-2 self-start rounded-sm bg-[#4b80d9] px-4 py-2 text-[14px] font-semibold text-white hover:bg-[#5a8de3] xl:self-auto">
          <Plus size={16} />
          New task
        </button>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <Column
          title="Backlog"
          description="Nam pretium turpis et arcu. Duis arcu."
          cards={[
            <TaskCard
              key="b1"
              text="Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada."
              avatar={avatar1}
              checked
            />,
            <TaskCard
              key="b2"
              text="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum."
              avatar={avatar4}
              checked
            />,
            <TaskCard
              key="b3"
              text="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis."
              avatar={avatar3}
            />,
            <TaskCard
              key="b4"
              text="In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis tristique."
              avatar={avatar2}
            />,
            <TaskCard
              key="b5"
              text="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum."
              avatar={avatar1}
            />,
          ]}
        />

        <Column
          title="In Progress"
          description="Nam pretium turpis et arcu. Duis arcu."
          addButton
          cards={[
            <TaskCard
              key="p1"
              text="Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada."
              avatar={avatar1}
            />,
            <TaskCard
              key="p2"
              text="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis."
              avatar={avatar3}
            />,
            <TaskCard
              key="p3"
              text="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum."
              avatar={avatar4}
            />,
          ]}
        />

        <Column
          title="Completed"
          description="Nam pretium turpis et arcu. Duis arcu."
          cards={[
            <TaskCard
              key="c1"
              text="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum."
              avatar={avatar4}
            />,
            <TaskCard
              key="c2"
              text="In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis tristique."
              avatar={avatar2}
            />,
            <TaskCard
              key="c3"
              text="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis."
              avatar={avatar3}
            />,
            <TaskCard
              key="c4"
              text="Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada."
              avatar={avatar1}
            />,
            <TaskCard
              key="c5"
              text="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis."
              avatar={avatar3}
            />,
          ]}
        />
      </div>
    </div>
  );
}

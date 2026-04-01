import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "../styles/fullcalendar.css";

const events = [
  {
    title: "All Day Event",
    start: "2021-07-01",
    allDay: true,
  },
  {
    title: "Long Event",
    start: "2021-07-07",
    end: "2021-07-10",
  },
  {
    title: "Conference",
    start: "2021-07-11",
    end: "2021-07-13",
  },
  {
    title: "10:30a Meeting",
    start: "2021-07-12T10:30:00",
  },
  {
    title: "12p Lunch",
    start: "2021-07-12T12:00:00",
  },
  {
    title: "2:30p Meeting",
    start: "2021-07-12T14:30:00",
  },
  {
    title: "7a Birthday Party",
    start: "2021-07-13T07:00:00",
  },
  {
    title: "4p Repeating Event",
    start: "2021-07-09T16:00:00",
  },
  {
    title: "4p Repeating Event",
    start: "2021-07-16T16:00:00",
  },
];

export default function Calendar() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h1 className="text-[22px] font-semibold text-white">Calendar</h1>
        <span className="rounded-sm bg-[#4b80d9] px-2 py-1 text-[11px] font-semibold text-white">
          Pro Component
        </span>
      </div>

      <section className="rounded-sm border border-white/5 bg-[#1B2635] p-4">
        <div className="mb-6">
          <h2 className="text-[16px] font-semibold text-[#d7deea]">FullCalendar</h2>
          <p className="mt-1 text-[14px] text-[#8f9caf]">
            Open source JavaScript plugin for a full-sized, drag & drop event calendar.
          </p>
        </div>

        <div className="calendar-page">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            initialDate="2021-07-01"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            buttonText={{
              today: "today",
              month: "month",
              week: "week",
              day: "day",
            }}
            events={events}
            height="auto"
            editable
            droppable
            dayMaxEventRows={3}
          />
        </div>
      </section>
    </div>
  );
}

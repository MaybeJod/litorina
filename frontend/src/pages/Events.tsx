import { useEffect, useState } from "react";
import { EventCard } from "../components/custom/EventCard";

interface Event {
  id: number;
  title: string;
  description: { type: string; children: { text: string }[] }[];
  eventDateTime: string;
  documentId: string;
}

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("https://litorina.onrender.com/api/events")
      .then((res) => res.json())
      .then((data) => {
        console.log("API RAW RESPONSE:", data);
        const formatted = data.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          eventDateTime: item.eventDateTime,
          documentId: item.documentId || item.id.toString(),
        }));
        setEvents(formatted);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, []);

  return (
    <section className="w-full">
      <img
        src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Courses banner"
        className="object-cover w-full aspect-4/1"
      />
      {/* title */}
      <h1 className="text-6xl text-center m-6 font-bold">EVENTS</h1>

      {/* Events Grid */}
      <div className="container mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            description={event.description}
            eventDateTime={event.eventDateTime}
            documentId={event.documentId}
          />
        ))}
      </div>
    </section>
  );
};

export default EventsPage;
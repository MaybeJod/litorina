// src/components/eventInfoText/EventInfoText.tsx
import { useEffect, useState } from "react";

interface EventInfoProps {
  documentId: string;
}

interface EventData {
  title: string;
  description: { type: string; children: { text: string }[] }[];
  eventDateTime: string;
  imageUrl?: string;
}

const EventInfoText = ({ documentId }: EventInfoProps) => {
  const [event, setEvent] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://litorina.onrender.com/api/events/${documentId}`)
      .then((res) => res.json())
      .then((data) => {
        const item = data.data;
        setEvent({
          title: item.title,
          description: item.description,
          eventDateTime: item.eventDateTime,
          imageUrl: item.imageUrl ?? "https://placehold.co/600x300",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching event:", err);
        setLoading(false);
      });
  }, [documentId]);

  if (loading) return <p>Loading...</p>;
  if (!event) return <p>Event not found.</p>;

  const formattedDate = new Date(event.eventDateTime).toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return (
    <div className="space-y-6">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-64 object-cover rounded-lg shadow"
      />
      <h2 className="text-3xl font-bold">{event.title}</h2>
      <p className="text-gray-500">{formattedDate}</p>
      <div className="text-gray-800 leading-relaxed">
        {event.description.map((block, idx) => (
          <p key={idx}>
            {block.children.map((child, i) => (
              <span key={i}>{child.text}</span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
};

export default EventInfoText;

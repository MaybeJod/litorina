
import { useParams } from "react-router-dom";
import EventInfoText from "@/components/eventInfoText/EventInfoText";

const EventPage = () => {
  const { documentId } = useParams<{ documentId: string }>();

  if (!documentId) return <p>No event ID provided.</p>;

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <EventInfoText documentId={documentId} />
    </main>
  );
};

export default EventPage;

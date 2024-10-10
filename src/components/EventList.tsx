import TravelEvent from "../models/TravelEvent";
import EventCard from "./EventCard";
import "./EventList.css";

export interface Props {
  travelEvents: TravelEvent[] | null;
}

const EventList = ({ travelEvents }: Props) => {
  return (
    <div className="EventList">
      <h2>List of Events </h2>
      {travelEvents ? (
        <ul>
          {travelEvents.map((travelEvent) => (
            <EventCard key={travelEvent.id} travelEvent={travelEvent} />
          ))}
        </ul>
      ) : (
        <p> loading...</p>
      )}
      {/* maybe add a gif */}
    </div>
  );
};

export default EventList;
// all events

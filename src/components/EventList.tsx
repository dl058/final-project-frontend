import TravelEvent from "../models/TravelEvent";
import EventCard from "./EventCard";
import "./EventList.css";

export interface Props {
  travelEvents: TravelEvent[];
}

const EventList = ({ travelEvents }: Props) => {
  return (
    <div className="EventList">
      <h2>List of Events </h2>
      <ul>
        {travelEvents.map((el) => (
          <EventCard key={el.id} />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
// all events

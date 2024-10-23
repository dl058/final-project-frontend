import Links from "../models/Links";
import TravelEvent from "../models/TravelEvent";
import EventCard from "./EventCard";
import "./EventList.css";

export interface Props {
  travelEvents: TravelEvent[] | null;
  links: Links | null;
  pageChange: (uri: string) => void;
}

const EventList = ({ travelEvents, links, pageChange }: Props) => {
  console.log(links);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      {links && (
        <div className="pagination">
          <button
            onClick={() => {
              pageChange(links.first.href);
              scrollToTop();
            }}
          >
            First
          </button>
          <button
            onClick={() => {
              pageChange(links.next.href);
              scrollToTop();
            }}
          >
            Next
          </button>
          <button
            onClick={() => {
              pageChange(links.last.href);
              scrollToTop();
            }}
          >
            Last
          </button>
        </div>
      )}
      {/* maybe add a gif */}
    </div>
  );
};

export default EventList;
// all events

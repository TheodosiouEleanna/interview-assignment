import React, { useEffect, useState } from "react";
import { apiPath } from "../../../constants/constants";
import { ICalendarEvent } from "../../../types/interfaces";
import Card from "../../RentalList/Card/Card";
import { getData } from "../../../utils/functions/functions";
import Loader from "../../Loader/Loader";

interface ICalendarStateProps {
  object: string;
  data: ICalendarEvent[];
}

const CalendarEvents = ({ id }: { id: string }) => {
  const [calendarEvents, setCalendarEvents] = useState<ICalendarStateProps>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const dataCall = async () => {
      try {
        const data = await getData({
          resourcePath: `${apiPath}/rentals/${id}/calendar-events`,
        });
        setCalendarEvents(data as ICalendarStateProps);
        // setCalendarEvents({ object: "", data: [] });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    dataCall();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      style={{
        margin: "30px",
      }}
    >
      {calendarEvents?.data?.length ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            margin: "20px",
          }}
        >
          {calendarEvents?.data.map((event) => (
            <Card title={event.title} item={event} hideButton />
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          No calendar events
        </div>
      )}
    </div>
  );
};

export default CalendarEvents;

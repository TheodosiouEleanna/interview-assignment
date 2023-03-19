import React, { useEffect, useState } from "react";
import { apiPath, API_KEY } from "../../../constants/constants";
import { ICalendarEvent } from "../../../types/interfaces";
import { displayData } from "../../RentalList/Card/Card.tsx";
import Card from "../../RentalList/Card/Card.tsx";
import { getData } from "../../../functions/functions.ts";
import Loader from "../../Loader/Loader.tsx";

interface ICalendarStateProps {
  object: string;
  data: ICalendarEvent[];
}

const CalendarEvents = ({ id }) => {
  const [calendarEvents, setCalendarEvents] = useState<ICalendarStateProps>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const dataCall = async () => {
      try {
        const data = await getData({
          resourcePath: `${apiPath}/rentals/${id}/calendar-events`,
        });
        setCalendarEvents(data as ICalendarStateProps);
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          margin: "20px",
        }}
      >
        {calendarEvents?.data.length
          ? calendarEvents?.data.map((event) => (
              <Card title={event.title} item={event} hideButton />
            ))
          : "No calendar events"}
      </div>
    </div>
  );
};

export default CalendarEvents;

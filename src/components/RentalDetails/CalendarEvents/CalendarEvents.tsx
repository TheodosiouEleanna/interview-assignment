import React, { useEffect, useState } from "react";
import { apiPath, API_KEY } from "../../../constants/constants";
import { ICalendarEvent } from "../../../types/interfaces";

const displayCalendarEvents = (event: ICalendarEvent) => {
  return Object.values(event).map((value, index) => {
    if (value === null) return;
    if (typeof value === "object")
      return <div key={index}>{JSON.stringify(value)}</div>;
    return <div key={index}>{value}</div>;
  });
};

const CalendarEvents = ({ id }) => {
  const [calendarEvents, setCalendarEvents] = useState<ICalendarEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${apiPath}/rentals/${id}/calendar-events`, {
      headers: {
        Authorization: `${API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setLoading(false);
        setCalendarEvents(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div>
      <h2>CalendarEvents</h2>
      {calendarEvents.length
        ? calendarEvents.map((event) => displayCalendarEvents(event))
        : "No calendar events"}
    </div>
  );
};

export default CalendarEvents;

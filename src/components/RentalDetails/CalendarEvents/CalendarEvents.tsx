import React, { useEffect, useState } from "react";
import { apiPath, API_KEY } from "../../../constants/constants";
import { ICalendarEvent } from "../../../types/interfaces";
import { displayData } from "../../RentalList/Card/Card.tsx";
import Card from "../../RentalList/Card/Card.tsx";
import { getData } from "../../../functions/functions.ts";

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
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        margin: "30px",
      }}
    >
      <div style={{ marginLeft: "30px" }}>
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

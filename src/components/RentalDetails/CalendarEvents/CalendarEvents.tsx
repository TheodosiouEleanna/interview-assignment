import React, { useEffect, useState } from "react";
import { apiPath, API_KEY } from "../../../constants/constants";

const CalendarEvents = ({ id }) => {
  const [calendarEvents, setCalendarEvents] = useState();
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
    </div>
  );
};

export default CalendarEvents;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiPath, API_KEY } from "../../constants/constants";
import { IRental } from "../../types/interfaces";
import CalendarEvents from "./CalendarEvents/CalendarEvents.tsx";

const RentalDetails = () => {
  const { rentalId } = useParams();
  const [rental, setRental] = useState<IRental>();
  const [loading, setLoading] = useState<boolean>(true);
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    fetch(`${apiPath}/rentals/${rentalId}`, {
      headers: {
        Authorization: `${API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setLoading(false);
        setRental(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [rentalId]);

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
  console.log(rental);

  return (
    <div className={expanded ? "details expanded" : "details"} style={{}}>
      <div style={{ margin: "40px" }}>
        <h2>Rental Details</h2>
        {rental && (
          <>
            <h4>{rental.check_in_time}</h4>
            <h4>{rental.checkout_time}</h4>
            <h4>{rental.city}</h4>
            <h4>{rental.country}</h4>
            <h4>{rental.currency}</h4>
            <h4>{rental.name}</h4>
            <h4>{rental.postal_code}</h4>
            <h4>{rental.rates_confirmed}</h4>
            <h4>{rental.status}</h4>
          </>
        )}
        <button className='btn btn-primary' onClick={toggleExpanded}>
          {expanded ? "Collapse" : "Expand"}
        </button>
      </div>
      {expanded && (
        <div>
          <CalendarEvents id={rentalId} />
        </div>
      )}
    </div>
  );
};

export default RentalDetails;

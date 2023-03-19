import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiPath } from "../../constants/constants";
import { getData } from "../../functions/functions.ts";
import { IRental } from "../../types/interfaces";
import Card from "../RentalList/Card/Card.tsx";
import CalendarEvents from "./CalendarEvents/CalendarEvents.tsx";

const RentalDetails = () => {
  const { rentalId } = useParams();
  const [rental, setRental] = useState<IRental>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const dataCall = async () => {
      try {
        const data = await getData({
          resourcePath: `${apiPath}/rentals/${rentalId}`,
        });
        setRental(data as IRental);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    dataCall();
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
    <div style={{ overflow: "auto" }}>
      <div style={{ margin: "30px" }}>
        <div style={{ padding: "20px" }}>
          <h2>Rental Details</h2>
        </div>
        <div style={{ marginLeft: "30px" }}>
          {rental && <Card item={rental} hideButton title={rental.name} />}
        </div>
        <div style={{ padding: "20px" }}>
          <h2>Upcoming Calendar Events</h2>
        </div>
      </div>
      <CalendarEvents id={rentalId} />
    </div>
  );
};

export default RentalDetails;

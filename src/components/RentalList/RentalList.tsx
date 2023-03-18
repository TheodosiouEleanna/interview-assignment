import React, { useEffect, useState } from "react";
import { apiPath, API_KEY } from "../../constants/constants";
import { IRental } from "../../types/interfaces";
import { RentalCard } from "./RentalCard.tsx/RentalCard.tsx";

const RentalList = () => {
  const [rentals, setRentals] = useState<IRental[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${apiPath}/rentals`, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setLoading(false);
        setRentals(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log("render", rentals, rentals.length);

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
        display: "flex",
        width: "100%",
        height: "100%",
        paddingLeft: "30px",
        overflow: "auto",
      }}
    >
      <div
        className='list-container'
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {rentals.length
          ? rentals.map((rental) => (
              <RentalCard rental={rental} key={rental.id} />
            ))
          : "no rentals"}
      </div>
    </div>
  );
};

export default RentalList;

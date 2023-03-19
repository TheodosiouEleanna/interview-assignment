import React, { useEffect, useState } from "react";
import { apiPath } from "../../constants/constants";
import { getData } from "../../functions/functions.ts";
import { IRental } from "../../types/interfaces";
import Card from "./Card/Card.tsx";

interface IRentalsStateProps {
  object: string;
  data: IRental[];
}

const RentalList = () => {
  const [rentals, setRentals] = useState<IRentalsStateProps>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const dataCall = async () => {
      try {
        const data = await getData({
          resourcePath: `${apiPath}/rentals`,
        });
        setRentals(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    dataCall();
  }, []);

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
        <div
          style={{
            marginTop: "40px",
          }}
        >
          <h2>{rentals?.object.length ? `${rentals?.object}s` : "Rentals"}</h2>
        </div>

        {rentals?.data.length ? (
          rentals.data.map((rental) => (
            <Card item={rental} key={rental.id} title={rental.name} />
          ))
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
            No rentals
          </div>
        )}
      </div>
    </div>
  );
};

export default RentalList;

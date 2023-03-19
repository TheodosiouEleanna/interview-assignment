import React, { useEffect, useState } from "react";
import { apiPath } from "../../constants/constants";
import { getData } from "../../functions/functions";
import { IRental } from "../../types/interfaces";
import Loader from "../Loader/Loader";
import Title from "../Title/Title";
import Card from "./Card/Card";

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
        setRentals(data as IRentalsStateProps);
        // setRentals({ object: "", data: [] });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    dataCall();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "auto",
      }}
    >
      <div
        style={{
          width: "80%",
          marginLeft: "40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title
          title={rentals?.object.length ? `${rentals?.object}s` : "Rentals"}
          style={{
            marginTop: "40px",
          }}
        />

        {rentals?.data.length ? (
          rentals.data.map((rental) => (
            <Card item={rental} key={rental.id} title={rental.name || ""} />
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

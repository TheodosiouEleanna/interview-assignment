import React, { useEffect, useState } from "react";
import { API_KEY } from "../../constants/constants";

interface IRental {
  check_in_time: string;
  checkout_time: string;
  city: string | null;
  country: string;
  currency: string;
  id: string;
  image_path: string;
  latitude: number | null;
  longitude: number | null;
  name: string | null;
  object: string | null;
  postal_code: string;
  rates_confirmed: true;
  status: string;
  time_zone: string;
  url: string;
}

const RentalList = () => {
  const [rentals, setRentals] = useState<IRental[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(
      ` https://eric.hosthub.com/api/2019-03-01/rentals?Authorization=${API_KEY}`,
      {
        headers: {
          Authorization: `${API_KEY}`,
        },
      }
    )
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
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        paddingLeft: "30px",
        backgroundColor: "pink",
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
              <div
                style={{
                  height: "30vh",
                  backgroundColor: "white",
                  padding: "30px",
                  margin: "30px",
                }}
                key={rental.id}
              >
                <div
                  className='content'
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    src={rental.image_path}
                    style={{ width: "300px", height: "200px" }}
                  />
                  <div
                    className='details'
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <h4>{rental.check_in_time}</h4>
                    <h4>{rental.checkout_time}</h4>
                    <h4>{rental.city}</h4>
                    <h4>{rental.country}</h4>
                    <h4>{rental.currency}</h4>
                    <h4>{rental.postal_code}</h4>
                    <h4>{rental.rates_confirmed}</h4>
                    <h4>{rental.status}</h4>
                    <h4>{rental.time_zone}</h4>
                    <h4>{rental.name}</h4>
                  </div>
                </div>
              </div>
            ))
          : "no rentals"}
      </div>
    </div>
  );
};

export default RentalList;

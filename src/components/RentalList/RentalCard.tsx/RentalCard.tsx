import React from "react";
import { Button } from "../../Settings/Settings.tsx";
import { useNavigate } from "react-router-dom";

export const RentalCard = ({ rental }) => {
  const navigate = useNavigate();

  const onClickDetails = () => {
    navigate(`/rentals/${rental.id}`);
  };
  return (
    <div
      style={{
        minHeight: "300px",
        backgroundColor: "rgb(241, 241, 241)",
        position: "relative",
        borderRadius: "10px",
        margin: "40px",
      }}
      key={rental.id}
    >
      <div
        className='content'
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            className='image-container'
            style={{
              backgroundImage: `url(${rental.image_path})`,
              borderRadius: "10px 0px 0px 10px",
            }}
          >
            {/* <img
            // src={rental.image_path}
            //   style={{ width: "300px", height: "200px" }}
            alt='rental'
          /> */}
          </div>
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
            <h4>{rental.status}</h4>

            <Button
              label='More Details'
              style={{ bottom: 30, right: 30 }}
              onClick={onClickDetails}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

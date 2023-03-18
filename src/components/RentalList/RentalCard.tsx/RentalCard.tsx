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
        display: "flex",
        backgroundColor: "rgb(241, 241, 241)",
        position: "relative",
        borderRadius: "10px",
        margin: "40px",
      }}
    >
      <div className='image-container' style={{}}>
        <img
          src={rental.image_path}
          alt='rental'
          style={{
            borderRadius: "10px 0px 0px 10px",
            width: "400px",
            height: "400px",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "80%",
          borderRadius: " 10px",
          margin: "40px",
          marginLeft: "30",
        }}
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
      </div>

      <Button
        label='More Details'
        style={{ position: "absolute", bottom: 30, right: 30 }}
        onClick={onClickDetails}
      />
    </div>
  );
};

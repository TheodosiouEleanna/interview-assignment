import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiPath } from "../../constants/constants";
import { getData } from "../../utils/functions/functions";
import { IRental } from "../../types/interfaces";
import Loader from "../Loader/Loader";
import Card from "../RentalList/Card/Card";
import Title from "../Title/Title";
import CalendarEvents from "./CalendarEvents/CalendarEvents";
import PageWrapper from "../PageWrapper/PageWrapper";

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
    return <Loader />;
  }

  return (
    <PageWrapper title='Rental Details'>
      <>
        <div style={{ marginLeft: "30px" }}>
          {rental && (
            <Card item={rental} hideButton title={rental.name || ""} />
          )}
        </div>
        <Title title='Upcoming Calendar Events' style={{ marginTop: "30px" }} />
        <CalendarEvents id={rentalId || ""} />
      </>
    </PageWrapper>
  );
};

export default RentalDetails;

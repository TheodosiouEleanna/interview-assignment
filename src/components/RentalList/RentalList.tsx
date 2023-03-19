import React, { useEffect, useState } from "react";
import { apiPath } from "../../constants/constants";
import { getData } from "../../utils/functions/functions";
import { IRental } from "../../types/interfaces";
import Loader from "../Loader/Loader";
import Card from "./Card/Card";
import Divider from "../Divider/Divider";
import PageWrapper from "../PageWrapper/PageWrapper";
import NoContent from "../NoConent/NoContent";

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
    <PageWrapper
      title={rentals?.object.length ? `${rentals?.object}s` : "Rentals"}
    >
      <>
        {rentals?.data.length ? (
          rentals.data.map((rental) => (
            <Card item={rental} key={rental.id} title={rental.name || ""} />
          ))
        ) : (
          <NoContent message='No Rentals Found' />
        )}
        <Divider />
      </>
    </PageWrapper>
  );
};

export default RentalList;

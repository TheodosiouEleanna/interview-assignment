import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import Title from "../../Title/Title";

export const displayData = (rental: {
  [name: string]: any;
}): (JSX.Element | null)[] => {
  const exclude = ["image_path", "url", "id", "object", "name"];
  return Object.entries(rental)
    .map(([key, value]) => {
      const formattedString = key
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      if (
        value === null ||
        exclude.includes(key) ||
        value === "" ||
        typeof value === "object" ||
        typeof value === "boolean"
      )
        return null;
      return (
        <div>
          <label>{`${formattedString}:`}</label> <span>{value}</span>
        </div>
      );
    })
    .filter((el) => el !== null);
};

const Card = ({
  item,
  title,
  style,
  content,
  hideButton,
}: {
  item: { [name: string]: any };
  title: string;
  style?: React.CSSProperties;
  content?: JSX.Element;
  hideButton?: boolean;
}) => {
  const navigate = useNavigate();

  const onClickDetails = () => {
    navigate(`/rentals/${item.id}`);
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "rgb(241, 241, 241)",
        position: "relative",
        boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
        margin: "30px",
        ...style,
      }}
    >
      {item?.image_path && (
        <div style={{ maxWidth: "350px", minHeight: "320px" }}>
          <img
            src={item?.image_path}
            alt='rental'
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "80%",
          margin: "30px",
          marginLeft: "30",
        }}
      >
        {title && <Title title={title} style={{ marginBottom: "30px" }} />}
        {content ? content : null}
        {item ? displayData(item) : null}
      </div>

      {!hideButton && (
        <Button
          label='More Details'
          style={{ position: "absolute", bottom: 30, right: 30 }}
          onClick={onClickDetails}
        />
      )}
    </div>
  );
};

export default Card;

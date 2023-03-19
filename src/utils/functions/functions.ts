import { API_KEY } from "../../constants/constants";

export const getData = ({
  resourcePath,
}: {
  resourcePath: string;
}): { [name: string]: any } => {
  return new Promise((resolve) => {
    fetch(resourcePath, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
};

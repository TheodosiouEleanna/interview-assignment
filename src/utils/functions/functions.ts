export const getData = ({
  resourcePath,
}: {
  resourcePath: string;
}): Promise<{ [name: string]: any }> => {
  const API_KEY = localStorage.getItem("apiKey") || "";
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

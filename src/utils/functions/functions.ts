export const getData = ({
  resourcePath,
}: {
  resourcePath: string;
}): Promise<{ [name: string]: any }> => {
  const apiKey = localStorage.getItem("apiKey") || "";
  const fullName = localStorage.getItem("fullName") || "";
  return new Promise((resolve) => {
    if (!apiKey || !fullName) {
      return resolve({});
    } else {
      fetch(resourcePath, {
        headers: {
          [fullName]: apiKey,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  });
};

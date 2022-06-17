export const useFetchFunc = (user) => {
  const url = "https://expensable-api.herokuapp.com/";

  const login = async (user) => {
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify(user),
      },
    });
    const data = await response.json();
    console.log(data);

    return data;
  };

  return [login];
};

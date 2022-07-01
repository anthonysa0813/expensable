export const getApi = async (url) => {
  const token = sessionStorage.getItem("token");
  const response = await fetch(url, {
    headers: {
      Authorization: `Token token=${token}`,
    },
  });
  const data = await response.json();
  return data;
};

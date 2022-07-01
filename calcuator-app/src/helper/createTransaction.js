export const createTransactionFunc = async (id_category, amount, token) => {
  let f = new Date();
  const response = await fetch(
    `https://expensable-api.herokuapp.com/categories/${id_category}/transactions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token token=${token}`,
      },
      body: JSON.stringify({
        amount,
        date: `${f.getFullYear()}-${f.getMonth()}-${f.getDate()}`,
      }),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};

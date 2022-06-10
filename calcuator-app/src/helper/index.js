export const formatNumber = (num) => {
  const arrNum = String(num).split(".");
  if (arrNum.length == 1) {
    return num;
  } else {
    return Number(num.toFixed(2));
  }
};

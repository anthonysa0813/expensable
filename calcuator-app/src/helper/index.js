export const formatNumber = (num) => {
  // console.log(num);
  // console.log(typeof num);
  //
  const arrNum = String(num).split(".");
  if (arrNum.length == 1) {
    return num;
  } else {
    return Number(num.toFixed(2));
  }
};

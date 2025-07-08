export const formatMoney = (_amount) => {
  const amount = Number(_amount);

  if (isNaN(amount)) return "";

  const wholeN = [...amount.toString().split(".")[0]];
  let decimalN = amount.toFixed(2).toString().split(".")[1];

  let places = wholeN.length;

  while (places > 3) {
    wholeN.splice(places - 3, 0, ",");
    places -= 3;
  }

  return "PHP " + wholeN.join("") + "." + decimalN;
};

// task Gasoline
// make a program that asks the price of the gas
// if > 10 liter can purchase ==> 'good, you can escape now', if less 'ups, you have to stay there'

let button = document.getElementById("button");
const checkYour = () => {
  let literPurchase;
  let gas = document.getElementById("gas").value;
  let money = document.getElementById("money").value;
  literPurchase = money / gas;
  document.getElementById("result").textContent = literPurchase;
  console.log(literPurchase);
  literPurchase > 10
    ? alert("Good, you can escape now")
    : alert("ups, you have to stay there");
};

button.addEventListener("click", checkYour);

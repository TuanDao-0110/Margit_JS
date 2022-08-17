// Make a program that asks for three numbers from the user. The program prints out the sum of the numbers if any of the numbers are positive. If all the numbers are positive, also print out multiplication. If all numbers are negative, the text “only negatives” is printed. Handle zero as positive in this assignment.

//1. create  a form to ask user to input the age value
let submitForm = document.getElementById("random_form");
// 2. submit the age value to the systerm
submitForm.addEventListener("submit", (e) => {
  let threeNumber = [(firstNumber = 0), (secondNumber = 0), (lastNumber = 0)];
  let numberPosNumber;
  let result = document.getElementById("result");
  // 2.1 prevent the page reload againt
  e.preventDefault();

  numberArr = document.getElementsByClassName("number");

  for (let i = 0; i < numberArr.length; i++) {
    numberArr[i].value
      ? (threeNumber[i] = numberArr[i].value)
      : alert("please input value of " + (i + 1) + " number");
  }
  numberPosNumber = checkValue(threeNumber);
  if (numberPosNumber === 3)
    return (result.innerHTML = valueAllPosNumber(threeNumber));
  if (numberPosNumber < 3 && numberPosNumber > 0)
    return (result.innerHTML = valueOnePosNumber(threeNumber));
  if (numberPosNumber === 0) return (result.innerHTML = valueAllNevNumber());
});
//3. check the value
const checkValue = (threeNumber) => {
  let numberPosNumber = 0;

  threeNumber.map((number, index) => {
    number > 0 ? numberPosNumber++ : "";
  });

  return numberPosNumber;
};

// 3.1 function if all number is possitive

const valueAllPosNumber = (threeNumber) => {
  let result = 1;
  threeNumber.map((number, index) => {
    result *= number;
  });
  return result;
};

// 3.2 function if all number is negative

const valueAllNevNumber = () => {
  return "only Negative";
};

// 3.3  function if one number is possitive
const valueOnePosNumber = (threeNumber) => {
  let result = 0;
  threeNumber.map((number, index) => {
    result += parseInt(number, 10);
  });
  return result;
};

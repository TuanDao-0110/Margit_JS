//1. create  a form to ask user to input the age value
let submitForm = document.getElementById("age_form");
// 2. submit the age value to the systerm
submitForm.addEventListener("submit", (e) => {
  let age;
  // 2.1 prevent the page reload againt
  e.preventDefault();

  age = document.getElementById("input_age").value;
  // 2.1 check that user insert value or not ?
  age ? checkValue(age) : alert("please insert your age");
});
//3. check the value
const checkValue = (age) => {
  switch (true) {
    case age < 18:
      console.log("too young");
      break;
    case age < 27:
      console.log("Right age for military service ");
      break;
    case age < 41:
      console.log("You are in Reserve");
      break;
    case age < 55:
      console.log("You are in backup Reserve");
      break;
    default:
      console.log("too aged");
      break;
  }
};

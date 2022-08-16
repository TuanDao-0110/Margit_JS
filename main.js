let submitForm = document.getElementById("age_form");

submitForm.addEventListener("submit", (e) => {
  let age;
  e.preventDefault();
  age = document.getElementById("input_age").value;
  age ? checkValue(age) : alert("please insert your age");
});
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

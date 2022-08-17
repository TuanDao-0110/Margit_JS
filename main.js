//  make :2 variable ==>
//  1 hourly_salary vs 2. how many hours worker work in one day
// salary calculate in this formula : 1st 7hours is normal salary, 2. after 2 hours is 50% extra. 3. rest is 100%
//1. create  a form to ask user to input the age value
let submitForm = document.getElementById("random_form");
let result = document.getElementById("result");
// 2. submit the age value to the systerm
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let salary = document.getElementById("salary").value;
  let hour = document.getElementById("hour").value;
  result.innerHTML = calulateSalary(parseInt(hour), parseInt(salary));
});

// 3. calculate your salary :
const calulateSalary = (h, salary) => {
  let wave = 0;
  switch (true) {
    case h <= 7:
      wave = h * salary;
      break;
    case h > 7 && h <= 9:
      wave = 7 * salary + (h - 7) * salary * 1.5;
      break;
    default:
      wave = 7 * salary + 2 * salary * 1.5 + (h - 9) * 2 * salary;
      break;
  }
  return wave;
};

let myInsurance = document.querySelector('#myInsurance')
let myFunction = (e) => {
    e.preventDefault();

}
let result = document.querySelector('#result')
myInsurance.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submit')
    console.log(typeof (myInsurance))
    let name;
    let age = 0
    let goodHabit = []
    let badHabit = []
    let healthCondition = []
    for (let key of myInsurance) {
        (key.name === 'name') && (name = key.value);
        (key.name === 'age') && (age = key.value);
        if (key.type === 'checkbox' && key.checked) {
            (key.value === 'condition_bad') && (healthCondition.push(key.name));
            (key.value === 'habit_good') && (goodHabit.push(key.name));
            (key.value === 'habit_bad') && (badHabit.push(key.name));
        }
    }
    console.log('name ' + name + ' age ' + age + ' good habit ' + goodHabit + ' bad habit ' + badHabit + ' health : ' + healthCondition)
    let yourFixed = 500;
    let yourPercentage = 0;
    let yourHealthConditionAdd = 0
    let yourHabitAdd = 0
    switch (true) {
        case age < 18:
            yourPercentage = 0
            break;
        case 18 <= age && age <= 25:
            yourPercentage = 0.1;
            break;
        case 26 <= age && age <= 35:
            yourPercentage = 0.3;
            break;
        case 36 <= age && age <= 45:
            yourPercentage = 0.6;
            break;
        case 36 <= age && age <= 55:
            yourPercentage = 1;
            break;
        case 56 <= age && age <= 65:
            yourPercentage = 1.5;
            break;

        default:
            yourPercentage = 2.1
            yourPercentage
            break
    }
    
    yourHealthConditionAdd = healthCondition.length * 0.01;
    yourHabitAdd = (badHabit.length - goodHabit.length) * 0.05;
    yourPercentage = (yourPercentage + (yourHealthConditionAdd + yourHabitAdd)).toFixed(2)
    yourFixed = yourFixed + ((yourPercentage) * yourFixed)
    let resul = document.querySelector('#result')
    resul.textContent = `${yourFixed} Eur which include : 500 eur fixed price  + perscentage for your total health condition and habit : ${(yourPercentage * 100).toFixed(2)}% `
})


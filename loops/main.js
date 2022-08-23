// Loop Assignments (Don’t use arrays)

//1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)
const positiveOddNum = () => {
  for (let i = 0; i < 100; i++) {
    i % 2 != 0 && console.log(i);
  }
};
// 2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.

const positiveEvenNum = () => {
  let result = 2;
  number = 2;
  for (i = 98; i > 52; i -= 2) {
    //    i % 2 == 0 && i != 0 ? console.log(i) : "";
    number += 2;
    if (i % 2 == 0) {
      result += " " + i + " " + number;

      i == 54 && console.log(result);
    }
  }
};

//3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)
const askingSpeedAverage = () => {
  let average;
  let distance = 0;
  let time = 0;
  let flag;
  do {
    distanceTemp = prompt("what distance you are");
    if (distanceTemp != 0) {
      timeTemp = prompt("how much time you travel");
      distance += parseInt(distanceTemp);
      time += parseInt(timeTemp);
      average = distance / time;
      console.log("average:  " + average.toFixed(2) + " km/h");
    }
    if (distanceTemp == 0) {
      flag = false;
      return console.log("average:  " + average.toFixed(2) + " km/h");
    }
  } while (flag);
};
// askingSpeedAverage();
//4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.
const asking20Num = () => {
  let result = 0;
  for (i = 1; i <= 20; i++) {
    let num = prompt("please insert your number");
    num % 2 == 0 && result++;

    i == 20 && console.log("total final even number is :" + result);
  }
};

// 5.Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.
const averageCalculator = () => {
  let total = 0;
  let average;
  for (i = 1; ; i++) {
    let num = prompt("please insert your number");
    if (num != 0) {
      total += parseInt(num);
      average = total / i;
    } else {
      i > 1
        ? alert("Average is : " + average)
        : alert("you did not input any new number");
      break;
    }
  }
};
// 6.Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

const asking25Num = () => {
  let total = 0;
  let average;
  for (i = 1; i <= 25; i++) {
    let num = prompt("please insert your number");
    total += parseInt(num);
    average = total / i;
    i == 20 && console.log("final average is :" + average);
  }
};

// 7.Make a program that ask first one number from the user. After that the program asks:
//  ”Do you want to continue giving numbers?(y/n)”.
// If user answers y, the program continues to ask another number.
// If user answers n, program ends. In the end program prints out average of the numbers.
const askingAverageNumber = () => {
  let total = 0;
  let average;
  let count = 0;
  let secondQuestion = true;
  while (secondQuestion) {
    count++;
    let firstQuestion = prompt("please insert any number ");
    total += parseInt(firstQuestion);
    average = total / count;

    secondQuestion = confirm("Do you want to continue giving numbers ?");
    if (!secondQuestion) return alert("Average Number is : " + average);
  }
};
askingAverageNumber();
// 8.Make a program that asks first how many numbers user wants to give to the program.
//  After that program asks those numbers. In the end program prints out the smallest number that user gave.
const askingSmallestNum = () => {
  let smallestNum = 0;
  let amountNumber = prompt("how many number do you want to give the program");
  !amountNumber || amountNumber == 0 ? alert("Programme finished") : "";

  for (i = 1; i <= amountNumber; i++) {
    let tempNum = prompt("please input " + i);

    if (i == 1) {
      console.log("incase i = 1 :" + i);
      smallestNum = tempNum;
    } else {
      if (smallestNum > tempNum) {
        console.log("in case i != 0 : " + i);
        smallestNum = tempNum;
      }
      if (i == amountNumber) {
        console.log(i);
        console.log("smallest number is : " + smallestNum);
      }
    }
  }
};

// 9.Make a program that asks ten numbers and in the end prints out two biggest numbers.
const twoBiggestNum = () => {
  let firstNum = 0;
  let secondNum = 0;
  for (i = 1; i <= 10; i++) {
    let insertNum = prompt("please insert " + i + " number");
    if (i == 1) {
      firstNum = insertNum;
    }
    if (i == 2) {
      if (insertNum > firstNum) {
        let tempNum = firstNum;
        firstNum = insertNum;
        secondNum = tempNum;
      } else {
        secondNum = insertNum;
      }
    } else {
      if (insertNum > secondNum && insertNum < firstNum) {
        secondNum = insertNum;
      }
      if (insertNum > secondNum && insertNum > firstNum) {
        let tempNum = firstNum;
        firstNum = insertNum;
        secondNum = tempNum;
      }
      if (i == 10) {
        alert("final 2 biggest number is : " + firstNum + " vs " + secondNum);
      }
    }
  }
};

//10. Make a program that asks ten numbers.
// Program calculates and prints out sum and average, also prints out the smallest and biggest number.
const finalTask = () => {
  let total = 0;
  let average;
  let smallestNum = 0;
  let biggestNum = 0;
  for (i = 1; i <= 10; i++) {
    let insertNum = prompt("please insert number : " + i);
    total += parseInt(insertNum);
    if (i == 1) {
      smallestNum = insertNum;
      biggestNum = insertNum;
    } else {
      if (insertNum > biggestNum) {
        biggestNum = insertNum;
      }

      if (insertNum < smallestNum) {
        console.log("put smallest number");
        smallestNum = insertNum;
      }
      if (i == 10) {
        average = total / 10;
        alert(
          "Total is : " +
            total +
            " Average is : " +
            average +
            " Smallest Number is : " +
            smallestNum +
            " Biggest Number is : " +
            biggestNum
        );
      }
    }
  }
};



// Task 1 section








// Exercise#1



/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/



// code:

// const tellFortune = (nOfChildren, partnerName, geographicLocation, jobTitle) =>
// `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${nOfChildren} kid(s).`;

// window.alert(tellFortune(
// readIntNumber("Enter the number of children?"),
// readString("Enter your partner's name?"),
// readString("Enter your location?"),
// readString("Enter your job title?")
// ));









// Exercise#2




/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/


// code


// const calculateDogAge = (puppyAge) => puppyAge * 7;

// window.alert(`Your doggie is ${calculateDogAge(readIntNumber("Enter the puppy's age?"))} old years!`);










// Exercise#3



/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/



// code:



// const calculateSupply = (age, amount) => (100 - age) * 365 * amount;
// window.alert(`You will need ${calculateSupply(readIntNumber("Enter your age"),
//      readIntNumber("Enter the amount you consumed"))} cups of tea to last you until the ripe old age of 100;`);











// Exercise#4



/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/



// code:




// function greet(name)
// {
//     window.alert(`Hello ${name}`);
// }

// greet(readString("Enter you name?"));












// Exercise#5




/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/



// code:



// The 'x' is not defined

// function double(cat) {
//   return 2 * x;
// }


// The parameter should start char not digit

// function double(7) {
//   return 2 * 7;
// }


// NaN => 'x' Not a number

// function double('7') {
//   return 2 * 'x';
// }













// Exercise#6




/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/




// code:



// func double1(x {
//     return 2 * x ;
//   }


// To fix double1 function :
// fix 1:
// function double1(x)
// {
//     return 2 * x;
// }



//   functiondouble2 x)
//   return 2 * x;
//   }


// fix 2:
// function double2(x)
// {
//     return 2 * x;
// }



//   function (x) double3 {
//     return 2 * x;
  
// fix 3:
// function double3(x)
// {
//     return 2 * x;
// }












// Exercise#7




/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/



// code:



// const cube = (number) => Math.pow(number, 3);

// window.alert(`${cube(readIntNumber())}`);











// Exercise#8





/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/


// code:



// const multiply = (num1, num2) => num1 * num2;

// let nums = readIntNumbers(2);

// window.alert(`${multiply(nums[0], nums[1])}`)














// Exercise#9






/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/


// code:


// const canIGetADrivingLicense = (age) => age >= 20;

// let age = readIntNumber("Enter your age?");

// window.alert(
//     canIGetADrivingLicense(age) 
// ? "Yes, you can" 
// : `Please come back after ${20 - age} year(s).`);











// Exercise#10






/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/


// code:



// const sameLength = (s1, s2) => s1.length === s2.length;

// let words = readStrings(2);

// window.alert(sameLength(words[0], words[1]));













// Exercise#11




/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/


// code:



// const largerNubmer = (num1, num2) => num1 > num2 ? num1 : num2;

// let nums = readIntNumbers(2);

// window.alert(`The larger number is ${largerNubmer(nums[0], nums[1])}`);










// Exercise#12





/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/


// code:


// const smallerNubmer = (num1, num2, num3) => (num1 <= num2 && num1 <= num3) ?
// num1 : (num2 <= num1 && num2 <= num3) ? num2 : num3;

// let nums = readIntNumbers(3);

// window.alert(`The smallest number = ${smallerNubmer(nums[0], nums[1], nums[2])}`);











// Exercise#13





/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/


// code:


// const shorterString = (...texts) => minLengthInArray(...texts);

// let texts = readStrings(5);

// window.alert(`The min text is '${shorterString(...texts)}'`);








// Exercise#14








/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/





// code:





// const longerString = (...texts) => maxLengthInArray(...texts);

// let texts = readStrings(4);

// window.alert(`The longgest word: '${longerString(...texts)}'`);












// Exercise#15












/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/



// code:





// let number = readIntNumber("Enter a number to check is even or not?");

// window.alert(isEven(number)
// ? `Yes, the ${number} is even :-)`
// : `No, the ${number} is not even :-(`);











// Exercise#16









/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/





// code:






// let number = readIntNumber("Enter a number to check is odd or not?");

// window.alert(isOdd(number)
// ? `Yes, the ${number} is odd :-)`
// : `No, the ${number} is not odd :-(`);











// Exercise#17





/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/




// code:




// let number = readIntNumber("Enter a number to check is positive or not ?");
// window.alert(isPositive(number) 
// ? `Yes, ${number} is positive :-)`
// : `No, ${number} is not positive :-(`);










// Exercise#18






/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/





// code:




// const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// let fName = readString("Enter your first name?");
// let lName = readString("Enter your last name?");

// window.alert(`Your full name: ${getFullName(fName, lName)}`);











// Exercise#19





/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/



// code:



// let numbers = readFloatNumbers(5);

// window.alert(`The average of numbers = ${getArrayAverage(...numbers)}`);










// Exercise#20




/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/




// function randomNumber()
// {
//     return Math.random();
// }

// window.alert(randomNumber());












// Exercise#21





/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/




// code:





// window.alert(randomBetweenNumbers(1, 8));












// Exercise#22







/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/



// code:




// function scoreInUniversty(score)
// {
//     switch (true)
//     {
//         case score >= 95 && score <= 100:
//             return 'A';
//         case score >= 85 && score <= 94:
//             return 'B';
//         case score >= 70 && score <= 84:
//             return 'C';
//         case score >= 50 && score <= 69:
//             return 'D';
//         default:
//             return 'F';
//     }
// }

// window.alert(`Your score = ${scoreInUniversty(readFloatNumber("Enter your score?"))}`);












// Exercise#23





/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/



// code:




// const counter = (() =>
//     {
//         let count = 0;
//         return () => ++count;
//     }
// )();

// window.alert(counter());
// window.alert(counter());
// window.alert(counter());












// Exercise#24




/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/



// code:




// const counter = (() => {
//     let count = 0;

//     return {
//         counter: () => ++count,
//         resetCounter: () => {
//             const lastValue = count;
//             count = 0;
//             return `${lastValue} and the counter reset now`;
//         }
//     };
// })();

// window.alert(counter.counter());
// window.alert(counter.counter());
// window.alert(counter.counter());
// window.alert(counter.resetCounter());








// ------------------------------------------- Task 2 ------------------------------------------






// Exercise#1


// 1-Write a function to find the largest element in an array.



// code:



// window.alert(`The max number = ${getMaxNumberInArray(...readIntNumbers(5))}`);












// Exercise#2


// 2-Write a function to find the smallest element in an array.




// code:





// window.alert(`The min number = ${getMinNumberInArray(...readIntNumbers(5))}`);













// Exercise#3



// 3-Write a function to find the sum of all elements in an array.



// code:




// window.alert(`The sum elements = ${sumElementsInArray(...readIntNumbers(5))}`);












// Exercise#4



// 4-Write a function to find the average of all elements in an array.



// code:




// window.alert(`The average = ${getArrayAverage(...readFloatNumbers(5))}`);











// Exercise#5

// 5-Write a function to find the median of all elements in an array.



// code:




// window.alert(`The median of array: ${getMedianInArray(...readIntNumbers(4))}`);











// Exercise#6



// 6-Write a function to remove all duplicates from an array.




// code:


// Manually:


// function removeDuplicatesInArray(...duplicateArray)
// {
//     let uniqeArray = [];
//     let isDuplicate = false;

//     for (let i = 0; i < duplicateArray.length; i++)
//     {
//         let j = 0;
//         for (j = 0; j < uniqeArray.length; j++)
//         {
//             isDuplicate = duplicateArray[i] === uniqeArray[j];

//             if (isDuplicate) break;
//         }

//         if (!isDuplicate)
//             uniqeArray[j] = duplicateArray[i];
//     }

//     return uniqeArray;
// }

// duplicateArray = readIntNumbers(5);

// window.alert(`The original array before remove the duplicate elements: [${duplicateArray}]`);

// let uniqueArray = removeDuplicatesInArray(...duplicateArray);
// window.alert(`The array after remove the duplicate elements: [${uniqueArray}]`);



// using Hashset


// function removeDuplicatesInArrayUsingSet(...duplicateArray)
// {
//     return [...new Set(duplicateArray)];
// }

// duplicateArray = readIntNumbers(5);

// window.alert(`The original array before remove the duplicate elements: [${duplicateArray}]`);

// let uniqueArray = removeDuplicatesInArrayUsingSet(...duplicateArray);
// window.alert(`The array after remove the duplicate elements: [${uniqueArray}]`);











// Exercise#7




// 7-Write a function to sort an array in ascending order.



// code:



// function sortArrayUsingInsertionAlgorithm(...numbers)
// {
//     let n = numbers.length;
//     for (let i = 1; i < n; i++)
//     {
//         let key = numbers[i];
//         let j = i - 1;

//         while (j >= 0 && numbers[j] > key)    
//         {                                     
//             numbers[j + 1] = numbers[j];      
//             j -= 1;                           
//         }
//         numbers[j + 1] = key;
//     }

//     return numbers;
// }

// let numbers = readIntNumbers(3);
// window.alert(`The array before sorting: ${numbers}`);
// window.alert(`The array after sorting to ascending order: ${sortArrayUsingInsertionAlgorithm(...numbers)}`);












// Exercise#8



// 8-Write a function to sort an array in descending order.



// code:



// function sortArrayUsingSelectionAlgorithm(...numbers)
// {
//     let n = numbers.length;

//     for (let i = 0; i < n - 1; i++)
//     {
//         let maxIndex = i;

//         for (let j = i + 1; j < n; j++)
//         {
//             if (numbers[j] > numbers[maxIndex])
//                 maxIndex = j;
//         }

//         let temp = numbers[maxIndex];
//         numbers[maxIndex] = numbers[i];
//         numbers[i] = temp;
//     }

//     return numbers;
// }

// let numbers = readIntNumbers(5);

// window.alert(`Array before sorting ${numbers}`);

// window.alert(`Array after sorted to descending order: ${sortArrayUsingSelectionAlgorithm(...numbers)}`);













//Exercise#9




// 9-Write a function to shuffle the elements of an array randomly.



// code:



function ShuffleArray(...arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        let j = randomBetweenNumbers(0, arr.length - 1);
        swapArrayElements(arr, i, j);
    }
        
    return arr;
}

let arr = fillArrayWithRandomNumbers(10, 5, 10);

window.alert(`The Array before swap its elements ${arr}`);

let shuffledArray = ShuffleArray(...arr);

window.alert(`Array after shuffle the elements: ${shuffledArray}`);


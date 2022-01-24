/* let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

console.log(25 + 43 - 12); */

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

/* console.log('TEST DATA 1');

let markMass = 78;
let markHeight = 1.69;
let markBMI = markMass / markHeight ** 2;

console.log('Mark mass:', markMass, 'kg. Mark height:', markHeight, 'm');
console.log('Mark BMI:', markBMI);

let johnMass = 92;
let johnHeight = 1.95;
let johnBMI = johnMass / johnHeight ** 2;

console.log('John mass:', johnMass, 'kg. John height:', johnHeight, 'm');
console.log('John BMI:', johnBMI);

let markHigherBMI = markBMI > johnBMI;

console.log('Has Mark higher BMI than John?:', markHigherBMI);



console.log('\n\nTEST DATA 2');

markMass = 95;
markHeight = 1.88;
markBMI = markMass / markHeight ** 2;

console.log('Mark mass:', markMass, 'kg. Mark height:', markHeight, 'm');
console.log('Mark BMI:', markBMI);

johnMass = 85;
johnHeight = 1.76;
johnBMI = johnMass / johnHeight ** 2;

console.log('John mass:', johnMass, 'kg. John height:', johnHeight, 'm');
console.log('John BMI:', johnBMI);

markHigherBMI = markBMI > johnBMI;

console.log('Has Mark higher BMI than John?:', markHigherBMI);
 */

/* const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`); */

/* const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license 😁') // emoticones con tecla windows + .
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 🙃`);
}

const birthYear = 2012;

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century); */

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be
either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI
(28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

/* console.log("TEST DATA 1");

let markMass = 78;
let markHeight = 1.69;
let markBMI = markMass / markHeight ** 2;

console.log(`Mark mass: ${markMass} kg. Mark height: ${markHeight} m`);

let johnMass = 92;
let johnHeight = 1.95;
let johnBMI = johnMass / johnHeight ** 2;

console.log(`John mass: ${johnMass} kg. John height: ${johnHeight} m`);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

console.log("\n\nTEST DATA 2");

markMass = 95;
markHeight = 1.88;
markBMI = markMass / markHeight ** 2;

console.log(`Mark mass: ${markMass} kg. Mark height: ${markHeight} m`);

johnMass = 85;
johnHeight = 1.76;
johnBMI = johnMass / johnHeight ** 2;

console.log(`John mass: ${johnMass} kg. John height: ${johnHeight} m`);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
} */

/* // type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); //NaN
console.log(typeof NaN); // number

console.log(String(23), 23);

//type coersion
console.log('23' - '10' - 3); // coherced to number
console.log('23' / '2'); // coherced to number
console.log('23' > '18'); // idem
console.log('I am ' + 23 + ' years old'); // coherced to string!!! (because plus operator)

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

console.log('10'-'4'-'3'-2+'5'); // '15' */

// 5 falsy values: 0, '', undefined, null, Nan    (when converted to boolean, its values gonna be false)

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) { // just to prove the falsy value concept, its more robust to evaluate if money > 0
    console.log("Don't spend it all ;)")
} else {
    console.log('You should get a job!');
}

let height; // bug: what if height = 0 ? yeah, also a falsy value, but defined!! beware
if(height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
} */

/* const age = '18';
if(age === 18) console.log('You just became an adult :D (strict'); // best way

if(age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt('Whats is your favourite number?'));

console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9');
}

if(favourite !== 23) console.log('Why not 23?'); */

// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

/* if(hasDriverLicense && hasGoodVision) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
} */

// const isTired = false; // C
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if(hasDriverLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times.
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it
to the console. Don't forget that there can be a draw, so test for that as well (draw means
    they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only
wins if it has a higher score than the other team, and the same time a score of at least 100
points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have
the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

//1)

/* let dolphinsAverageScore = (96 + 108 + 89) / 3;
let koalasAverageScore = (109 + 95 + 123) / 3;

console.log(`Average score of team Dolphins: ${dolphinsAverageScore}`);
console.log(`Average score of team Koalas: ${koalasAverageScore}`);

//2)

if (dolphinsAverageScore > koalasAverageScore) {
  console.log("Dolphins are the winners!");
} else if (dolphinsAverageScore < koalasAverageScore) {
  console.log("Koalas are the winners!");
} else {
  console.log("There is a draw");
}

console.log("Bonus 1");

dolphinsAverageScore = (97 + 112 + 101) / 3;
koalasAverageScore = (109 + 95 + 123) / 3;

console.log(`Average score of team Dolphins: ${dolphinsAverageScore}`);
console.log(`Average score of team Koalas: ${koalasAverageScore}`);

if (dolphinsAverageScore > koalasAverageScore) {
  if (dolphinsAverageScore < 100) {
    console.log("Both teams desn't have the minimum average score of 100");
  } else {
    console.log("Dolphins are the winners!");
  }
} else if (dolphinsAverageScore < koalasAverageScore) {
  if (koalasAverageScore < 100) {
    console.log("No one wins the trophy");
  } else {
    console.log("Koalas are the winners!");
  }
} else {
  console.log("Both wins the trophy!");
}

console.log("Bonus 2");

dolphinsAverageScore = (96 + 108 + 89) / 3;
koalasAverageScore = (97 + 108 + 89) / 3;

console.log(`Average score of team Dolphins: ${dolphinsAverageScore}`);
console.log(`Average score of team Koalas: ${koalasAverageScore}`);


//just a different way...

if (dolphinsAverageScore < 100) {
  if (koalasAverageScore < 100) {
    console.log("No one wins the trophy");
  } else {
    console.log("Koalas are the winners!");
  }
} else if (dolphinsAverageScore > koalasAverageScore) {
  console.log("Dolphins are the winners!");
} else if (dolphinsAverageScore < koalasAverageScore) {
  console.log("Koalas are the winners!");
} else {
  console.log("Both wins the trophy!");
} */

/* const day = 'monday';

switch(day) {
    case 'monday': // day === 'monday
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples'); // both on wednesday and thursday
        break;
    case 'friday':
        console.log('Record videos');
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');

} */

/* const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(`I like to drink ${drink}`);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}

console.log(`I like to drink ${drink2}`);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`); //since a ternary operator its an expression, it returns a value
 */

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant.
In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is
different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called
'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you
can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/* let bill = 275;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

bill = 40;

tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

bill = 430;

tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
); */

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
    console.log('You shoul get a job!');
}

let height; // bug: what if height = 0 ? yeah, also a falsy value, but defined!! beware
if(height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
} */
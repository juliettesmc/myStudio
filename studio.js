// QUESTION 1. Assign string values based on your own information to the variables
//firstName, lastName and homeCountry below.

const firstName = "juliette";
const lastName = "martinez";
const homeCountry = "colombia";
console.log(firstName, lastName, homeCountry);

// QUESTION 2. String Concatenation (Addition) - Add your firstName and lastName
// variables together and set them equal to the fullName variable as a string.
//Don't forget to add a space.

const fullName = firstName + " " + lastName;
console.log(fullName); // julietteMartinez

// QUESTION 3. String Concatenation (Addition) 2. - Create a sentence and set it equal to the
// mySentence variable that says "My full name is (your fullName variable). I am from (homeCountry).
// " Try and use template literal notation! For example, if your fullName variable contains the
// string "John Doe" and your homeCountry variable contains the string "Brazil" it would end up
// equaling ""My full name is John Doe. I am from Brazil."

// const mySentence = firstName + ' '+ lastName + ' ' + homeCountry;

const mySentence = `My full name is ${fullName}. I am from Colombia`;
console.log(mySentence);

//QUESTION 4. FUNKY INITIALS. Using multiple string methods and your firstName and lastName
// variables from above (think length, slice, indexOf, charAt, that kind of thing) programmatically
// place the last letter of your first name and the last letter of your last name into the
// funkyInitials variable below. Also make sure they are capitalized.
//Hint: You may want to create new variables as intermediary steps before finally setting or
// resetting the value of funkyInitials.

let firstInitial = firstName.slice(7, 8);
let lastInitial = lastName.slice(7, 8);
let funkyInitials = firstInitial + " " + lastInitial;
console.log(funkyInitials);

// QUESTION 5. Conditional 1 - We've had, and have, a lot of developers named Jorge at Code
// the Dream.  So now we want to check programatically to see if you are the newest Jorge
// passing through the halls of CtD. Create an if/else statement that sets the variable isJorge
//to true if your firstName variable is "Jorge" and false if it is anything else.

let isJorge;
if (firstName === "jorge") {
  isJorge = true;
} else {
  isJorge = false;
}
console.log(isJorge);

///Question 6. Conditional 2 - You are given a randomNumber generator that will create a
//number between 1 and 3 in the randomNumber variable (do not change this code).
//Create a condtional where
//if the randomNumber variable is equal to 1 set theAnswer variable to "perhaps it is so",
//if randomNumber is equal to 2 set theAnswer variable to "yes, definitely" and
//if randomNumber is equal to 3 set theAnswer to "no, never"

const randomNumber = Math.floor(Math.random() * 3 + 1);

///// WRITE YOUR CODE BELOW
let theAnswer = "";
if (randomNumber === 1) {
  theAnswer = "perhaps it is so";
}
if (randomNumber === 2) {
  theAnswer = "yes, definitely";
}
if (randomNumber === 3) {
  theAnswer = "no,never";
}
console.log(theAnswer);

// QUESTION 7. Given the variable x, using JS round it to it's nearest two decimal number on the
//line immediately below the line that initially sets the x variable.

let x = 21.45729;
x = x.toFixed(2);
console.log(x);

// QUESTION 8. Given the variable y as a string, convert it to the an integer with no decimal
//places. Round down.

let y = "15.3522";
y = parseInt(y);
console.log(y);

//QUESTION 9. Without removing the string delimiters from var1 (the " "), add var1 and var2 so that
// they add up to 42 as an integer and are stored in the variable var3.

const var1 = "24";

const var2 = 18;

//code here

let var3 = parseInt(var1) + var2;
console.log(var3);

//QUESTION 10 - MODULUS/REMAINDER and some other JS. If the variable var4q is divisible by exactly
//6 then have the variable var4a set to the string "It is divisible." If it is not divisible by 6 then set it to the string. "I am not divisible."

const var4q = 42;
let var4a = "";

if (var4q % 6 === 0) {
  var4a = " It is divisble";
} else {
  var4a = "I am not divisible.";
}
console.log(var4a);

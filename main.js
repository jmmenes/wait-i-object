const myCodeImmersivesObj = {
  wait: "I do not object",
};

// Part 1 - Adding and changing properties in plain JS.
// Here, we'll be changing and adding properties BELOW the creation of the object.
// You won't change lines 1-3 above, but instead set and change the properties for each step below by writing NEW code underneath each comment.

// Below, set the value of property `wait` to be "I object".

myCodeImmersivesObj.wait = "I object";
console.log(myCodeImmersivesObj);

// Add the new property `isAnExcellentObject` and set it to `true`.

myCodeImmersivesObj.isAnExcellentObject = true;
console.log(myCodeImmersivesObj);

// Add the property `term` and set it to 1.

myCodeImmersivesObj.term = 1;
console.log(myCodeImmersivesObj);

// Now add 1 to the value of your object's `term` property and put that new value back in your object's `term`.

myCodeImmersivesObj.isAnExcellentObject = true;
console.log(myCodeImmersivesObj);

// Now add a new property called `currentScore` and set it to 3.

myCodeImmersivesObj.currentScore = 3;
console.log(myCodeImmersivesObj);

// Now add a new property called `cumulativeScore` and set it to 50.

myCodeImmersivesObj.cumulativeScore = 50;
console.log(myCodeImmersivesObj);

// Now add your `currentScore` and your `cumulativeScore` and put it back in `cumulativeScore`.

myCodeImmersivesObj.cumulativeScore += myCodeImmersivesObj.currentScore;
console.log(myCodeImmersivesObj);

// Now add a property called `I am exactly this cool` (you'll need bracket notation!) and set it to `soooooo cool`.

myCodeImmersivesObj["I am exactly this cool"] = `soooooo cool`;
console.log(myCodeImmersivesObj);

// Part 2 - your own object.
// Now make a new EMPTY object that represents yourself. You won't put any properties in the curly braces, but just like in part 1, add them in each step below using plain JavaScript statements.

const johnM = {};

// Add a `firstName` property and set it to a string.

johnM.firstName = "John";
console.log(johnM);

// Add a `lastName` property and set it to a string.

johnM.lastName = "Meneses";
console.log(johnM);

// Add a `fullName` property and set it to the name properties put together with a space string in the middle.

johnM.fullName = johnM.firstName + " " + johnM.lastName;
console.log(johnM);

// Add an `age` property and set it to a number.

johnM.age = "30";
console.log(johnM);

// Add an address property and set it to an empty array.

johnM.address = [];
console.log(johnM);

// Now push three strings into that array.

johnM.address.push("hello");
johnM.address.push("hey");
johnM.address.push("hi");
console.log(johnM);

// Part 3 - setting key-value pairs in-line.
// Now make a new object, but this time we'll pre-populate it, not set it in any lines below it.
// In other words, the properties should be set the same way I initially set the `codeImmersivesObject`
// on line 1. It can be called whatever you want and can have whatever properties you want, as long
// as they include at least one string value, boolean value, number value, and array of numbers.
// The important thing here is: this should all be done within the brackets of the object, not
// below the place where the object is declared.

const newObject = {
  firstName: "John",
  lastName: "Meneses",
  numDogs: 0,
  isTeacher: false,
  friends: [1, 2, 3, 4],
};

// As a stretch goal, go back pre-populate the object with at least one property using a key name that
// CAN'T be a variable name. That would be anything with a space in it, or a dash, or starting with a number.

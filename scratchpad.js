
// LINKS:
// JS MODULES:
// https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/
// https://www.c0d3.com/
// Mock interviews: pramp


// MATH OPERATORS
2 % 3 // Modulo. Returns the remainder of a division problem.

// STRING METHODS
"string".slice(start, end); // Extracts a section of a string and returns a new string.
"string".repeat() // constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
"string".toUpperCase() // CAPITALIZE STRING
"string".toLowerCase() // uncapitalize string
"string".indexOf("character here") // Returns the index of your string number. Returns -1 if the thing isn't found.
"stringstuff-otherstuff".split(separator, limit) // divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
"string".replace() // returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
	.replace(regexp, newSubstr)
	.replace(regexp, replacerFunction)

	.replace(substr, newSubstr)
	.replace(substr, replacerFunction)

// Remove all spaces in a string:
let word = "I am a string."
let newword = word.replace(/\s+/g, ``)
console.log(newword);
// Iamastring


// STRING TEMPLATE LITERALS
`I counted ${3 + 4} sheep`; // I counted 7 sheep. Use back tick. Only use inside of strings.

// TYPEOF
typeof (operand) // returns a string indicating the type of the unevaluated operand.
typeof (42) // "number"

// MATH OBJECT
Math.PI // 3.1415926535
Math.round(4.9) // 5
Math.abs(-456) // 456
Math.pow(2, 5) // 32
Math.floor(3.9999) // 3. Removes decimal.
Math.random(); // Returns a random decimal number between 0 and 1.
Math.floor(Math.random() * 20) + 1 // Random whole number from 1 to 20.

let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`


//   COMPARISON OPERATORS
// >   Greater Than
// <   Less Than
// >=   Greater than or equal to
// <=   Less than or equal to
// ==   Equal to
// !=   Not equal
// ===   Strict equality. (Changes things to the same type, then compares them.)
// !==   Strict non-equality. (Checks for equality of value and type.)


// These will return true or false.


console.log(`text`) // Logs stuff to the console. Need this to work with files.
console.warn(`text`) // !
console.error(`text`) // Uh-oh... (x)
console.clear() // Clears the console.
return // Returns a result of a function.

alert("Hi! I'm an alert!") // Pop-up window.
let thing1 = prompt("Enter input here.") // Pop-up window with user input field.
parseInt("input here") // Transforms input to a number.


	// STRING METHODS This is a test of live typing. Cool!
	.charAt(0) // Focuses on an individual character.
	.slice(beginIndex, endIndex) // Extracts a section of a string and returns it as a new string, without modifying the original string.

// CONDITIONALS. IF STATEMENT.
if (true) {
	// Do something here.
}

if (true) {
	// Do something here.
} else if (true) {
	// Do something else here.
}


// ELSE STATEMENT.
if (true) {
	// Do something
} else {
	// Do something else if NONE of the above IFs are true. Catch-all.
}

// LOGICAL OPERATORS
this && that // AND
this || other_thing // OR
// !   // NOT

// SWITCH STATEMENT

const day = 2;
switch (day) {
	case 1:
		console.log(`Hello!`)
		break;
	case 2:
		console.log(`Case 2!`)
		break;
}


// ARRAYS
let stuff = [true, 68, "cat", NaN]

stuff.length 			// 4. Each thing is indexed, just like a string.
stuff[2] 				// 'cat'
stuff[2] = 'dog' 		// We CAN reassign values of arrays.
stuff 					// [true, 68, 'dog', NaN]
stuff[5] = "Blursday"	// [true, 68, 'dog', NaN, empty, 'Blursday']. Can skip slots when adding elements.


// PUSH, POP, SHIFT, AND UNSHIFT
let colors = ['red', 'orange', 'yellow'];
colors.push('green', 'blue');					// ADD TO END		 ['red', 'orange', 'yellow', 'green', 'blue']
colors.pop()									// REMOVE FROM END	 ['red', 'orange', 'yellow', 'green']
colors.shift()									// REMOVE FROM START ['orange', 'yellow', 'green']
colors.unshift('red')							// ADD TO START		 ['red', 'orange', 'yellow', 'green']


// ARRAY METHODS - CONCAT
let colors = ['red', 'orange', 'yellow'];
let shapes = ['triangle,', 'rhombus', 'circle']

colors.concat(shapes)							// CONCAT ['red', 'orange', 'yellow', 'triangle,', 'rhombus', 'circle']

// INCLUDES
colors.includes("circle")						// true
colors.includes("rhombus")						// false

// INDEXOF - Works on strings and arrays!
"blue".indexOf('b')								// 0
shapes.indexOf('rhombus')						// 1
shapes.indexOf('bonkazoid')						// -1

// REVERSE - DESTRUCTIVE METHOD!!
shapes.reverse()								// ['circle', 'rhombus', 'triangle,']

// SLICE - Gets a slice of an array.
// Works on strings too!
"UnderDog".slice(5, 7)							// 'Dog'
"UnderDog".slice(5, 6)							// 'Do'

// SPLICE - DESTRUCTIVE. Removes or replaces elements in an array.
// DOES NOT WORK ON STRINGS.
let shapes = ['triangle,', 'rhombus', 'circle']
shapes.splice(0, 1, "square");					// (start,deletecount,replacement)
// ['square', 'rhombus', 'circle']

// SORT - Kind of useless for now?
// Converts everything to a string, then sorts.
let scores = [42, 54, 64, 74, 100, 99];
scores.sort();									// Uhhh... [100, 42, 54, 64, 74, 99]


// ARRAYS AND CONST
// Const with arrays cares about the memory rerence, not the array contents.
// How to access things in arrays in other arrays.
const ticTacToe = [
	['X', 'X', 'X'],
	['O', null, 'O'],
	['X', 'X', 'X']];


ticTacToe[1][1]					// null.
ticTacToe[1][1] = "x"			// x

const ticTacToe = [
	['X', 'X', 'X'],
	['O', "x", 'O'],
	['X', 'X', 'X']];


// OBJECTS
const names = { user1: "Perefoxigrine", user2: "J.A.M" }
names.user1
'Perefoxigrine'
names.user2
'J.A.M'

// ADDING STUFF TO AN OBJECT
discordRanks["rank2"] = "Anything Else"


// FOR LOOPS
for (
	// [initial expression];
	// [condition];
	// [increment expression]
	// )

	// for (let i = 0; i <=10; i++) {
	// 	console.log(`${i}`)
	// }

	// for (let i = 0; i <=10; i++) {
	// 	console.log(i)
	// }

	// WHILE LOOPS
	let i = 0;
while (i <= 10) {
		i += 1
		console.log(i)
	}


// LOOPING OVER ARRAYS
const robots = [`Jeffrey`, `Billy`, `Samwise`, `Marshall`]
for (let num of robots) {
	console.log(num.toUpperCase())
}
// JEFFREY, BILLY, SAMWISE, MARSHALL


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let square of numbers) {
	console.log(square)
}

// ITERATING OVER OBJECTS
const robots = { bot1: "Jeffrey", bot2: "Billy", bot3: "Samwise", bot4: "Marshall" }

for (let name in robots) {
	console.log(robots[name])
}

// FUNCTIONS 101
function funcName(arg1, arg2) {
	console.log(arg1, arg2)
}


// REGULAR EXPRESSIONS - Search using characters and meta characters!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
\d // = 0-9;
\w // = A-Z, a-z, 0-9
\s // = whitespace (space, tab,)

\D // = NOT 0-9;
\W // = NOT A-Z, a-z, 0-9
\S // = NOT whitespace (space, tab,)
	. // = any character whatsoever
* // 0 or more. (wildcard);




	// FUNCTION EXPRESSIONS
	function robots(bot1, bot2, bot3, bot4) {
		console.log(bot1, bot2, bot3, bot4);
	}

// is EXACTLY THE SAME AS...
let robots = function (bot1, bot2, bot3, bot4) {
	console.log(bot1, bot2, bot3, bot4);
}

//Functions can be called as the variables they're inside.

// Generating (or returning) functions:
function makeBetweenFunc(min, max) {
	return function (num) {
		return num >= min && num <= max;
	}
}

// Create functions based off the one above to tell if a number is between two numbers or not.
const isChild = makeBetweenFunc(0, 18);		// isChild(2) returns TRUE
const isAdult = makeBetweenFunc(19, 64);		// isAdult(18) returns FALSE
const isSenior = makeBetweenFunc(65, 120);	// isSenior(100) returns TRUE


// Defining METHODS: Adding functions as properties in objects.
const math = {
	multiply: function (x, y) {
		return x * y;
	},
	divide: function (x, y) {
		return x / y;
	},
	square: function (x) {
		return x ** 2;
	}
};

// Or, try this shorthand method, haha:
const math = {
	add(x, y) {
		return x + y;
	},
	divide(x, y) {
		return x / y;
	},
	square(x) {
		return x ** 2;
	}
};

// Keyword THIS. Allows you to access properties outside of the function you're in.
// https://www.youtube.com/watch?v=pIBKyooZrJQ
// These will return the same string:
const cat = {
	name: 'Pete',
	color: 'Blue',
	instrument: 'Electric Guitar',
	hobby: 'Skateboarding',
	intro() {
		console.log(`Hi! My name is ${this.name}! I am the color ${this.color}. I play the ${this.instrument} and my favorite hobby is ${cat.hobby}.`);
	},
}
cat.intro(); // Hi! My name is Pete! I am the color Blue. I play the Electric Guitar and my favorite hobby is Skateboarding.

const cat = {
	name: 'Pete',
	color: 'Blue',
	instrument: 'Electric Guitar',
	hobby: 'Skateboarding',
	intro() {
		console.log(`Hi! My name is ${cat.name}! I am the color ${cat.color}. I play the ${cat.instrument} and my favorite hobby is ${cat.hobby}.`);
	},
}
cat.intro(); // Hi! My name is Pete! I am the color Blue. I play the Electric Guitar and my favorite hobby is Skateboarding.


// THIS.eggCount++ updates the eggCount property, which is a level higher (outside) the function layAnEgg().
const hen = {
	name: `Helen`,
	eggCount: 0,
	layAnEgg() {
		this.eggCount++; return ("EGG");
	}
};


// TRY and CATCH:
// Tests errors and stops them before they spread.
hello.toUpperCase(); // UNCAUGHT reference error!

try {
	hello.toUpperCase();
} catch {
	console.log("Errrrror.")
};



// ARRAY CALLBACK METHODS (These require a function to be passed into them.)
// .forEach, .map, .filter, .find, .reduce, .some, .every

// .FOREACH (older version of for of loops)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (i)) {
	if (i % 2) {
		console.log(i) // print even numbers
	}
}

// MAP method. Executes a function on each element of an array, returning an array of its own.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // double every number, using MAP
const doubles = numbers.map(function (num) {
	return num * 2
});

const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];
const firstNames = fullNames.map(function (i) {
	return i.first
});
// Array(7) [ "Albus", "Harry", "Hermione", "Ron", "Rubeus", "Minerva", "Severus" ]


// This is an array of objects:
const birds = [
	{
		Name: "Peregrine Falcon",
		Sci: "Falco Peregrinus",
		Status: "Least Concern"
	},
	{
		Name: "Gyrfalcon",
		Sci: "Falco Rusticolus",
		Status: "Least Concern"
	},
	{
		Name: "Chestnut-Collared Swift",
		Sci: "Streptoprocne rutila",
		Status: "Least Concern"
	},
	{
		Name: "Burrowing Owl",
		Sci: "Athene Cunicularia",
		Status: "Least Concern"
	}
];

function birdStats(birds) {
	const sciNames = birds.map(b => b.Sci);
	console.log(sciNames);
};

birds.map(({ Name, Sci }) => {
	return `Name: ${Name}. Scientific Name: ${Sci}.`
})


// [ "Falco Peregrinus", "Falco Rusticolus", "Streptoprocne rutila", "Athene Cunicularia" ]



// Arrow Functions:
// Another way to write inline functions.
// Traditional Anonymous Function
function (a) {
	return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
	return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;


// This:
const sciNames = birds.map(function (b) {
	return b.Sci;
});

// Can be written as:
const sciNames = birds.map((b) => { return b.Sci });

// Or as this, if you're returning ONE THING:
const sciNames = birds.map(b => b.Sci);


// setTimeout sets a timer which executes a function or specified piece of code once the timer expires.
let timeoutID = setTimeout(function[, delay, arg1, arg2, ...]);

// setInterval repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
// This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().
let intervalID = setInterval(func, [delay, arg1, arg2, ...]);


// Filter method:
// Creates a new array with all elements that pass the test implemented by the provided boolean function:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.filter(n => n % 2 == 1); // Return all odd numbers.
numbers.filter(n => n % 2 == 0); // Return all even numbers.

// Accepts an array of strings as an imput and returns an array of
// those strings that are less than 10 characters long.
function validUserNames(usernames) {
	return usernames.filter(i => i.length < 10);
}


// EVERY and SOME
// Every:
const exams = [10, 70, 90, 96, 100]
exams.every(score => score >= 75);  // .every returns true in this case ONLY if ALL of the
// elements in this array are greater than 75.


// Some:
const exams = [10, 70, 90, 96, 100]	// Returns true if one or more returns true.
exams.some(score => score >= 75);


function allEvens(numbers) {		// Returns true if all numbers in the array numbers are even.
	return numbers.every(i => i % 2 == 0);
}

// REDUCE executes a user-supplied "reducer" callback function on each element in an array,
// passing in the return value from the calculation on the preceding element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


// THIS and ARROW FUNCTIONS
// If you combine THIS with ARROW FUNCTIONS, THIS will refer to the scope
// in which it was created.



// NEWER JAVASCRIPT FUNCTIONS:
// DEFAULT PARAMETERS

function rollDie(numSides = 6) {
	return Math.floor(Math.random() * numSides) + 1;
}

// Defaults to rolling 1d6 if you don't pass anything in.

// SPREAD
// Adds ELEMENTS of an array into another array.
const nums = [1, 2, 3, 4, 5];
const moreNums = [6, 7, 8, 9, 10];
console.log(nums, moreNums); //
// [ 1, 2, 3, 4, 5 ]
// [ 6, 7, 8, 9, 10 ]

// WE CAN DO BETTER:
const allNums = [...nums, ...moreNums]
console.log(allNums); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// Works for any iterable thing, like strings, arrays, or objects!
console.log(`Hello`) // "Hello"
console.log(...`Hello`) // "H e l l o"

const cats = ['Blue', 'Scout', 'Rocket']
const dogs = ['Nina', 'Pinta', 'Santa Maria']
const allpets = [...cats, ...dogs, "Speedy"] // [ "Blue", "Scout", "Rocket", "Nina", "Pinta", "Santa Maria", "Speedy"]
// YOU DON'T HAVE TO USE ARRAY.PUSH!! :)

const string = "Hello"
[...string] // [ "H", "e", "l", "l", "o" ]


// SPREAD WITH OBJECTS
// You can spread properties from multiple objects into new objects!

const feline = { Legs: 4, Vice: "High", Fetch_Ability: 2 };
const canine = { Legs: 4, Vice: "Low", Fetch_Ability: 10 };

const catDog = { ...feline, ...canine }
// { Legs: 4, Vice: "Low", Fetch_Ability: 10 }
// This overwrites the key/value pairs with the newest ones when they're the same with each object.


const formData = {
	email: 'blueman@gmail.com',
	username: 'bschultz1990',
	password: 'ASDFasdf3456'
}

const newUser = {
	...formData,
	id: 2345,
	isAdmin: false
}

console.log(newUser);	// { email: "blueman@gmail.com", username: "bschultz1990", password: "ASDFasdf3456", id: 2345, isAdmin: false }

// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
// If `...`` is used as an ARGUMENT in a FUNCTION, it's a REST parameter.
function sum(...theArgs) {
	return theArgs.reduce((previous, current) => {
		return previous + current;
	});
}

// Destructuring Arrays:
// A short, clean syntax to unpack values from arrays or properties from objects into distinct variables.
const scores = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
const favColor = scores[0];
const secondFavColor = scores[1];

// THERE'S AN EASIER WAY:
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
const [favColor, secondFavColor, ...otherColors] = colors;


// DESTRUCTURING OBJECTS:
// ORDER MATTERS NOT. JUDGE ME BY MY ORGANIZATION, DO YOU?

const boomingBlade = {
	Title: "Booming Blade",
	School: "Evocation",
	Casting_Time: "1 action",
	Range: "5 feet",
	Components: "V,M",
	Duration: "1 round",
	Materials: "A weapon",
	Description: "As part of casting this spell, you must make a melee attack with a weapon against one creature within range, otherwise the spell fails. On a hit the target suffer the attack's normal effects, and it becomes sheathed in booming energy until the start of your next turn. If the target willingly moves before then, it immediately takes 1d8 thunder damage, and the spell ends.",
	At_Higher_Levels: "This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals and extra 1d8 thunder damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level.",
}

const { Casting_Time, Duration, Materials, Description } = boomingBlade;
// Casting_Time "1 Action"

// You can rename the variables you pull out, too!
const { Casting_Time: castingTime } = boomingBlade	// Casting_Time "1 Action"


// DESTRUCTURING PARAMS
// You can do this on the "way in" to a function:

const birds = [
	{
		Name: "Peregrine Falcon",
		Sci: "Falco Peregrinus",
		Status: "Least Concern"
	},
	{
		Name: "Gyrfalcon",
		Sci: "Falco Rusticolus",
		Status: "Least Concern"
	},
	{
		Name: "Chestnut-Collared Swift",
		Sci: "Streptoprocne rutila",
		Status: "Least Concern"
	},
	{
		Name: "Burrowing Owl",
		Sci: "Athene Cunicularia",
		Status: "Least Concern"
	}
];

birds.map(({ Name, Sci }) => {
	return `Name: ${Name}. Scientific Name: ${Sci}.`
}) // "Name: Peregrine Falcon. Scientific Name: Falco Peregrinus", etc...



// THE DOM! (DOCUMENT OBJECT MODEL)
// A JavaScript representation of a webpage. OR
// HTML and CSS go in, Javascript objects come out. YAAAY! FINALLY! :D

// Go to any webpage. Open Chrome dev tools and type in
console.dir(document) // to get a preview. :)

// SELECTING OBJECT ELEMENTS:
document.getElementById('id'); // Only works on elements that have an id in html.
document.getElementsByTagName('tagname') // Returns an HTML collection (not an array) of elements by the tag name specified.
document.getElementsByClassName('classname'); // Returns an HTML collection (not an array) of elements by the class name specified.


// Query Selector! :) (Better than above.)
document.querySelector('#banner') // Returns the first match of a class, id, or element.
document.querySelector('input[type = "checkbox"]'); // Returns the input type of checkbox.
document.querySelectorAll('.done'); // Returns ALLLLLL matches of the .done class.

// Replace every link text with "I AM A LINK."
const allLinks = document.querySelectorAll('a');
for (const link of allLinks) {
	link.innerText = "I AM A LINK"
}

// INNER HTML
// Adds actual HTML elements and text to a thing.
document.querySelector('a').innerHTML = '<i>I AM A LINK</i>'
document.querySelector('a').innerHTML += '<i>I AM A LINK</i>' // Add, don't replace the text in an element.


document.querySelector("img").src // Source url
document.querySelector("img").alt // Alternate text:
// CHANGING COLORS AND STYLES
// Step 1: Define a class in your css with the stuff you want.
// Step 2: Define another class with the stuff you want to change to.
// Step 3: Use JS to change between classes. :)

// Get computed style of stuff in the window object:
window.getComputedStyle(h1).color; // Returns the color of your h1.
window.getComputedStyle(h1).marginLeft; // Returns the margin left of your h1.


// Change stuff:
// Makes inline html, which works, but it's not great.
const subheader = document.querySelector("#subheader")
// subheader.style.color = "blue"
subheader.style.color = "blue"

// BETTER!
// CLASS LISTS!!!
h1.classList.add('someClass') 	// It's like pushing to an array.
	element.classList.remove('someClass') 			// Remove someClass.
	element.classList.contains('someClass') 			// Does the element contain someClass?
	element.classList.toggle('someClass') 			// Toggle between someClass and someOtherClass.


// CHANGE OR REMOVE IDS:
element.id = "someID"
element.id = ""

// SIBLING SELECTORS
.parentelement
.children[0] // Index of the first child.
// Node's next or previous sibling. Nodes represent text. Not an HTML element. It's a DOM node.
.nextsibling
.previoussibling

// Next or previous actual sibling. USE THIS.
.nextElementSibling
.previousElementSibling

document.queryselector
squareImage = document.querySelector('square')
squareImage.parentElement


// CREATING NEW ELEMENTS.
document.createelement('div')
const newImg = document.createElement('img') // Create image
newImg.src = 'http://placehold.it/' // Assign source

document.body.appendChild(newImg) // Append image as the LAST child of body.

newH3 = document.createElement('h3')
newH3.innertext = 'NEW H3 HERE!!'
document.body.apendChild(newH3)

// APPENDING MULTIPLE THINGS AT A TIME.
document.querySelector('p').append('naked text here.') // Append text as last child of the first paragraph element.
document.querySelector('p').prepend('naked text here.') // Prepend text as first child of the first paragraph element.

element.insertAdjacentElement('position', element) // Insert after an element ends or before an element begins.
element.after(element) // Insert after an element.
element.before(element) // Insert before an element.

// REMOVING ELEMENTS
element.remove(element) // Remove element.
// --------------------------------------------------------------
//EVENTS!!
// Running code when a user does something.
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// --------------------------------------------------------------
// addEventListener
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
const button = document.querySelector('#exampleElement')
button.addEventListener('click', function() {
	alert('Clicked')
})

//OR
function clickMe() {
	alert('Clicked');
}

button.addEventListener('click', clickMe);

// Events and the keyword "this"
// https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/22051280#overview

// When you have it inside a callback that is invoked inside a function,
// "This" will refer to the last event that occurred. (click, drag, buton, etc.)

// KEYBOARD EVENTS AND EVENT OBJECTS
const keyInput = document.querySelector('input'); // refers to a generic input element from HTML.
input.addEventListener('keydown', function() {
	console.log('KEY DOWN')
})

input.addEventListener('keydown', function(e) { // references the Event object.
	console.log(e)
})

// e.key = end result. Output of this depends on the language the user is using.
// e.code = physical location of the key

input.addEventListener('keyup', function() {
	console.log('KEY UP')
})

// FORM EVENTS AND PREVENT DEFAULT
// Whatever a form action attribute is set to, our entire browser window
// will go to whatever page the form was pointing to. (eg /formsubmit).

// <form action="/formsubmit">
// 	<input type="text">
// 	<button>Submit</button>
// </form>

// What if I want to stay on this page?

const form = document.querySelector('#yourForm');
const input = document.querySelector('#yourFormInput'); // Stuff you type.
const list = document.querySelector('#yourFormList')
form.addeventListener('submit', function(e) {
	e.preventDefault(); // Don't change the page. Woo!
	console.log('submitted');
	console.log(input.value); // Log the stuff you type.
})

// Focus elements
// Like a text field or a check box, etc...
element.focus();

// INPUT AND CHANGE EVENTS
element.addEventListener('change') // Fires ONCE when you blur (leave) an input.
element.addEventListener('input') // Fires EVERY TIME you blur (leave) an input.

anyelement.addEventListener('input', function(e){
  h1.innerText = `Welcome, ${anyelement.value}`; // Update an h1 element as a live preview while you type.
});

// EVENT BUBBLING
// What happens when you trigger events that are nested inside other events?
// All of them trigger in cascading succession (event bubbling).

anyelement.addEventListener('input', function(e){
  e.stopPropagation(); // <-- Here's how to prevent that
});

// EVENT DELEGATION
// Adding an event listener to a parent object instead of the object itself.
// Handy when you're creating elements dynamically and want to interact with them.

const list = document.querySelectorAll("ul" function (e){
	e.target.remove(); // <-- Event listener target holds what you clicked on in the parent element.
})

// =================================================================
// 												ASYNC JAVASCRIPT
// =================================================================

// THE CALL STACK
// The last in, first out approach for evaluating logic, like a stack of books.
// A tool JavaScript uses to keep place in our code.
// The code pauses when it calls any function and waits until it's done before resuming.

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
const randomWordAPI = 'https://random-word-api.herokuapp.com/word?number=1&swear=0'
const promise = fetch(randomWordAPI).then(gotData).catch(gotErr);

function gotData(data) {
    console.log(data);
}

function gotErr(err) {
  console.log(err);
}

// Can be condensed into...
let randWord = 'https://random-word-api.herokuapp.com/word?number=1&swear=0'
fetch(randWord)
  .then(response => response.json())
  .then(data) => console.log(data)
  .catch(err) => console.log(err);


// --------------------------------
// CREATING YOUR OWN PROMISES
// --------------------------------
const delayedColorChange = (color, delay) => {
	return new Promise(function(resolve, reject) {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		})
	}, delay);
}

deyaledColorChange('red', 1000)
.then(() => delayedColorChange('orange', 1000))
.then(() => delayedColorChange('yellow', 1000))
















































//
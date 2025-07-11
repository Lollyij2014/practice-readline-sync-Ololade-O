const readline = require('readline-sync');

// 1. Greet the user
const name = readline.question("What is your name? ");
console.log(`Hello, ${name}! Welcome to the JavaScript Knowledge Check.`);

// 2. Ask 5 questions
const q1 = readline.question("Q1: What data type is 'true' in JavaScript? ");
const q2 = readline.question("Q2: What operator is used to add two numbers? ");
const q3 = readline.question("Q3: What will '7' + 2 output in JavaScript? ");
const q4 = readline.questionInt("Q4: Enter a number to demonstrate a numeric input: ");
const q5 = readline.question("Q5: What method can you use to convert a string to a number? ");

// 3. Print answers back
console.log("\nThanks for your answers! Your response:");
console.log(`Q1 Answer: ${q1}`);
console.log(`Q2 Answer: ${q2}`);
console.log(`Q3 Answer: ${q3}`);
console.log(`Q4 Answer: ${q4}`);
console.log(`Q5 Answer: ${q5}`);

console.log("\nGood job, " + name + "! Keep practicing champ!");
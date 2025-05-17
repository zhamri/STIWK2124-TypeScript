// 1. Declare a string variable
let firstName: string = "Zhamri";
let lastName: string = "Che Ani";

// 2. Concatenation
let fullName: string = firstName + " " + lastName;
console.log("Full Name:", fullName);

// 3. Template Literal (better than concatenation)
let greeting: string = `Hello, my name is ${firstName} ${lastName}.`;
console.log(greeting);

// 4. String Methods
let upperCaseName: string = fullName.toUpperCase();
let lowerCaseName: string = fullName.toLowerCase();
let nameLength: number = fullName.length;

console.log("Upper Case:", upperCaseName);
console.log("Lower Case:", lowerCaseName);
console.log("Length:", nameLength);

// 5. Substring and Index
let firstLetter: string = firstName.charAt(0); // 'Z'
let indexOfSpace: number = fullName.indexOf(" ");
let sliced: string = fullName.slice(0, 6); // 'Zhamri'

console.log("First Letter:", firstLetter);
console.log("Index of space:", indexOfSpace);
console.log("Sliced:", sliced);

// 6. Function with string type parameters and return
function greetUser(name: string): string {
    return `Welcome, ${name}!`;
}

let message: string = greetUser("Zhamri");
console.log(message);

// 7. Type Error Example (uncomment to see TypeScript error)
// let wrongType: string = 123; // ❌ Error: Type 'number' is not assignable to type 'string'

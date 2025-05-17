// 1. Basic boolean declarations
let isLoggedIn: boolean = true;
let hasAccess: boolean = false;

console.log("Is Logged In:", isLoggedIn);
console.log("Has Access:", hasAccess);

// 2. Comparison results return booleans
let isAdult: boolean = 20 >= 18;
let isEqual: boolean = "abc" === "abc";
let isNotEqual: boolean = Number(5) !== Number(10);

console.log("Is Adult:", isAdult);
console.log("Is Equal:", isEqual);
console.log("Is Not Equal:", isNotEqual);

// 3. Logical operations
let canEnter: boolean = isLoggedIn && hasAccess;
let canView: boolean = isLoggedIn || hasAccess;
let isBanned: boolean = !hasAccess;

console.log("Can Enter:", canEnter);
console.log("Can View:", canView);
console.log("Is Banned:", isBanned);

// 4. Function with boolean return
function isEven(number: number): boolean {
    return number % 2 === 0;
}

let result = isEven(10);
console.log("Is 10 Even?", result);

// 5. Use boolean in if...else condition
if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in.");
}

// 6. Type Error Example (uncomment to see TypeScript error)
// let wrongType: boolean = "true"; // ❌ Error: Type 'string' is not assignable to type 'boolean'

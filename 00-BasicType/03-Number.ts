// 1. Basic number declarations
let age: number = 30;
let heightInCm: number = 175.5;
let weight: number = 70;

// 2. Arithmetic operations
let sum: number = age + 10;
let difference: number = heightInCm - 10.5;
let product: number = weight * 2;
let quotient: number = heightInCm / 2;
let remainder: number = age % 4;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

// 3. Type inference (TypeScript will still treat this as a number)
let temperature = 36.6; // inferred as number
console.log("Temperature:", temperature);

// 4. Math methods
let rounded: number = Math.round(temperature);      // 37
let floored: number = Math.floor(temperature);      // 36
let ceiling: number = Math.ceil(temperature);       // 37
let random: number = Math.random();                 // Random number between 0 and 1

console.log("Rounded:", rounded);
console.log("Floored:", floored);
console.log("Ceiling:", ceiling);
console.log("Random:", random);

// 5. Function that takes numbers and returns a number
function calculateBMI(weight: number, heightInMeters: number): number {
    return weight / (heightInMeters * heightInMeters);
}

let bmi: number = calculateBMI(70, 1.75);
console.log("BMI:", bmi.toFixed(2)); // Rounded to 2 decimal places

// 6. Type Error Example (uncomment to see TypeScript error)
// let wrongType: number = "123"; // ❌ Error: Type 'string' is not assignable to type 'number'

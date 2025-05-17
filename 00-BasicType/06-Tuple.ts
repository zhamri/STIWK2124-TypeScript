// 1. Declare a tuple with fixed types and order
let person: [string, number] = ["Zhamri", 42];
console.log("Name:", person[0]);
console.log("Age:", person[1]);

// 2. Destructure a tuple
// @ts-ignore
let [name, age] = person;
console.log(`Destructured -> Name: ${name}, Age: ${age}`);

// 3. Tuple with more elements
let studentInfo: [string, number, boolean] = ["Ali", 21, true];
console.log("Student Info:", studentInfo);

// 4. Optional tuple elements (with union or default value)
type Student = [string, number?, string?];
let student1: Student = ["Siti"];
let student2: Student = ["John", 22];
let student3: Student = ["Sara", 20, "Computer Science"];

console.log("Student 1:", student1);
console.log("Student 2:", student2);
console.log("Student 3:", student3);

// 5. Tuple in a function return
function getCoordinates(): [number, number] {
    return [10.5, 20.3];
}

let [x, y] = getCoordinates();
console.log(`Coordinates -> X: ${x}, Y: ${y}`);

// 6. Using tuple array
let data: [string, number][] = [
    ["Apples", 10],
    ["Oranges", 5],
    ["Bananas", 7]
];

console.log("Fruit stock:");
for (const [fruit, quantity] of data) {
    console.log(`${fruit}: ${quantity} pcs`);
}

// 7. Type Error Example (uncomment to test in TypeScript)
// let wrongTuple: [string, number] = [25, "Ali"]; // ❌ Error: Type 'number' is not assignable to type 'string'

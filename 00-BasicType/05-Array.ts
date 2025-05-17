// 1. Array of numbers
let scores: number[] = [85, 90, 78, 92];
console.log("Scores:", scores);

// 2. Array of strings
let fruits: string[] = ["Apple", "Banana", "Mango"];
console.log("Fruits:", fruits);

// 3. Accessing elements by index
console.log("First fruit:", fruits[0]);
console.log("Last score:", scores[scores.length - 1]);

// 4. Using array methods
fruits.push("Orange");             // Add to end
fruits.unshift("Pineapple");       // Add to beginning
let removedFruit = fruits.pop();   // Remove last item
let index = fruits.indexOf("Banana");

console.log("Updated Fruits:", fruits);
console.log("Removed Fruit:", removedFruit);
console.log("Index of Banana:", index);

// 5. Looping through array
console.log("All Scores:");
for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i + 1}:`, scores[i]);
}

// 6. Using for...of loop
console.log("All Fruits:");
for (const fruit of fruits) {
    console.log(fruit);
}

// 7. Function that processes an array
function calculateAverage(numbers: number[]): number {
    let total = 0;
    for (const n of numbers) {
        total += n;
    }
    return total / numbers.length;
}

let averageScore = calculateAverage(scores);
console.log("Average Score:", averageScore.toFixed(2));

// 8. Type Error Example (uncomment to test in TypeScript)
// let invalidArray: number[] = ["one", "two", "three"]; // ❌ Error: string[] is not assignable to number[]

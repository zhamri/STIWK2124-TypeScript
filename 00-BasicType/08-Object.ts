// 1. Basic object with inferred types
let user = {
    name: "Zhamri",
    age: 42,
    isActive: true
};

console.log("User:", user);
console.log("Name:", user.name);

// 2. Explicit object type using type annotation
let student: { name: string; id: number; enrolled: boolean } = {
    name: "Ali",
    id: 1001,
    enrolled: true
};

console.log("Student ID:", student.id);

// 3. Using an interface for reusability
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

let item: Product = {
    id: 1,
    name: "Laptop",
    price: 3500,
    inStock: true
};

console.log("Product Name:", item.name);

// 4. Function that accepts an object
function printProduct(product: Product): void {
    console.log(`Product: ${product.name}, Price: RM${product.price}`);
}

printProduct(item);

// 5. Nested objects
interface Address {
    street: string;
    city: string;
    postcode: string;
}

interface Employee {
    name: string;
    position: string;
    address: Address;
}

let employee: Employee = {
    name: "Siti",
    position: "Software Engineer",
    address: {
        street: "123 Jalan Teknologi",
        city: "Cyberjaya",
        postcode: "63000"
    }
};

console.log("Employee Address:", employee.address.city);

// 6. Object with optional properties
interface Book {
    title: string;
    author?: string;
}

let book1: Book = { title: "TypeScript for Beginners" };
let book2: Book = { title: "Advanced TS", author: "John Doe" };

console.log("Book 1:", book1);
console.log("Book 2:", book2);

// 7. Type Error Example (uncomment to test)
// let brokenProduct: Product = { id: 2, name: "Phone" }; // ❌ Missing price and inStock

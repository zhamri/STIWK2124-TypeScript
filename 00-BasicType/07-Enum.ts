// 1. Numeric enum (default values start from 0)
enum Direction {
    North,
    East,
    South,
    West
}

let dir: Direction = Direction.North;
console.log("Direction:", dir); // Output: 0

// 2. String enum
enum Status {
    Success = "SUCCESS",
    Failure = "FAILURE",
    Pending = "PENDING"
}

let currentStatus: Status = Status.Pending;
console.log("Current Status:", currentStatus); // Output: "PENDING"

// 3. Custom numeric values
enum AccessLevel {
    Guest = 1,
    User = 2,
    Admin = 5
}

console.log("Admin Level:", AccessLevel.Admin); // Output: 5

// 4. Enum reverse mapping (only works with numeric enums)
console.log("Direction[2]:", Direction[2]); // Output: South

// 5. Using enums in a function
function checkAccess(level: AccessLevel): string {
    switch (level) {
        case AccessLevel.Guest:
            return "Guest access only.";
        case AccessLevel.User:
            return "User access granted.";
        case AccessLevel.Admin:
            return "Admin privileges granted.";
        default:
            return "Unknown access level.";
    }
}

console.log(checkAccess(AccessLevel.User));

// 6. Using enums in conditions
if (currentStatus === Status.Pending) {
    console.log("Please wait... still processing.");
}

// 7. Type Error Example (uncomment to test)
// let wrongStatus: Status = "DONE"; // ❌ Error: Type '"DONE"' is not assignable to type 'Status'

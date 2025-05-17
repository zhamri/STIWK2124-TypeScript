function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal("10", 2); // returns 20 instead of error!
// let total = calculateTotal("ten", 2); // NaN

console.log("Total:", total);

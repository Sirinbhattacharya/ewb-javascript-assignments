let billAmount = prompt("Enter bill amount:");
let tipPercentage = prompt("Enter tip percentage:");

billAmount = Number(billAmount);
tipPercentage = Number(tipPercentage);

let tipAmount = (billAmount * tipPercentage) / 100;
let totalAmount = billAmount + tipAmount;

console.log(`Subtotal: $${billAmount}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${tipAmount}`);
console.log(`Total Amount to Pay: $${totalAmount}`);
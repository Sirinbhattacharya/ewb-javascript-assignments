let inventory = [
    {
        name: "Laptop",
        price: 800
    },
    {
        name: "Mouse",
        price: 25
    }
];

console.log("--- Initializing Inventory System ---");

let productName = prompt("Enter new product name:");
let productPrice = prompt("Enter product price:");

productPrice = Number(productPrice);

inventory.push({
    name: productName,
    price: productPrice
});

console.log(inventory);
let category;

if (productName.trim() === "" || productPrice <= 0) {
    console.log("Invalid product details.");
} else {

    if (productPrice < 50) {
        category = "Budget";
    } else if (productPrice >= 50 && productPrice < 200) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    console.log(`Product: ${productName}`);
    console.log(`Price: $${productPrice}`);
    console.log(`Category: ${category}`);
}
switch (category) {
    case "Budget":
        console.log("Badge: Budget");
        break;

    case "Standard":
        console.log("Badge: Standard");
        break;

    case "Premium":
        console.log("Badge: Premium");
        break;

    default:
        console.log("Badge: Unknown");
}
console.log("--- Processing Inventory Roster (forEach) ---");

inventory.forEach((product) => {
    let itemCategory;

    if (product.price < 50) {
        itemCategory = "Budget";
    } else if (product.price < 200) {
        itemCategory = "Standard";
    } else {
        itemCategory = "Premium";
    }

    console.log(
        `* Item: ${product.name} ($${product.price}) -> Category: ${itemCategory}`
    );
});
console.log("--- Inventory Search ---");

for (let i = 0; i < inventory.length; i++) {

    if (!inventory[i].name || inventory[i].price <= 0) {
        continue;
    }

    if (inventory[i].name.trim().toLowerCase() === "monitor") {
        console.log(`Found: ${inventory[i].name}`);
        break;
    }
}
console.log("--- Financial Analytics ---");

function calculateTotalInventoryValue(items) {
    let total = 0;

    items.forEach((product) => {
        total += product.price;
    });

    return total;
}

let totalInventoryValue = calculateTotalInventoryValue(inventory);

console.log(`Total Inventory Value: $${totalInventoryValue}`);
const calculateFinalPrice = (price, taxRate = 10, discount = 0) => {
    let taxAmount = (price * taxRate) / 100;
    let discountAmount = (price * discount) / 100;

    let finalPrice = price + taxAmount - discountAmount;

    return finalPrice;
};

let finalInventoryPrice = calculateFinalPrice(
    totalInventoryValue,
    10,
    5
);

console.log(`Final Price After Tax & Discount: $${finalInventoryPrice}`);
console.log("--- Affordable Items (Under $200) ---");

let affordableItems = inventory.filter((product) => {
    return product.price < 200;
});

console.log(affordableItems.map((product) => product.name));
console.log("--- Formatted Report List ---");

let reportList = inventory.map((product) => {
    return `${product.name.toUpperCase()}: $${product.price}`;
});

console.log(reportList);
console.log("--- Final Inventory Report ---");

console.log(`Total Inventory Value: $${totalInventoryValue}`);

console.log(
    `Filtered Affordable Items (Under $200): ${JSON.stringify(
        affordableItems.map((product) => product.name)
    )}`
);

console.log(
    `Formatted Report List: ${JSON.stringify(reportList)}`
);
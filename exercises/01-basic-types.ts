let productName = "Laptop";
let price = 999.99;

let stock: number = 50;
stock = "agotado"; // Error: Type 'string' is not assignable to type 'number'.

const raw: unknown = JSON.parse('{"name": "Laptop", "price": 999.99}');
raw.id; // Error: Object is of type 'unknown'.

console.log(productName, price, stock);

const value: unknown = 42;

if (typeof value === "number") { console.log(value + 1); }

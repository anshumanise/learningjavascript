// const products = [
//     { id:1, name: 'Laptop', price: 999 },
//     { id: 2, name: 'Smartphone', price: 499 },
//     { id:3, name: 'Tablet', price: 299 }
// ];
// const productNames = products.map(product => product.name);
// console.log(productNames); // Output: ['Laptop', 'Smartphone', 'Tablet']
// // Quokka.js: Start on Current File
// 1. Basic Array
const numbers = [1, 2, 3, 4, 5];

// 2. Map ka use karke naya array banana (Square numbers)
// Quokka yahan side mein hi result dikhayega
const squared = numbers.map(i => i * i); 

squared // <--- Bas variable ka naam likhein, Quokka output dikha dega

// 3. Objects ke saath map() use karna (Jo video mein aksar dikhaya jata hai)
const users = [
  { name: "Rahul", age: 25, price:200 },
  { name: "Simran", age: 22, price:300},
];

// Sirf names nikalne ke liye
const namesOnly = users.map(y => y.name);

namesOnly // <--- Output: ["Rahul", "Simran"]   
const discountedPrices = users.map(z => z.price * 0.9); // 10% discount
discountedPrices // <--- Output: [180, 270]

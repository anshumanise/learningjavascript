// Function to calculate the discounted price using currying
function applyDiscount(discountPercentage) {
  // Return a function that takes the price as its parameter
    return function(price){

        // Inside the inner function, calculate the discounted price
        
        return (price * (100 - discountPercentage) / 100).toFixed(2);

    }
   
}


// Example usage
  const tenPercentOff = applyDiscount(10);
  console.log(tenPercentOff(100)); // Output: 90.00
  console.log(tenPercentOff(200)); // Output: 180.00

  const fiftyPercentOff = applyDiscount(50);
  console.log(fiftyPercentOff(100)); // Output: 50.00
  console.log(fiftyPercentOff(300)); // Output: 150.00
const orders = [
  {
    orderNumber: 1,
    items: [
      { name: "Cappuccino", price: 3.5 },
      { name: "Chocolate Croissant", price: 2.5 }
    ]
  },
  {
    orderNumber: 2,
    items: [
      { name: "Latte", price: 4.0 },
      { name: "Blueberry Muffin", price: 2.75 }
    ],
    discountCode: "COFFEELOVER"
  }
];

// 1. Implementation of the applyDiscount callback
const applyDiscount = (discountCode, total) => {
  if (discountCode === "COFFEELOVER") {
    return total * 0.9; // 10% discount
  } else if (discountCode === "TEALOVER") {
    return total * 0.8; // 20% discount
  }
  return total; // No discount if code doesn't match or is missing
};

function totalOrderValue(orders, applyDiscount) {
  // 2. Map over each order to get its specific final value
  const individualOrderTotals = orders.map(order => {
    // Calculate subtotal for the items in this order using reduce
    const subtotal = order.items.reduce((sum, item) => sum + item.price, 0);

    // Apply discount if a discountCode exists, otherwise use subtotal
    return applyDiscount(order.discountCode, subtotal);
  });
  

  // 3. Sum up all order totals using reduce
  const grandTotal = individualOrderTotals.reduce((sum, orderTotal) => sum + orderTotal, 0);

  // 4. Return the final grand total rounded to 2 decimal places
  return grandTotal.toFixed(2);
}

console.log(totalOrderValue(orders, applyDiscount)); // Output: "12.08"

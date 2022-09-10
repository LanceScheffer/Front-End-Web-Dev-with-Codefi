drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 80 },
    { name: "gatorade", price: 90 },
    { name: "soda", price: 60 },
    { name: "water", price: 10 }

  ];
const drinksByPrice = drinks.sort((a, b) => a.price - b.price)
console.log("drinksByPrice:", drinksByPrice);
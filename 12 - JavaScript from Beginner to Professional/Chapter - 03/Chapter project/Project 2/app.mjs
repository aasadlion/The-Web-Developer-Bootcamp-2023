// Company product catalog
// In this project, you will implement a data structure for a product catalog and create 
// queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and 
// quantity.
// 3. Add all three objects to the main array using an array method, and then log 
// the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console. 
// Experiment by adding and accessing more elements within your data 
// structure.


let inventoryStoreItems=[];

let car={
    name:"BMW Car",
    model:"BMW-2023",
    cost:1000000,
    quantity:"50",

}
let mobile={
    name:"Q Mobile",
    model:"Q-2023",
    cost:100000,
    quantity:"100",

}
let laptop={
    name:"Hp",
    model:"Hp-2023",
    cost:50000,
    quantity:"50",

}

inventoryStoreItems.unshift(car,mobile,laptop)
console.log(inventoryStoreItems);

console.log(inventoryStoreItems[2].quantity)
console.log(inventoryStoreItems[1].cost)
// Coding Challenge 04b

let products = [ // Creating 5 products
    {sku: "sku001", name: "Laptop", category: "electronics", price:250.99, inventory: 47},
    {sku: "sku002", name: "Shoes", category: "apparel", price:80.99, inventory: 20},
    {sku: "sku003", name: "T-Shirt", category: "apparel", price:10.00, inventory: 107},
    {sku: "sku004", name: "Charger", category:"electronics", price:5.00, inventory: 290},
    {sku: "sku005", name: "Water", category: "groceries", price: 1.99, inventory: 5000},
];


for (let product of products) {      // Creating switch
    let discount = 0;
    switch (product.category) {
        case "electronics":
            discount = .2
        break;
       
        case "apparel":
            discount = .1
        break;     
        
        case "groceries":
            discount =  .05
        break;
        
        default:
            discount = 0
        break;
    }
    
    let promoPrice = product.price * (1-discount) //Creating promo price for appied discounts
    product.promoPrice = promoPrice.toFixed(2)
};

let customerType = "normal"






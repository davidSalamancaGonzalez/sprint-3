// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [{
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart

    let indexProduct = Number(id - 1);

    for (let i = 0; i <= products.lenght; i++) {

        if (i == indexProduct) {
            indexProduct = i;
        }
    }

    // 2. Add found product to the cartList array

    cartList.push(products[indexProduct])
}

// Exercise 2
function cleanCart() {

    cartList.length = 0;

    console.log(cartList);

}

// Exercise 3
function calculateTotal() {

    let finalPrice = 0;

    for (let item of cartList) {

        productPrice = item.price;

        finalPrice += productPrice;
    }
    console.log(finalPrice);

    return finalPrice
}



// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    cart = [];

    for (let i = 0; i < cartList.length; i++) {

        let found = false;

        for (let j = 0; j < cart.length; j++) {


            if (cart[j].id == cartList[i].id) {
                found = true;
                cart[j].quantity += 1;
                cart[j].subtotal = cart[j].quantity * cart[j].price;

            }
        }

        if (found == false) {
            cartList[i].quantity = 1;
            cartList[i].subtotal = cartList[i].quantity * cartList[i].price;
            cartList[i].subtotalWithDiscount = "";

            cart.push(cartList[i])
        }

    }

    console.log("new", cart);

    return cart;
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (let i = 0; i < cart.length; i++) {

        if (cart[i].id == 1 && cart[i].quantity >= 3) {
            cart[i].price = 10;
            cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
        } else if (cart[i].id == 3 && cart[i].quantity >= 10) {
            cart[i].price = (cart[i].price * 2) / 3;
            cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
        }

    }
    console.log(cart);

}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    generateCart()
    applyPromotionsCart()

    let finalPriceCart = 0;


    // Iteramos por array cart para "pintar" en el carrito 

    for (let product of cart) {

        document.getElementById("cart_list").innerHTML += `<tr> <th scope= "row"> ${product.name}</th>
    <td> ${product.price} </td>
    <td> ${product.quantity} </td> 
    <td> ${product.subtotal} </td>
    <td> ${product.subtotalWithDiscount} </td>`
    }

    //  Calcular total 
    for (let cartPrice of cart) {

        if (cartPrice.subtotalWithDiscount == "") {
            finalPriceCart += cartPrice.subtotal
        } else {
            finalPriceCart += cartPrice.subtotalWithDiscount
        }
    }

    document.getElementById("total_price").innerHTML = finalPriceCart;



}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}
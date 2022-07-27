// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [{
        id: 1,
        name: 'Eye Mirror',
        price: 50,
        type: 'furniture',
        offer: {
            number: 2,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Hanging lamp',
        price: 80.5,
        type: 'furniture'
    },
    {
        id: 3,
        name: 'Office chair',
        price: 250,
        type: 'furniture',
        offer: {
            number: 4,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'Green socks',
        price: 26,
        type: 'clothing'
    },
    {
        id: 5,
        name: 'Sneakers',
        price: 80.5,
        type: 'clothing'
    },
    {
        id: 6,
        name: 'white socks',
        price: 12.75,
        type: 'clothing'
    },
    {
        id: 7,
        name: 'David Bowie',
        price: 29,
        type: 'vynils'
    },
    {
        id: 8,
        name: 'Blink 182',
        price: 19.99,
        type: 'vynils'
    },
    {
        id: 9,
        name: 'Guns & Roses',
        price: 19.99,
        type: 'vynils'
    }
]

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
var total = 0;
console.log(cart);
// Exercise 1

// Hidden ex-8

// function buy(id) {
//     // 1. Loop for to the array products to get the item to add to cart

//     let indexProduct = Number(id - 1);

//     for (let i = 0; i <= products.lenght; i++) {

//         if (i == indexProduct) {
//             indexProduct = i;
//         }
//     }

//     // 2. Add found product to the cartList array

//     cartList.push(products[indexProduct])
// }

// Exercise 2

function cleanCart() {

    // old code
    // cartList.length = 0;
    // console.log(cartList);

    // new code to update printCart at dom

    cart.splice(0, cart.length)

    for (let product of products) {
        product.quantity = undefined;
    }

    printCart()

    document.getElementById("count_product").innerHTML = Number(cart.length);
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


// function generateCart() {
// Using the "cartlist" array that contains all the items in the shopping cart, 
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

//     cart = [];

//     for (let i = 0; i < cartList.length; i++) {

//         let found = false;

//         for (let j = 0; j < cart.length; j++) {


//             if (cart[j].id == cartList[i].id) {
//                 found = true;
//                 cart[j].quantity += 1;
//                 cart[j].subtotal = cart[j].quantity * cart[j].price;

//             }
//         }

//         if (found == false) {
//             cartList[i].quantity = 1;
//             cartList[i].subtotal = cartList[i].quantity * cartList[i].price;
//             cartList[i].subtotalWithDiscount = "";

//             cart.push(cartList[i])
//         }

//     }

//     return cart;
// }

// Exercise 5
function applyPromotionsCart() {

    // Apply promotions to each item in the array "cart"

    if (cart.length > 0) {

        for (let i = 0; i < cart.length; i++) {

            if (cart[i].offer != undefined && cart[i].quantity >= cart[i].offer.number) {
                cart[i].subtotalWithDiscount = cart[i].subtotal - ((cart[i].subtotal * cart[i].offer.percent) / 100);

            } else if (cart[i].offer != undefined && cart[i].quantity < cart[i].offer.number) {
                cart[i].subtotalWithDiscount = "";
            }

        }
    }
}

// Exercise 6
function printCart() {

    //Promotions first

    applyPromotionsCart()

    // Fill the shopping cart modal manipulating the shopping cart dom

    document.getElementById("cart_list").innerHTML = "";

    let finalPriceCart = 0;

    for (let product of cart) {

        document.getElementById("cart_list").innerHTML +=
            `<tr> <th scope= "row"> ${product.name} </th>
    <td> ${product.price} </td>
    <td><button class="btn" onclick = "removeFromCart(${product.id})">-</button> ${product.quantity} <button class="btn" onclick = "addToCart(${product.id})">+</button> </td> 
    <td> ${product.subtotal.toFixed(2)} </td>
    <td> ${product.subtotalWithDiscount} </td>`

    }

    //  Total cart

    for (let cartPrice of cart) {

        if (cartPrice.subtotalWithDiscount == "") {
            finalPriceCart += cartPrice.subtotal
            
        } else {
            finalPriceCart += Number(cartPrice.subtotalWithDiscount);
            
        }
    }

    document.getElementById("total_price").innerHTML = finalPriceCart.toFixed(2);

    //Update quantity

}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart

    let indexProduct = Number(id);
    let addCartProduct

    for (let product of products) {
        if (indexProduct == product.id) {
            addCartProduct = product;
        }
    }
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    if (addCartProduct.quantity == undefined) {
        addCartProduct.quantity = 1;
        addCartProduct.subtotal = addCartProduct.quantity * addCartProduct.price;
        addCartProduct.subtotalWithDiscount = "";
        cart.push(addCartProduct)

    } else {
        addCartProduct.quantity += 1;
        addCartProduct.subtotal = addCartProduct.quantity * addCartProduct.price;
    }

    document.getElementById("count_product").innerHTML = Number(cart.length);
    printCart()
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to remove from the cart

    let productToremove = Number(id);

    for (let product of cart) {

        if (productToremove == product.id && product.quantity > 1) {
            product.quantity--;
            product.subtotal = product.quantity * product.price
            console.log("pasa", cart);

        } else if (productToremove == product.id && product.quantity == 1) {
            product.quantity = undefined;
            cart = cart.filter(product => product.id != productToremove)
            console.log("nopasa", cart);
        }
    }

    printCart()
    applyPromotionsCart()


}

function open_modal() {
    console.log("Open Modal");
    printCart();
}
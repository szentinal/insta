
let prices = [2.12, 3.19, 2.57, 12.89, 3.77, .51];
let foods = ['Salami', 'Käse', 'Butter', 'Fisch', 'Oliven', 'Zwiebeln'];

let cartAmounts = [];
let cartFoods = [];
let cartPrices = [];

function render() {
    renderLeft();
    renderRight();
}

function renderLeft() {
    let content = document.getElementById('contentLeft');
    content.innerHTML = '';
    for (let i = 0; i < foods.length; i++) {
        const food = foods[i];
        const price = prices[i];

        content.innerHTML += `
            <div class="prizeBox" onclick="addToBasket(${i})"> 
                <img src="img/plus-32.png">
                <h2>${food} für nur: </h2>
                <h2>${price} €</h2>
            </div>
        `;
    }
}

function renderRight() {
    let content = document.getElementById('contentRight');
    content.innerHTML = '';
    for (let j = 0; j < foods.length; j++) {
        const cartPrice = cartPrices[j];
        const cartFood = cartFoods[j];
        const cartAmount = cartAmounts[j];
        content.innerHTML += /*html*/`

            <div  id="cart"></div>
            <h2 class="sum" id="sum"></h2>
        `;
    }
}


function addToBasket(i) {
    let food = foods[i];
    let price = prices[i]
    let j = cartFoods.indexOf(food);
    if (j == -1) {
        cartAmounts.push(1);
        cartFoods.push(food);
        cartPrices.push(price);
    }
    else {
        cartAmounts[j]++;
        cartPrices[j] = cartPrices[j] + price;
    }
    loadCart(j, i);
}


function loadCart() {
    let basket = document.getElementById('cart');
    basket.innerHTML = '';
    for (let c = 0; c < cartFoods.length; c++) {
        let cartPrice = cartPrices[c];
        basket.innerHTML += /*html*/`
        <div class="cartContent">
            <img src="img/minus-16.png" onclick="cartMinus(${c})">
            <div>
                <h2>${cartAmounts[c]} x ${cartFoods[c]} : ${cartPrice.toFixed(2).replace('.', ',')} €</h2>
            </div>    
            <img src="img/plus-16.png" onclick="cartPlus(${c})">        
    </div>`;
        sum();
    }

    if (cartFoods.length == 0) {
        render();
    }
}


function sum() {
    let sum = 0;
    for (let i = 0; i < cartAmounts.length; i++) {
        sum += cartPrices[i];
        document.getElementById('sum').innerHTML = 'Total: '+ sum.toFixed(2).replace('.', ',') + '€';
    } 
}

function cartPlus(i) {
    let price = prices[i]
    cartAmounts[i]++;
    cartPrices[i] = cartPrices[i] + price;
    sum();
    loadCart(i);
}


function cartMinus(i) {
    let price = prices[i]
    if (cartAmounts[i] > 1) {
        --cartAmounts[i];
        cartPrices[i] = cartPrices[i] - price;
    }
    else {
        cartAmounts.splice(i, 1);
        cartFoods.splice(i, 1);
        cartPrices.splice(i, 1);
    }
    sum();
    loadCart(i);
}


function deleteFood(i) {
    // loadCart();
    loadBasket();
    cartAmounts.splice(i, 1);
    cartFoods.splice(i, 1);
    cartPrices.splice(i, 1);
    sum();
    loadCart();
}


function erKommtGleich() {
    alert("Nicht so ungeduldig, er kommt gleich!");
}



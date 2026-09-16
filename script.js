let basketDialog = document.getElementById('basket-dialog');
let orderConfirmedDialog = document.getElementById('order-confirmed-dialog');
let basket = [];
let basketItems = document.getElementById('basket-items');
let basketIcon = document.getElementById('basket-icon');

function openBasket() {
    basketDialog.showModal();
}

function closeDialog(dialog) {
    dialog.close();
}

function addToBasket(index) {
    let item = menu[index];
    let itemFound = false;

    for (let i = 0; i < basket.length; i++) {

        if (item.name === basket[i].name) {
            basket[i].quantity++;
            itemFound = true;
        }
    }

    if (itemFound === false) {
        basket.push({
            ...item,
            quantity: 1
        });
    }
    renderBasket();
}

function renderBasket() {
    basketItems.innerHTML = "";
    let subtotal = 0;
    let deliverFee = 4.99;
    let basketSummary = document.getElementById('basket-summary');
    let basketCount = 0;

    for (let i = 0; i < basket.length; i++) {
        basketItems.innerHTML += getBasketTemplate(basket[i], i);
        subtotal += basket[i].price * basket[i].quantity;
        basketCount += basket[i].quantity;
    }

    if (basket.length === 0) {
        deliverFee = 0;
        basketSummary.style.display = "none";
        basketItems.innerHTML = "<div class='empty-basket'>Your basket is empty</div>";
    }
    else {
        basketSummary.style.display = "flex";

        if (subtotal > 20) {
            deliverFee = 0;
        }
    }

    renderBasketCount(basketCount);
    renderBasketSummary(subtotal, deliverFee);

}

function renderBasketSummary(subtotal, deliverFee) {
    let totalPrice = subtotal + deliverFee;

    document.getElementById('subtotal').innerHTML = subtotal.toFixed(2).replace('.', ',') + '€';
    document.getElementById('deliver-fee').innerHTML = deliverFee.toFixed(2).replace('.', ',') + '€';
    document.getElementById('total-price').innerHTML = totalPrice.toFixed(2).replace('.', ',') + '€';
    document.getElementById('buy-now').innerHTML = 'Buy now (' + totalPrice.toFixed(2).replace('.', ',') + '€)';

}

function renderBasketCount(basketCount) {
    document.getElementById('basket-count').innerHTML = basketCount;

    if (basketCount === 0) {
        document.getElementById('basket-count').style.display = "none";
        basketIcon.src = "./assets/logo/basket.png";
        basketIcon.classList.remove('basket-icon-active');
    }
    else {
        document.getElementById('basket-count').style.display = "flex";
        basketIcon.src = "./assets/logo/orange-basket.png";
        basketIcon.classList.add('basket-icon-active');
    }
}

function addItem(index) {
    basket[index].quantity++;
    renderBasket();
}

function deleteItem(index) {
    if (basket[index].quantity > 1) {
        basket[index].quantity--;
    }
    else {
        basket.splice(index, 1);
    }

    renderBasket();
}

function openOrderDialog() {
    basketDialog.close();
    orderConfirmedDialog.showModal();
}

function closeOrderDialog() {
    orderConfirmedDialog.close();
    basket = [];
    renderBasket();
}
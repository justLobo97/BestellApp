let basketDialog = document.getElementById('basket-dialog');
let orderConfirmedDialog = document.getElementById('order-confirmed-dialog');
let basket = [];
let basketItems = document.getElementById('basket-items');

function openBasket() {
    basketDialog.showModal();
}

function closeDialog(dialog) {
    dialog.close();
}

function addToBasket(index) {
    let item = menu[index];

    basket.push({
        ...item,
        quantity: 1
    });
}

for (let i = 0; i < basket.length; i++) {
    document.getElementById('basket-items').innerHTML += `
        <div class="basket-contents">
            <p>${basket[i].name}</p>

            <div class="contents-footer">
                <div class="add-delete-buttons">
                    <button>
                         <img src="./assets/logo/delete.png" alt="Delete-Icon">
                    </button>
                    <p>${basket[i].quantity}</p>
                    <button>
                    <img src="./assets/logo/+.png" alt="Plus-Icon">
                    </button>
                </div>

                <p>${basket[i].price.toFixed(2).replace('.', ',')}€</p>
            </div>
        </div>`
}
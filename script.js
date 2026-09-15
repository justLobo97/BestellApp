let basketDialog = document.getElementById('basket-dialog');
let orderConfirmedDialog = document.getElementById('order-confirmed-dialog');

function openBasket() {
    basketDialog.showModal();
}

function closeDialog(dialog) {
    dialog.close();
}


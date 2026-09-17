let menuWrapper = document.getElementById('menu-wrapper');


for (let i = 0; i < menu.length; i++) {

    if (i === 0 || menu[i].category !== menu[i - 1].category) {
        menuWrapper.innerHTML += `
        <div class="menu-title">
            <img class="menu-logo" src="${menu[i].categoryImage}" alt="${menu[i].category}-Logo">
            <div class="menu-header">
                <h2>${menu[i].category}</h2>
            </div>
        </div>`;
    }


    menuWrapper.innerHTML += `
        <div class="menu-card">
            <img src="${menu[i].image}" alt="${menu[i].alt}">
                <div class="menu-info">
                    <h3>${menu[i].name}</h3>
                    <p>${menu[i].description}</p>
                </div>
                <div class="card-footer">
                    <p>${menu[i].price.toFixed(2).replace('.', ',')}€</p>
                    <button id="add-button-${i}" onclick="addToBasket(${i})">Add to basket</button>
                </div>
        </div>`;
}


function getBasketTemplate(item, index) {

    return `
        <div class="basket-contents">
            <p>${item.name}</p>

            <div class="contents-footer">
                <div class="add-delete-buttons">
                    <button onclick="deleteItem(${index})">
                         <img src="./assets/logo/delete.png" alt="Delete-Icon">
                    </button>
                    <p>${item.quantity}</p>
                    <button onclick="addItem(${index})">
                    <img src="./assets/logo/+.png" alt="Plus-Icon">
                    </button>
                </div>

                <p>${item.price.toFixed(2).replace('.', ',')}€</p>
            </div>
        </div>`
}


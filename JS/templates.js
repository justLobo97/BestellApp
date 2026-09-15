
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
            <h3>${menu[i].name}</h3>
            <p>${menu[i].description}</p>
                <div class="card-footer">
                    <p>${menu[i].price.toFixed(2).replace('.', ',')}€</p>
                    <button onclick="addToBasket(${i})">Add to basket</button>
                </div>
        </div>`;
}
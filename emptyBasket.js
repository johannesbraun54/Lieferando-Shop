/**
 * this function loads the content to show the default empty basket
 */

function emptyBasketHtml(){ 
    let loadBasket = document.getElementById('orderdItemsContainer')
    loadBasket.innerHTML = /*html*/ ` 
    <p>
    <img class="basketIcon" src="img/basketicon.png" alt="basket">
    <h2>Befülle deinen Warenkorb</h2>
    Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.
    </p>`
    }

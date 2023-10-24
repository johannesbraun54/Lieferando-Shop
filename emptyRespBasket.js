/**
 * this function loads the content to show the default empty responsive basket
 */

function emptyRespBasketHtml(){

    let loadRespBasket = document.getElementById('respBasket')

    loadRespBasket.innerHTML = /*html*/ `      
    
         <div class="emptyRespBasket">
            <p>
                <img class="basketIcon" src="img/basketicon.png" alt="basket">
                <h2>Befülle deinen Warenkorb</h2>
                Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.
            </p>
        </div>`

}
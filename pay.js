/**
 * @param {integer} totalAddSum 
 * @param {integer} totalFinSum 
 * @returns the Html that is used to render the Price you have to pay, into the shoppingbasket
 */

function renderPayAreaHtml(totalAddSum,totalFinSum){
 
 return /*html*/` 
 <div class="filledBasket">
 <span>Zwischensumme:</span> 
 <span>${totalAddSum}€</span>
 </div> 
 <div class="filledBasket">
     <span>Lieferkosten:</span> 
     <span>2,00€</span>
 </div>
 <div class="totalSum">
     <span>Gesamt:</span> 
     <span>${totalFinSum}€</span>
 </div>
  <a class="pay" href="payed.html"><div class="pay">
     Bezahlen:  ${totalFinSum}€
  </div></a>`
}
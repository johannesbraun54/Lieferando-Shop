/**
 * 
 * @param {integer} i 
 * @param {integer} j 
 * @returns the Html you need to render the basket
 */

function renderBasketHtml(i,j){
    const myBasket = basket[j]
    return /*html*/ `
    <div class="filledBasket">
                <span>
                    ${amounts[j]}
                    ${myBasket.title}
                </span>
                <span>
                    ${myBasket.priceString}
                </span> 
            </div>
            <div id="order${j}">
                <div class="changeBasket">
                    <a onclick="toggleTextarea(${j})" href="#">Anmerkung hinzufügen</a>
                    <img onclick="reduceMeal(${j})" class="fp-icons" src="img/flaticon.png" alt="flaticon">
                    <img onclick="increaseMeal(${i,j})"class="fp-icons" src="img/plusicon.png" alt="plusicon">  
                </div>
                <div id="changeBasket${j}" class="d-none">
                    <textarea type="text" name="Comment" id="textArea${j}" cols="33" rows="3"></textarea>
                    <a href="#" onclick="getRemark(${j})">hinzufügen</a>
                    <a href="#" onclick="toggleTextarea(${j})">abbrechen</a>
                </div>
            </div>
       
        <div class="border"></div> `
}
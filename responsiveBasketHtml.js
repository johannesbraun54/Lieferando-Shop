/** 
 * @param {integer} i 
 * @param {integer} j 
 * @returns the HTML you need to render the resposive Baskets
 */

function renderResponsiveBasketHtml(i,j){
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
            <div id="respOrder${j}">
                <div class="changeBasket">
                    <div>
                        <a onclick="toggleRespTextarea(${j})" href="#">Anmerkung hinzufügen</a>
                    </div>  
                    <div>
                        <img onclick="reduceRespMeal(${j})" class="fp-icons" src="img/flaticon.png" alt="flaticon">
                        <img onclick="increaseRespMeal(${i,j})"class="fp-icons" src="img/plusicon.png" alt="plusicon">
                    </div>    
                </div>
                <div id="changeRespBasket${j}" class="d-none">
                    <textarea type="text" name="Comment" id="textArea${j}" cols="33" rows="3"></textarea>
                    <a href="#" onclick="getRespRemark(${j})">hinzufügen</a>
                    <a href="#" onclick="toggleRespTextarea(${j})">abbrechen</a>
                </div>
            </div>
       
        <div class="border"></div>`
}
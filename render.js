/**
 * @param {integer} i 
 * @returns the Html that is used to the diffrent meals and is called at the function "render(i,j)"
 */

function renderHtml(i){
    const  meal = meals[i];
    
    return /*html*/ `
    <div id="meal${i}" class="meal">
       <div>
          <h3>${meal['title']}</h3> 
          ${meal['ingredient']}
          <h3>${meal['priceString']}</h3>
       </div>
       <div onclick="addMealToBasket(${i})">
           <img src="./img/plusicon.png" alt="plusicon">    
       </div>
   </div>`
}
//this file includes the functions are used to show the shopping basket if the basket is clicked when the website is smaller then 950px


/**
 * This function renders the responsive content of the basket
 * @param {integer} i 
 */
function renderResponsiveBasket(i){
    let loadResBasket = document.getElementById('respBasket')
    loadResBasket.innerHTML = ''

        for (let j = 0; j < basket.length; j++) {
        loadResBasket.innerHTML += renderResponsiveBasketHtml(i,j)
        renderRespRemarks(j)
        renderRespPayArea(i)
        save();
    }
}

/**
 * This function renders the content of the remarks array
 * @param {integer} j 
 */

function renderRespRemarks(j){
    for (let k = 0; k < 1; k++) {
        const remark = remarks[j];
        if(remarks[j] != []){
        document.getElementById(`respOrder${j}`).innerHTML += `<div id="remark${j}" class="remark">${remark}`
        }
    }
}

/**
 * This function toggles the responive textarea
 * @param {integer} j 
 */

function toggleRespTextarea(j){
    document.getElementById(`changeRespBasket${j}`).classList.toggle('d-none')
}

/**
 * This function increases the resposive meal in basket
 * @param {integer} j 
 * @param {integer} i 
 */
function increaseRespMeal(j,i){

    let meal = basket[j]
    let m = getMenuIndex(meal)

        prices.push(meal['price']) 
        amounts[m]++;
        renderResponsiveBasket(i)
        save();
}

/**
 * This function reduces the meal at the responisve basket
 * @param {integer} j 
 * @param {integer} i 
 */

function reduceRespMeal(j,i){
    let meal = basket[j]
    let m = getMenuIndex(meal)

        if(prices.length && amounts[m] === 1 ){
            spliceOutOfArrays(m)
            deleteRespMeal(j)
            deleteRespBasket()
            }else{prices.splice(m,1) 
                amounts[m]--;
                renderResponsiveBasket(i)}
        save();
}

/**
 * This function generates the responsive payArea
 */
function renderRespPayArea(){
    let loadPayArea = document.getElementById('respPayArea')
    loadPayArea.innerHTML =''
    
    let sum = 0; 
    for (let a = 0; a < prices.length; a++) {
       let addedSum = sum += prices[a]
       let finalSum = addedSum + 2
       let fixedFinalSum = finalSum.toFixed(2)
       let fixedAddedSum = addedSum.toFixed(2)
       let totalAddSum  =  fixedAddedSum.replace('.',',')
       let totalFinSum  =  fixedFinalSum.replace('.',',')
    
        loadPayArea.innerHTML = renderPayAreaHtml(totalAddSum,totalFinSum)}
        save();
}
/**
 * This function is used to delete a complete meal from the shopping basket
 * @param {integerThis function} j 
 * @param {integer} i 
 */
function deleteRespMeal(j,i){
    basket.splice(j,1)
    renderResponsiveBasket(i)
    save();
}

/**
 * This function gets the remarks for the responsive payArea
 * @param {integer} j 
 * @param {integer} i 
 */

function getRespRemark(j,i){
    
    let remark = document.getElementById(`textArea${j}`).value
    remarks[j]= remark
    toggleRespTextarea(j)
    renderResponsiveBasket(i)
}

/**
 * This function calls the function to render the empty basket
 */

function deleteRespBasket(){
    if(basket.length === 0){
        renderRespEmptyBasket()}
    save();
}

/**
 * This function renders the empty basket
 */
function renderRespEmptyBasket(){

    let loadRespPayArea = document.getElementById('respPayArea')
    emptyRespBasketHtml()
    loadRespPayArea.innerHTML = ``
    save();
}
let meals = [{ 'title':'Pizza Salami',
               'ingredient': '• Salami, Tomatensauce, Käse',
               'priceString': '6,99€',
               'price': 6.99 },
            { 'title':'Chickenburger',
               'ingredient': '• Chicken, Sauce, Tomaten, Gurken, Salat',
               'priceString':'6.49€',
              'price': 6.49 },
            { 'title':'Pizza Bolognese',
              'ingredient': '• Hackfleisch, Tomatensauce, Käse',
              'priceString': '7,39€',
              'price': 7.39 },
            { 'title':'Pizza Margaritha',
              'ingredient': '•  Tomatensauce, Käse',
              'priceString': '5,99€',
              'price':5.99 },
            { 'title':'Pizza Schinken',
              'ingredient': '•Tomatensauce, Käse',
              'priceString': '6,99€',
              'price':6.99 },
            { 'title':'Hamburger',
              'ingredient': '•Tomatensauce, Käse, Beef, Burgersauce',
              'priceString': '6,99€',
              'price':6.99 },
              { 'title':'Pizza Salami',
              'ingredient': '• Salami, Tomatensauce, Käse',
              'priceString': '6,99€',
              'price': 6.99 },
           { 'title':'Chickenburger',
              'ingredient': '• Chicken, Sauce, Tomaten, Gurken, Salat',
              'priceString':'6.49€',
             'price': 6.49 },
           { 'title':'Pizza Bolognese',
             'ingredient': '• Hackfleisch, Tomatensauce, Käse',
             'priceString': '7,39€',
             'price': 7.39 },
           { 'title':'Pizza Margaritha',
             'ingredient': '•  Tomatensauce, Käse',
             'priceString': '5,99€',
             'price':5.99 },
           { 'title':'Pizza Schinken',
             'ingredient': '•Tomatensauce, Käse',
             'priceString': '6,99€',
             'price':6.99 },
           { 'title':'Hamburger',
             'ingredient': '•Tomatensauce, Käse, Beef, Burgersauce',
             'priceString': '6,99€',
             'price':6.99 }
              
]


let basket = []

let prices = []

let remarks = []

let amounts = []

let z = 0
 
/*render functions*/

load();

/**
 * This function renders the complete dynamic content of this Website
 * 
 * @param {integer} i 
 * @param {integer} j 
 */

function render(i,j){

    let loadMeals = document.getElementById('meals')
    loadMeals.innerHTML = ''
  
      if(basket.length != 0){
        renderBasket(i,j)
        renderPayArea()
        renderResponsivePayArea()}
        else{
        renderEmptyBasket()}

        for (let i = 0; i < meals.length; i++) {
        loadMeals.innerHTML += renderHtml(i)}
        save();
}

/**
 * The function loads the shoppingbasket from the array "basket" and renders the "payArea" and the remarks
 * 
 * @param {integer} i 
 */

function renderBasket(i){

    let loadBasket = document.getElementById('orderdItemsContainer')
    loadBasket.innerHTML = '<h2>Warenkorb</h2>'

        for (let j = 0; j < basket.length; j++) {

        loadBasket.innerHTML += renderBasketHtml(i,j)
        renderRemarks(j)
        renderPayArea()
        save();
    }
}

/**
 * This function loads the remarks from the array "remarks"
 * 
 * @param {integer} j 
 */
function renderRemarks(j){
    for (let k = 0; k < 1; k++) {
        const remark = remarks[j];
        if(remarks[j] != []){
        document.getElementById(`order${j}`).innerHTML += `<div id="remark${j}" class="remark">${remark}`
        }
    }
}

/**
 * If this Website is smaller then 950px, this function renders the responsive "payArea"
 * 
 */

function renderResponsivePayArea(){
    let loadResponsiveBasket = document.getElementById('reBasket')
    loadResponsiveBasket.innerHTML = ''
    let sum = 0; 
   
    for (let a = 0; a < prices.length; a++) {
        let addedSum = sum += prices[a]
        let finalSum = addedSum + 2
        let fixedFinalSum = finalSum.toFixed(2)
        let totalFinSum  =  fixedFinalSum.replace('.',',')
    
         loadResponsiveBasket.innerHTML = /*html*/`
         <div class="border"></div>
         <a href="basket.html"><div class="pay">Warenkorb: ${totalFinSum}€</div></a>`}
}

/**
 * This function generates the empty shopping basket
 * 
 */
function renderEmptyBasket(){

    let loadPayArea = document.getElementById('totalPrice')

    emptyBasketHtml()
    loadPayArea.innerHTML = ``
    save();
}

/**
 * This function gets the complete Sum of all Meals in the Basket
 * 
 */
function renderPayArea(){

    let loadPayArea = document.getElementById('totalPrice')
    let sum = 0; 

    for (let a = 0; a < prices.length; a++) {
       let addedSum = sum += prices[a]
       let finalSum = addedSum + 2
       let fixedFinalSum = finalSum.toFixed(2)
       let fixedAddedSum = addedSum.toFixed(2)
       let totalAddSum  =  fixedAddedSum.replace('.',',')
       let totalFinSum  =  fixedFinalSum.replace('.',',')
        
        loadPayArea.innerHTML = renderPayAreaHtml(totalAddSum,totalFinSum)}
        save()}
/* add-delete functions*/

/**
 * this function calls all functions needed to add a meal to the shoppingbasket
 * 
 * @param {integer} i 
 */ 
 

function addMealToBasket(i){

    let meal = meals[i]

    if(getMenuIndex(meal)=== -1){
        pushIntoArrays(i)
        renderBasket(i)
        renderResponsivePayArea()}
        else {let i = getMenuIndex(meal)
        amounts[i]++;
        prices.push(meal['price'])  
        renderBasket(i)
        renderResponsivePayArea()}
        save();
}

/**
 * This function pushs a content into an array
 * 
 * @param {integer} i 
 */

function pushIntoArrays(i){
    basket.push(meals[i])
    prices.push(meals[i]['price'])  
    amounts.push(1)
    remarks.push([])   
}

/**
 * This function gets a Meal in basket increases its amount 
 * 
 * @param {integer} j 
 * @param {integer} i 
 */

function increaseMeal(j,i){

    let meal = basket[j]
    let m = getMenuIndex(meal)

        prices.push(meal['price']) 
        amounts[m]++;
       renderBasket(i)
       renderResponsivePayArea()
        save();
}

/**
 * This function reduces a meal in the shoppingbasket and deletes it
 * 
 * @param {integer} j 
 */

function reduceMeal(j){
    let meal = basket[j]
    let m = getMenuIndex(meal)
        
        if(prices.length && amounts[m] === 1 ){
            spliceOutOfArrays(m)
            deleteMeal(j)
            deleteBasket()}
            else{prices.splice(m,1) 
                 amounts[m]--;  
                renderBasket(j) 
                renderResponsivePayArea()}
        save();
}

/**
 * This function deletes one position from the arrays
 * 
 * @param {integer} m 
 */

function spliceOutOfArrays(m){
    prices.splice(m,1) 
    amounts.splice(m,1)
    remarks.splice(m,1)
}

/**
 * This function deletes a postion from the array "basket"
 * 
 * @param {integer} j 
 */

function deleteMeal(j){
    
    basket.splice(j,1)
    renderBasket()
    renderResponsivePayArea()
    save();
}

/**
 * This function renders the basket new, if it is complete empty
 * 
 */

function deleteBasket(){
    if(basket.length === 0){
        renderEmptyBasket()
        renderResponsivePayArea()
    }
    save();
}

/* individually functions*/

/**
 * This functions gets the postion of a meal into the basket
 * 
 * @param {Object} menu 
 * @returns 
 */

function getMenuIndex(menu){
    let valueIndex = basket.indexOf(menu)
    return valueIndex
    }

/**
 * This function toggles the textarea for the remarks
 * 
 * @param {integer} j 
 */

function toggleTextarea(j){
    document.getElementById(`changeBasket${j}`).classList.toggle('d-none')
}

/**
 * This function gets and renders the remarks
 * 
 * @param {integer} j 
 */

function getRemark(j){

    let remark = document.getElementById(`textArea${j}`).value
    remarks[j]= remark
    toggleTextarea(j)
    renderBasket()
}

/*save load functions*/

/**
 *This is a function to safe content into the local storage
 * 
 */

function save(){
    let mealsAsText = JSON.stringify(meals);
    localStorage.setItem('meals',mealsAsText)

    let basketAsText = JSON.stringify(basket)
    localStorage.setItem('basket',basketAsText)

    let pricesAsText = JSON.stringify(prices);
    localStorage.setItem('prices',pricesAsText)

    let amountsAsText = JSON.stringify(amounts);
    localStorage.setItem('amounts',amountsAsText)

    let remarksAsText = JSON.stringify(remarks);
    localStorage.setItem('remarks',remarksAsText)

}

/**
 * This function loads the safed content from the local Storage
 * 
 */

function load(){

    let mealsAsText = localStorage.getItem('meals')
    let basketAsText = localStorage.getItem('basket') 
    let pricesAsText = localStorage.getItem('prices') 
    let amountsAsText = localStorage.getItem('amounts')
    let remarksAsText = localStorage.getItem('remarks') 

    if(mealsAsText && basketAsText && pricesAsText && amountsAsText && remarksAsText ){
            meals = JSON.parse(mealsAsText)                 
            basket = JSON.parse(basketAsText)        
            prices = JSON.parse(pricesAsText)        
            amounts = JSON.parse(amountsAsText)        
            remarks = JSON.parse(remarksAsText)        
    }
}
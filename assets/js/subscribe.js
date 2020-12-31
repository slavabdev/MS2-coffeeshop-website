//COFFEE CALCULATOR 


let myform = document.forms["coffeeform"]

let brewChoice = [
    ['Aeropress'] = 6,
    ['Filter']=7,
    ['FrenchPress']=9,
    ['CoffeeMachine']=12
];

let getCoffee = function getCoffeeBrew () {
    let coffeeType = 0;
    let myform = document.forms["coffeeform"];
    let brewStyle = myform.elements['brewChoice']
    let i;
    for (i=0; i<brewStyle.length; i++) {
        if(brewStyle[i].checked) {
            coffeeType = brewChoice[brewStyle[i].value];
            break;
        }
    }
    return coffeeType;

}

let cups = document.getElementById('cups').value;


let coffeeTaste = [
    ['bitter'] = 'Columbia', 
    ['sour'] = 'Kenya', 
    ['fruity']= 'Rwanda', 
    ['floral'] = 'Brazil'
];

let coffeeTaste = function getCoffeeTaste () {
    let CoffeeBrewTaste = '';
    let myform = document.forms["coffeeform"];
    let selectedTaste = myForm.elements['calc-taste'];

    CoffeeBrewTaste = coffeeTaste[selectedTaste.value];
    return CoffeeBrewTaste;
}


function getTotal() {
    let coffeeResult = getCoffee * cups / 250;

    document.getElementById('total').innerHTML = (`you need ${coffeeResult} gramms of coffee. Choose ${cofeeTaste}`)
}
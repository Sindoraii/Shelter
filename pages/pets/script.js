/* init */
const parentElem = document.querySelector('.pets__container-cards');
const buttonLeft = document.querySelector('.pagination__button-left');
const buttonDoubleLeft = document.querySelector('.pagination__button-left_double');
const buttonRight = document.querySelector('.pagination__button-right');
const buttonDoubleRight = document.querySelector('.pagination__button-right_double');
const buttonNumber = document.querySelector('.pagination__button-number');

let firstCard = pets.slice(0,8);
let copy = JSON.parse(JSON.stringify(pets))
let arrPets = firstCard.concat(copy.reverse()).concat(pets).concat(copy);

/* change variables for listeners from common script*/
startIndex = 1;
sliderLength = 8;
createCards(firstCard,parentElem);

/* events */
buttonLeft.addEventListener('click', ()=>getPreviousCard(arrPets,parentElem));
buttonRight.addEventListener('click',()=>getNextCards(arrPets,parentElem));
buttonDoubleRight.addEventListener('click', ()=>getNextCards(arrPets,parentElem,8));

if(Number(buttonNumber.innerHTML) === 1) {
    buttonDoubleLeft.setAttribute('disabled',true);
    buttonLeft.setAttribute('disabled',true);
}
if(Number(buttonNumber.innerHTML) === arrPets/sliderLength) {
    buttonDoubleRight.setAttribute('disabled',true);
    buttonRight.setAttribute('disabled',true);
}

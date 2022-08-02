/* init */
const parentElem = document.querySelector('.pets__container-cards');
const buttonLeft = document.querySelector('.pagination__button-left');
const buttonRight = document.querySelector('.pagination__button-right');

let firstCard = pets.slice(0,8);
let arrPets = firstCard.concat(pets);

/* change variables for listeners from common script*/
startIndex = 1;
sliderLength = 8;

createCards(firstCard,parentElem);
buttonLeft.addEventListener('click', ()=>getPreviousCard(arrPets,parentElem));
buttonRight.addEventListener('click',()=>getNextCard(arrPets,parentElem));


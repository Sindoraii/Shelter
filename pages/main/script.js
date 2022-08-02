/* init */
const parent = document.querySelector('.pets__container-cards');
const buttonRight = document.querySelector(' .button_arrow_right');
const buttonLeft =  document.querySelector(' .button_arrow_left');

/* change variables for listeners from common script*/
startIndex = 1;
sliderLength = 3;

/* appending three cards by default */
const firstCard = pets.slice(0,3);
createCards(firstCard,parent);

/* events */
buttonRight.addEventListener('click',() => getNextCard(pets,parent));
// buttonLeft.addEventListener('click', ()=> getPreviousCard(pets,parent));


/* init */
const parent = document.querySelector('.pets__container-cards');
const buttonRight = document.querySelector(' .button_arrow_right');
const buttonLeft =  document.querySelector(' .button_arrow_left');

/* appending three cards by default */
const firstCard = pets.slice(0,3);
createCards(firstCard,parent);

// /* showing every third card with margin*/
// if(pa)

/* events */
buttonRight.addEventListener('click',() => getNextCard(pets,parent));
buttonLeft.addEventListener('click', ()=> getPreviousCard(pets,parent));

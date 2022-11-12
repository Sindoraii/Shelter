(function () {
    /* import */
    const pets = window.data();
    const newPetsArr = window.adaptDataForSliders(pets);
    const getRandomPets = window.getRandomPets;
    const createCards = window.createCards;
    const functionsForBurger = window.functionalBurgerMenu;
    functionsForBurger();

    /* init */
    const parent = document.querySelector('.pets__container-cards');
    const buttonRight = document.querySelector(' .button_arrow_right');
    const buttonLeft = document.querySelector(' .button_arrow_left');
    const sliderLength = 3;

    /* arrays for creating cards that depend on events*/
    let previousPets = [];
    let savingNext = [];

    /* appending the first cards */
    let currentPets = getRandomPets(newPetsArr,sliderLength);
    createCards(currentPets,parent);

    /* events */
    buttonRight.addEventListener('click',() => getNextCards(parent));
    buttonLeft.addEventListener('click', ()=> getPreviousCards(parent));

    function getNextCards(parentElem) {
        if (savingNext.length !== 0) {
            createCards(savingNext,parentElem);
            let temp = currentPets;
            currentPets = savingNext;
            savingNext = [];
            previousPets = temp;
        } else {
            let nextPets = getRandomPets(newPetsArr, sliderLength, currentPets);
            createCards(nextPets, parentElem);
            /* save current cards for showing it like previous and change current cards */
            previousPets = currentPets;
            currentPets = nextPets;
        }
    }

    function getPreviousCards(parentElem) {
         savingNext = currentPets;
        if(previousPets.length !== 0) {
            createCards(previousPets, parentElem);
            currentPets = previousPets;
            previousPets = [];
        } else {
            previousPets = getRandomPets(newPetsArr,sliderLength,currentPets);
            createCards(previousPets, parentElem);
            currentPets = previousPets;
            previousPets = [];
        }
    }
})()

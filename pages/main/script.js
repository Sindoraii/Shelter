(function () {
    /* import */
    const pets = window.data();
    /* todo*/
    const newPetsArr = window.adaptDataForSliders(pets);
    const createRandomIndex = window.getRandomIntFromRange;

    const createCards = window.createCards;
    const functionsForBurger = window.functionalBurgerMenu;
    functionsForBurger();

    /* init */
    const parent = document.querySelector('.pets__container-cards');
    const buttonRight = document.querySelector(' .button_arrow_right');
    const buttonLeft = document.querySelector(' .button_arrow_left');

    let startIndex = 1;
    let sliderLength;

    /* appending the first cards */
    sliderLength = 3;
    // createCards(pets.slice(0, 3), parent);

   /* range of indexes for creating random pets */
    let maxIndex = newPetsArr.length - 1;
    let minIndex = 0;

    /* appending the first cards */
    let currentPets = getPetsForFirstCards(newPetsArr,3);
    createCards(currentPets,parent);


    /* events */
    buttonRight.addEventListener('click',() => getNextCard(pets,parent));
    buttonLeft.addEventListener('click', ()=> getPreviousCard(pets,parent));


    function getNextCard(arr, parentElem) {
        if (startIndex + sliderLength <= arr.length) {
            let subArr = arr.slice(startIndex, startIndex + sliderLength);

            startIndex += 1;
            createCards(subArr, parentElem);
        }
    }

    function getPreviousCard(arr, parentElem) {
        if (startIndex - 1 > 0) {
            if(sliderLength === 3) {
                let subArr = arr.slice(startIndex - 2, startIndex + 1);
                startIndex--;
                createCards(subArr, parentElem);
            }
        }
    }


    function getPetsForFirstCards(pets, cardsCount) { // pets type: array , countOfItems type: int
        let currentPets = [];
        let firstItem = pets[createRandomIndex(minIndex, maxIndex)];
        currentPets.push(firstItem);

        for (let i = 1; i < cardsCount; i++) {
            /* get random pet*/
            let index = createRandomIndex(minIndex, maxIndex);
            let pet = pets[index];

            /* compare pets from currentPets and random pet*/
            let repeatingPet = currentPets.find((item) => item.id === pet.id);

            if (repeatingPet === undefined) {
                currentPets.push(pet);
            } else {
                while (repeatingPet !== undefined) {
                    index = createRandomIndex(minIndex, maxIndex);
                    pet = pets[index];
                    repeatingPet = currentPets.find((item) => item.id === pet.id);
                }
                currentPets.push(pet);
            }
        }
        return currentPets;
    }


})()

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
            previousPets = savingNext;
        } else {
            previousPets = getRandomPets(newPetsArr,sliderLength,currentPets);
            createCards(previousPets, parentElem);
            savingNext = currentPets;
            currentPets = previousPets;
            previousPets = []
        }
    }


    function getRandomPets(data, cardsCount, currentPetsArr = []) {
        let copyData = JSON.parse(JSON.stringify(data));
        let nextPets = [];
        let dataForGettingRandomPets;

        if (currentPetsArr.length !== 0) {
            /* conditional for creating next cards */
            dataForGettingRandomPets = getPetsWithoutCurrentPets(currentPetsArr, copyData);
            for (let i = 0; i < cardsCount; i++) {
                /* get random pet from arr pets without current pets*/
                let index = createRandomIndex(0, dataForGettingRandomPets.length - 1);
                let pet = dataForGettingRandomPets[index];

                /* compare pets from nextPets and random pet and current*/
                if (nextPets.length === 0) {
                    nextPets.push(pet);
                } else {
                    let repeatingPetInsideNextPets = nextPets.find((item) => {
                        return item.id === pet.id;
                    });
                    if (repeatingPetInsideNextPets === undefined) {
                        nextPets.push(pet);
                    } else {
                        while (repeatingPetInsideNextPets !== undefined) {
                            index = createRandomIndex(0, dataForGettingRandomPets.length - 1);
                            pet = dataForGettingRandomPets[index];
                            repeatingPetInsideNextPets = nextPets.find((item) => {
                                return item.id === pet.id
                            });
                        }
                        nextPets.push(pet);
                    }
                }
            }

        } else {
            dataForGettingRandomPets = copyData;
            /* conditional for creating the first cards */
            let firstItem = dataForGettingRandomPets[createRandomIndex(0, dataForGettingRandomPets.length-1)];
            nextPets.push(firstItem);

            for (let i = 1; i < cardsCount; i++) {
                /* get random pet*/
                let index = createRandomIndex(0, dataForGettingRandomPets.length-1);
                let pet = dataForGettingRandomPets[index];

                /* compare pets from nextPets and random pet*/
                let repeatingPet = nextPets.find((item) => item.id === pet.id);

                if (repeatingPet === undefined) {
                    nextPets.push(pet);
                } else {
                    while (repeatingPet !== undefined) {
                        index = createRandomIndex(0, dataForGettingRandomPets.length-1);
                        pet = dataForGettingRandomPets[index];
                        repeatingPet = nextPets.find((item) => item.id === pet.id);
                    }
                    nextPets.push(pet);
                }
            }
        }
        return nextPets;
    }

    function compareArrays(current, prev) {
        for (let i = 0; i < prev.length; i++) {
            let result = current.includes(prev[i]);
            if (result) {
                return false;
            }
        }
        return true;
    }

    function getPetsWithoutCurrentPets(current, allPets) {
        let dataWithoutCurrentPets = [];

        for (let i = 0; i < allPets.length; i++) {
            if (current.find((item) => item.id === allPets[i].id) === undefined) {
                dataWithoutCurrentPets.push(allPets[i]);
            }
        }
        return dataWithoutCurrentPets;
    }

})()

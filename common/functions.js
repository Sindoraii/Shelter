(function () {
    /*import*/
    const popup = window.popupDescriptionOfPets;

    /* common variables */
    const body = document.getElementsByTagName('body')[0];
    const buttonBurger = document.querySelector('.header__burger_button');
    const menu = document.querySelector('.header__menu');
    const layout = document.querySelector('.layout');
    const content = document.querySelector('.layout__content');
    const backgroundWrapper = document.querySelector('.background-wrapper');

    function functionalBurgerMenu() {
        buttonBurger.addEventListener('click', (event) => {
            setMobileStyles();
            event.stopPropagation();
        });

        menu.addEventListener('click', (event) => {
            if(event.target !== menu) {
                setMobileStyles();
            }
        })

        body.addEventListener('click', (event) => {
            if(!event.target.closest('.mobile-menu_open') && menu.classList.contains('mobile-menu_open')) {
                setMobileStyles();
            }
        })


        function setMobileStyles() {
            buttonBurger.classList.toggle('rotate');
            layout.classList.toggle('layout_mobile');
            content.classList.toggle('layout_mobile');
            body.classList.toggle('no-scroll');
            backgroundWrapper.classList.toggle('is-open');

            if(menu.classList.contains('mobile-menu_close')) {
                menu.classList.add('mobile-menu_open');
                menu.classList.remove('mobile-menu_close');
            } else {
                menu.classList.add('mobile-menu_close');
                menu.classList.remove('mobile-menu_open');
            }
        }
    }


    function createCards(arr, parentElem) {
        parentElem.textContent = ' ';

        arr.forEach((item) => {
            const cardPets = document.createElement('article');
            cardPets.classList.add('card');

            const petName = document.createElement('h4');
            const petPhoto = document.createElement('img');

            const wrapper = document.createElement('div');
            wrapper.classList.add('wrapper-column');

            const cardButton = document.createElement('button');
            cardButton.innerText = 'Learn more';
            cardButton.className = 'button';

            petName.innerText = item.pet.name;
            petPhoto.setAttribute('src', item.pet.img);
            cardPets.appendChild(petPhoto);
            cardPets.appendChild(petName);
            cardPets.appendChild(cardButton);
            parentElem.appendChild(cardPets);

            cardPets.addEventListener('click',(event) =>  {
                body.classList.add('no-scroll');
                popup(item.pet);
                event.stopPropagation();
            });
        })
    }


    function adaptDataForSliders (arr) {
        const copy  = JSON.parse(JSON.stringify(arr));

        return copy.map((item) => {
            return {
                pet: item,
                id: `${item.name}.${item.type}.${item.age}`
            }
        })
    }


    function getRandomPets(data, cardsCount, currentPetsArr = []) {
        const copyData = JSON.parse(JSON.stringify(data));
        const nextPets = [];
        let dataForGettingRandomPets;

        if (cardsCount > data.length) {
            console.error('getRandomPets: cardsCount is incorrect');
        } else {
            /* conditionals for creating and comparing next cards */
            if (currentPetsArr.length !== 0 && currentPetsArr.length !== data.length) {

                /* creating next cards without repeated pets */
                dataForGettingRandomPets = getPetsWithoutCurrentPets(currentPetsArr, copyData);

                for (let i = 0; i < cardsCount; i++) {
                    /* get random pet from arr pets without current pets*/
                    let index = getRandomIntFromRange(0, dataForGettingRandomPets.length - 1);
                    let pet = dataForGettingRandomPets[index];

                    /* compare pets from nextPets and random pet */
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
                                index = getRandomIntFromRange(0, dataForGettingRandomPets.length - 1);
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
                const firstItem = dataForGettingRandomPets[getRandomIntFromRange(0, dataForGettingRandomPets.length - 1)];
                nextPets.push(firstItem);

                for (let i = 1; i < cardsCount; i++) {
                    /* get random pet*/
                    let index = getRandomIntFromRange(0, dataForGettingRandomPets.length - 1);
                    let pet = dataForGettingRandomPets[index];

                    /* compare pets from nextPets and random pet*/
                    let repeatingPet = nextPets.find((item) => item.id === pet.id);

                    if (repeatingPet === undefined) {
                        nextPets.push(pet);
                    } else {
                        while (repeatingPet !== undefined) {
                            index = getRandomIntFromRange(0, dataForGettingRandomPets.length - 1);
                            pet = dataForGettingRandomPets[index];
                            repeatingPet = nextPets.find((item) => item.id === pet.id);
                        }
                        nextPets.push(pet);
                    }
                }
            }
            return nextPets;
        }

        function getRandomIntFromRange(min,max) {
            return Math.floor(Math.random() * ( max - min + 1)) + min;
        }

        function getPetsWithoutCurrentPets(current, allPets) {
            const dataWithoutCurrentPets = [];

            allPets.forEach((pet) => {
                if (current.find((currentPet) => currentPet.id === pet.id) === undefined) {
                    dataWithoutCurrentPets.push(pet);
                }
            })

            return dataWithoutCurrentPets;
        }
    }

    window.getRandomPets = getRandomPets;
    window.adaptDataForSliders = adaptDataForSliders;
    window.createCards = createCards;
    window.functionalBurgerMenu = functionalBurgerMenu;
})()

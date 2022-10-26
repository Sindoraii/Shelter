(function () {
    /*import*/
    const popup = window.popupDescriptionOfPets;

    function functionalBurgerMenu() {
        const buttonBurger = document.querySelector('.header__burger_button');
        const body = document.getElementsByTagName('body')[0];
        const menu = document.querySelector('.header__menu');
        const layout = document.querySelector('.layout');
        const content = document.querySelector('.layout__content');
        const backgroundWrapper = document.querySelector('.background-wrapper');


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

        for (let i = 0; i < arr.length; i++) {
            const cardPets = document.createElement('article');
            cardPets.classList.add('card');

            const petName = document.createElement('h4');
            const petPhoto = document.createElement('img');

            const wrapper = document.createElement('div');
            wrapper.classList.add('wrapper-column');

            const cardButton = document.createElement('button');
            cardButton.innerText = 'Learn more';
            cardButton.className = 'button';

            petName.innerText = arr[i].pet.name;
            petPhoto.setAttribute('src', arr[i].pet.img);
            cardPets.appendChild(petPhoto);
            cardPets.appendChild(petName);
            cardPets.appendChild(cardButton);
            parentElem.appendChild(cardPets);

            cardPets.addEventListener('click',(event) =>  {
                const body = document.querySelector('body');
                body.classList.add('no-scroll');
                popup(arr[i].pet);
                event.stopPropagation();
            });
        }
    }


    function adaptDataForSliders (arr) {
        let copy  = JSON.parse(JSON.stringify(arr));
        return copy.map((item) => {
            return {pet:item,
                    id: `${item.name}.${item.type}.${item.age}`
            }
        })
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
                let index = getRandomIntFromRange(0, dataForGettingRandomPets.length - 1);
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
            let firstItem = dataForGettingRandomPets[getRandomIntFromRange(0, dataForGettingRandomPets.length-1)];
            nextPets.push(firstItem);

            for (let i = 1; i < cardsCount; i++) {
                /* get random pet*/
                let index = getRandomIntFromRange(0, dataForGettingRandomPets.length-1);
                let pet = dataForGettingRandomPets[index];

                /* compare pets from nextPets and random pet*/
                let repeatingPet = nextPets.find((item) => item.id === pet.id);

                if (repeatingPet === undefined) {
                    nextPets.push(pet);
                } else {
                    while (repeatingPet !== undefined) {
                        index = getRandomIntFromRange(0, dataForGettingRandomPets.length-1);
                        pet = dataForGettingRandomPets[index];
                        repeatingPet = nextPets.find((item) => item.id === pet.id);
                    }
                    nextPets.push(pet);
                }
            }
        }
        return nextPets;

        function getRandomIntFromRange(min,max) {
            return Math.floor(Math.random() * ( max - min + 1)) + min;
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
    }

    window.getRandomPets = getRandomPets;
    window.adaptDataForSliders = adaptDataForSliders;
    window.createCards = createCards;
    window.functionalBurgerMenu = functionalBurgerMenu;
})()

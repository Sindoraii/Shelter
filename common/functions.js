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

    function getRandomIntFromRange(min,max) {
        return Math.floor(Math.random() * ( max - min + 1)) + min;
    }

    window.getRandomIntFromRange = getRandomIntFromRange;
    window.adaptDataForSliders = adaptDataForSliders;
    window.createCards = createCards;
    window.functionalBurgerMenu = functionalBurgerMenu;
})()

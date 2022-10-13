(function () {
    function functionalBurgerMenu() {
        const buttonBurger = document.querySelector('.header__burger_button');
        const body = document.getElementsByTagName('body')[0];
        const menu = document.querySelector('.header__menu');
        const layout = document.querySelector('.layout');
        const content = document.querySelector('.layout__content');
        const backgroundWrapper = document.querySelector('.background-wrapper');
        const mobileLinks = Array.from(menu.children);

        buttonBurger.addEventListener('click', () => {
            setMobileStyles();

            if(menu.classList.contains('mobile-menu_close')) {
                menu.classList.add('mobile-menu_open');
                menu.classList.remove('mobile-menu_close');
            } else {
                menu.classList.add('mobile-menu_close');
                menu.classList.remove('mobile-menu_open');
            }
        });

        mobileLinks.forEach((link) => link.addEventListener('click', () => {
            setMobileStyles();
            body.classList.remove('no-scroll');
        }));

        function setMobileStyles() {
            buttonBurger.classList.toggle('rotate');
            layout.classList.toggle('layout_mobile');
            content.classList.toggle('layout_mobile');
            body.classList.toggle('no-scroll');
            backgroundWrapper.classList.toggle('is-open');
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

            petName.innerText = arr[i].name;
            petPhoto.setAttribute('src', arr[i].img);
            cardPets.appendChild(petPhoto);
            cardPets.appendChild(petName);
            cardPets.appendChild(cardButton);
            parentElem.appendChild(cardPets);
        }
    }

    window.createCards = createCards;
    window.functionalBurgerMenu = functionalBurgerMenu;
})()

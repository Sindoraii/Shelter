(function () {
    /* import */
    const pets = window.getDate();
    const createCards = window.createCards;

    /* init */
    const parent = document.querySelector('.pets__container-cards');
    const buttonRight = document.querySelector(' .button_arrow_right');
    const buttonLeft = document.querySelector(' .button_arrow_left');

    const buttonBurger = document.querySelector('.header__burger_button');
    const body = document.getElementsByTagName('body')[0];
    const menu = document.querySelector('.header__menu');
    const layout = document.querySelector('.layout');
    const content = document.querySelector('.layout__content');
    const backgroundWrapper = document.querySelector('.background-wrapper');
    const mobileLinks = Array.from(menu.children);

    let startIndex = 1;
    let sliderLength;

    /* appending the first cards */
    sliderLength = 3;
    createCards(pets.slice(0, 3), parent);


    /* events */
    buttonRight.addEventListener('click',() => getNextCard(pets,parent));
    buttonLeft.addEventListener('click', ()=> getPreviousCard(pets,parent));
    buttonBurger.addEventListener('click', () => setMobileStyles());
    mobileLinks.forEach((link) => link.addEventListener('click',()=> {
        setMobileStyles();
        body.classList.remove('no-scroll');
    }));


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
            } else if(sliderLength === 2) {
                let subArr = arr.slice(startIndex - 2, startIndex );
                startIndex--;
                createCards(subArr, parentElem);
            }
        }
    }

     function setMobileStyles() {
         menu.classList.toggle('mobile-menu');
         buttonBurger.classList.toggle('rotate');
         layout.classList.toggle('layout_mobile');
         content.classList.toggle('layout_mobile');
         body.classList.toggle('no-scroll');
         backgroundWrapper.classList.toggle('is-open');
     }
})()

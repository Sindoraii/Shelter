(function () {
    /* import */
    const pets = window.getDate();
    const createCards = window.createCards;

    /* init */
    const parent = document.querySelector('.pets__container-cards');
    const buttonRight = document.querySelector(' .button_arrow_right');
    const buttonLeft =  document.querySelector(' .button_arrow_left');

    let startIndex = 1;
    let sliderLength;
    
    /* appending the first cards */
    if(window.outerWidth >= 1280) {
         sliderLength = 3;
         createCards(pets.slice(0,3),parent);
    } else if(window.outerWidth < 1280 && window.outerWidth >= 768 ) {
        sliderLength = 2;
        createCards(pets.slice(0,2),parent);
    }

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
            } else if(sliderLength === 2) {
                let subArr = arr.slice(startIndex - 2, startIndex );
                startIndex--;
                createCards(subArr, parentElem);
            }
        }
    }

})()

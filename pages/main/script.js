(function () {
    /* import */
    const pets = window.getDate();
    const createCards = window.createCards;
    console.log('pets main',pets);
    console.log('cards main',createCards);

    /* init */
    const parent = document.querySelector('.pets__container-cards');
    const buttonRight = document.querySelector(' .button_arrow_right');
    const buttonLeft =  document.querySelector(' .button_arrow_left');

    let startIndex = 1;
    let sliderLength = 3;

    /* appending three cards by default */
    const firstCard = pets.slice(0,3);
    createCards(firstCard,parent);

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
            let subArr = arr.slice(startIndex - 2, startIndex + 1);
            startIndex--;
            createCards(subArr, parentElem);
        }
    }

})()

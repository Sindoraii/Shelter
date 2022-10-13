(function(){
    /* import */
    const functionsForBurger = window.functionalBurgerMenu;
    const pets = window.data();

    /* init */
    const parentElem = document.querySelector('.pets__cards');
    const buttonLeft = document.querySelector('.pagination__button-left');
    const buttonDoubleLeft = document.querySelector('.pagination__button-left_double');
    const buttonRight = document.querySelector('.pagination__button-right');
    const buttonDoubleRight = document.querySelector('.pagination__button-right_double');
    const buttonNumber = document.querySelector('.pagination__button-number');

    const firstCard = pets.slice(0,8);
    const copy = JSON.parse(JSON.stringify(pets));
    let arrPets = firstCard.concat(copy.reverse()).concat(pets).concat(copy);
    let sliderLength = 8;
    let maxPage = arrPets.length / sliderLength;
    let minPage = 1;
    createCards(firstCard,parentElem);
    functionsForBurger();


    /* events */
    buttonRight.addEventListener('click',()=>getNextCards(arrPets,parentElem,buttonNumber));
    buttonRight.addEventListener('click',()=>increaseNumberPage(buttonNumber));
    buttonDoubleRight.addEventListener('click', ()=>toTheLastPage(arrPets,sliderLength,buttonNumber));
    buttonDoubleRight.addEventListener('click',()=>increaseNumberPage(buttonNumber));

    buttonLeft.addEventListener('click',()=>getPreviousCards(arrPets,parentElem,buttonNumber));
    buttonLeft.addEventListener('click',()=>decreaseNumberPage(buttonNumber))
    buttonDoubleLeft.addEventListener('click',()=>toTheFirstPage(arrPets,sliderLength,buttonNumber));
    buttonDoubleLeft.addEventListener('click',()=>decreaseNumberPage(buttonNumber));


    function changeButtonState(elements =[],flag = false) {
        elements.forEach(item => {
            if(flag === true) {
                item.setAttribute('disabled',flag);
            } else {
                item.removeAttribute('disabled');
            }
        })
    }


    function toTheFirstPage(arr,sliderLength,button) {
        let subArr = arr.slice(0,sliderLength);
        createCards(subArr,parentElem);
        minPage = 1;
        button.innerHTML = minPage;
        changeButtonState([buttonLeft,buttonDoubleLeft],true);
    }


    function toTheLastPage(arr,sliderLength,button) {
        minPage = maxPage;
        button.innerHTML = minPage;

        let numberPage = Number(button.innerHTML);
        let start = numberPage * sliderLength - sliderLength;
        let subArr = arr.slice(start);
        createCards(subArr,parentElem);

        changeButtonState([buttonRight,buttonDoubleRight],true);
    }


    function decreaseNumberPage(button){
        if(minPage > 1 ) {
            button.innerHTML = minPage-1;
            minPage--;
        }
        checkNumberPage();
    }


    function increaseNumberPage(button) {
        if (minPage < maxPage ) {
            button.innerHTML = minPage+1;
            minPage++;
        }
        checkNumberPage();
    }


    function checkNumberPage() {
        checkMinPageNumber();
        checkMaxPageNumber();

        function checkMaxPageNumber() {

            if (minPage === maxPage) {
                changeButtonState([buttonRight, buttonDoubleRight], true);
            } else {
                changeButtonState([buttonRight, buttonDoubleRight], false);
            }
        }

        function checkMinPageNumber() {
            if (minPage=== 1) {
                changeButtonState([buttonLeft, buttonDoubleLeft], true);
            } else {
                changeButtonState([buttonLeft, buttonDoubleLeft], false);
            }
        }
    }


    function getNextCards(arr, parent,button) {
        let pageNumber = Number(button.innerHTML) + 1;
        let start = pageNumber * sliderLength - sliderLength;
        let end = pageNumber * sliderLength;
        let subArr = arr.slice(start, end);

        createCards(subArr, parent);
    }


    function getPreviousCards(arr, parent,button) {
        let pageNumber = Number(button.innerHTML)-1;
        let start = pageNumber * sliderLength - sliderLength;
        let end = pageNumber * sliderLength;
        let subArr = arr.slice(start, end);

        createCards(subArr, parent);
    }
})()

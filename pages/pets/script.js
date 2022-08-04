/* init */
const parentElem = document.querySelector('.pets__container-cards');
const buttonLeft = document.querySelector('.pagination__button-left');
const buttonDoubleLeft = document.querySelector('.pagination__button-left_double');
const buttonRight = document.querySelector('.pagination__button-right');
const buttonDoubleRight = document.querySelector('.pagination__button-right_double');
const buttonNumber = document.querySelector('.pagination__button-number');

const firstCard = pets.slice(0,8);
const copy = JSON.parse(JSON.stringify(pets));
let arrPets = firstCard.concat(copy.reverse()).concat(pets).concat(copy);

let startIndex = 8;
let sliderLength = 8;
let maxPage = arrPets.length / sliderLength;
let minPage = 2;

createCards(firstCard,parentElem);


/* events */
buttonRight.addEventListener('click',()=>getNextCards(arrPets,parentElem));
buttonRight.addEventListener('click',()=>setNumberPage(buttonNumber));
buttonDoubleRight.addEventListener('click', ()=>toTheLastPage(arrPets,sliderLength));
buttonDoubleRight.addEventListener('click',()=>setNumberPage(buttonNumber));

buttonLeft.addEventListener('click',()=>getPreviousCards(arrPets,parentElem));
buttonLeft.addEventListener('click',()=>setNumberPage(buttonNumber))
buttonDoubleLeft.addEventListener('click',()=>toTheFirstPage(arrPets,sliderLength));
buttonDoubleLeft.addEventListener('click',()=>setNumberPage(buttonNumber));



function changeButtonState(elements =[],flag = false) {
    elements.forEach(item => {
        if(flag === true) {
            item.setAttribute('disabled',flag);
        } else {
            item.removeAttribute('disabled');
        }
    })
}

function toTheFirstPage(arr,sliderLength) {
    startIndex =0;
    let subArr = arr.slice(startIndex,sliderLength);
    createCards(subArr,parentElem);
    minPage = 1;
    changeButtonState([buttonLeft,buttonDoubleLeft],true);

}


function toTheLastPage(arr,sliderLength) {
    startIndex = arr.length-sliderLength;
    let subArr = arr.slice(startIndex);
    createCards(subArr,parentElem);
    minPage = maxPage;
    changeButtonState([buttonRight,buttonDoubleRight],true);
}

function setNumberPage(button) {
    console.log('minPage', minPage)
    console.log('maxPage', maxPage)


    increase();
    checkNumberPage();


/* todo  increase*/
    function increase() {
        if(minPage+1 === 2){
            button.innerHTML = 1;
            minPage++;

        }else if (minPage <= maxPage ) {
            button.innerHTML = minPage;
            minPage++;
        }
    }

    function checkNumberPage() {
        checkMinPageNumber();
        checkMaxPageNumber();

        function checkMaxPageNumber() {
            if (minPage === maxPage + 1) {
                changeButtonState([buttonRight, buttonDoubleRight], true);
            } else {
                changeButtonState([buttonRight, buttonDoubleRight], false);
            }
        }

        function checkMinPageNumber() {
            if (minPage - 1 === 1) {
                changeButtonState([buttonLeft, buttonDoubleLeft], true);
            } else {
                changeButtonState([buttonLeft, buttonDoubleLeft], false);
            }
        }
    }
}

function getPreviousCards(arr, parent) {
    if(startIndex - sliderLength > 0) {
        let subArr = arr.slice(startIndex-(sliderLength * 2),startIndex-sliderLength);
        createCards(subArr,parent);
        startIndex -= sliderLength;
    }
}

function getNextCards(arr, parent) {
    if (startIndex + sliderLength <= arr.length) {
        let subArr = arr.slice(startIndex, startIndex + sliderLength);

        createCards(subArr, parent);
        startIndex += sliderLength;


    }
}

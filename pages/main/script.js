/* init */
const parent = document.querySelector('.pets__container-cards');
const buttonRight = document.querySelector(' .button_arrow_right');
const buttonLeft =  document.querySelector(' .button_arrow_left');
const sliderLength = 3;
let startIndex = 1;

/* data for cards*/
const pets = [];
pets.push(
    {   name:'Katrine',
        photo:'../../assets/images/pets/gray-cat.png',
    },
    {
        name:'Jennifer',
        photo:'../../assets/images/pets/white-dog.png',
    },
    {
        name:'Woody',
        photo:'../../assets/images/pets/orange-dog.png',
    },
    {
        name:'Sophia',
        photo:'../../assets/images/pets/pets-sophia.png'
    },
    {
        name:'Timmy',
        photo:'../../assets/images/pets/pets-timmy.png'
    },
    {
        name:'Charly',
        photo:'../../assets/images/pets/pets-charly.png'
    },
    {
        name:'Scarlett',
        photo:'../../assets/images/pets/pets-scarlett.png'
    },
    {
        name:'Freddie',
        photo:'../../assets/images/pets/pets-freddie.png'
    }
)
/* appending tree cards by default */
const firstCard = pets.slice(0,3);
createCards(firstCard);

/* events */
buttonRight.addEventListener('click',() => getCurrentPets(pets,'right'));
buttonLeft.addEventListener('click', ()=> getCurrentPets(pets,'left'));


function createCards(arr) {
    parent.textContent=' ';

    for(let i = 0; i < arr.length; i++){
        const cardPets = document.createElement('article');
        cardPets.classList.add('pets__card','card');

        const petName = document.createElement('h4');
        const petPhoto = document.createElement('img');

        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper-column','pets__wrapper-column');

        const cardButton = document.createElement('button');
        cardButton.innerText ='Learn more';
        cardButton.className = 'button';

        if(i % 2 === 0 && i !== 0) {
            cardPets.classList.remove('pets__card');
            wrapper.classList.remove('pets__wrapper-column');
        }

        petName.innerText = arr[i].name;
        petPhoto.setAttribute('src',arr[i].photo);

        cardPets.appendChild(petPhoto);
        cardPets.appendChild(petName);
        cardPets.appendChild(cardButton);
        wrapper.appendChild(cardPets);
        parent.appendChild(wrapper);
    }
}

function getCurrentPets(arr,side) {
    if(side === 'right'&& ((startIndex+sliderLength) <= arr.length)) {
        let subArr = arr.slice(startIndex,startIndex+sliderLength);
        startIndex += 1;
        createCards(subArr);
    } else if (side ==='left' &&  ((startIndex -1) > 0)) {
        let subArr = arr.slice(startIndex-2,startIndex +1);
        startIndex -= 1;
        createCards(subArr);
    }
}

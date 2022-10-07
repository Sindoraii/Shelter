(function () {

    function getDate() {
        const pets = [];
        pets.push(
            {
                name: 'Katrine',
                photo: '../../assets/images/pets/gray-cat.png',
            },
            {
                name: 'Jennifer',
                photo: '../../assets/images/pets/white-dog.png',
            },
            {
                name: 'Woody',
                photo: '../../assets/images/pets/orange-dog.png',
            },
            {
                name: 'Sophia',
                photo: '../../assets/images/pets/pets-sophia.png'
            },
            {
                name: 'Timmy',
                photo: '../../assets/images/pets/pets-timmy.png'
            },
            {
                name: 'Charly',
                photo: '../../assets/images/pets/pets-charly.png'
            },
            {
                name: 'Scarlett',
                photo: '../../assets/images/pets/pets-scarlett.png'
            },
            {
                name: 'Freddie',
                photo: '../../assets/images/pets/pets-freddie.png'
            }
        )
        return pets;
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
            petPhoto.setAttribute('src', arr[i].photo);

            cardPets.appendChild(petPhoto);
            cardPets.appendChild(petName);
            cardPets.appendChild(cardButton);
            parentElem.appendChild(cardPets);
        }
    }

    window.getDate = getDate;
    window.createCards = createCards;
})()

(function () {
    function popupDescriptionOfPets(pet) {
        /* init */
        const body = document.querySelector('body');
        const root = document.querySelector('.root');
        const popup = document.createElement('section');
        const closeButton = document.createElement('button');
        const photo = document.createElement('div');
        const petImg = document.createElement('img');
        const description = document.createElement('article');
        const title = document.createElement('h3');
        const subtitle = document.createElement('h4');
        const text = document.createElement('p');
        const list = document.createElement('ul');
        const iconClose = document.createElement('img');
        const wrapper = document.createElement('div');
        let characteristics = getCharacteristics(pet);

        petImg.setAttribute('src', `${pet.img}`);
        petImg.setAttribute('alt','pet`s photo');
        iconClose.setAttribute('src','../../assets/icons/Vector.svg');
        popup.setAttribute('name','pet-info');

        title.innerHTML = pet.name;
        subtitle.innerHTML = `${pet.type} - ${pet.breed}`;
        text.innerHTML = pet.description;

        for (let key in characteristics) {
            const item = document.createElement('li');
            const title = document.createElement('b');

            title.innerHTML = key[0].toUpperCase() + key.slice(1) + ': ';
            item.innerHTML = `${pet[key]}`;
            item.classList.add('text-about-pet__item');
            item.prepend(title);
            list.appendChild(item);
        }

        popup.classList.add('pet-info');
        closeButton.classList.add('pet-info__close','button','button_arrow');
        photo.classList.add('pet-info__wrapper-img');
        petImg.classList.add('pet-info__img');
        description.classList.add('pet-info__text-about-pet', 'text-about-pet');
        title.classList.add('text-about-pet__h3');
        subtitle.classList.add('text-about-pet__h4');
        text.classList.add('text-about-pet__p');
        list.classList.add('text-about-pet__list');
        wrapper.classList.add('background');

        /* events */
        root.addEventListener('click', (event) => {
            if(!event.target.closest('.pet-info')) {
                popup.remove();
                wrapper.remove();
                body.classList.remove('no-scroll');
            }
        })

        root.addEventListener('mouseover', (event) => {
            if(event.target === wrapper || event.target.closest('.pet-info__close')) {
                closeButton.style.backgroundColor = 'var(--color-primary)';
            } else {
                closeButton.style.backgroundColor = 'transparent';
            }
        })

        closeButton.addEventListener('click',() => {
            wrapper.remove();
            popup.remove()
        });

        closeButton.appendChild(iconClose)
        photo.appendChild(petImg)
        description.appendChild(title);
        description.appendChild(subtitle);
        description.appendChild(text);
        description.appendChild(list);
        popup.appendChild(closeButton);
        popup.appendChild(photo);
        popup.appendChild(description);
        root.appendChild(popup);
        root.appendChild(wrapper);

        function getCharacteristics(obj) {
            let result = {};
            for (let key in obj) {
                result.age = obj.age;
                result.inoculations = obj.inoculations;
                result.diseases = obj.diseases;
                result.parasites = obj.parasites;
            }
            return result;
        }
    }
    /* export */
    window.popupDescriptionOfPets = popupDescriptionOfPets;
})()

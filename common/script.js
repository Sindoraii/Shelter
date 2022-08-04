/* variables for using slider listeners*/
// let startIndex;
// let sliderLength;
// let clickCount = 0;

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

function createCards(arr,parentElem) {
    parentElem.textContent=' ';

    for(let i = 0; i < arr.length; i++) {
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
        wrapper.appendChild(cardPets);
        parentElem.appendChild(wrapper);
    }
}


/* listeners for buttons of slider*/
// function getPreviousCard(arr, parentElem, count = 0) {
//         // if (startIndex-clickCount-1 >= 0) {
//         let subArr = arr.slice(startIndex-clickCount-1, sliderLength - startIndex+clickCount+1);
//         console.log('start ', startIndex-clickCount-1)
//         console.log('end ', sliderLength - startIndex)
//         console.log('index ', startIndex)
//         console.log(subArr)
//         startIndex -= 1;
//         console.log('index after', startIndex)
//         createCards(subArr, parentElem);
//         console.log(arr)
//
// // }
// }


// function getNextCards(arr, parentElem, count = 1) {
//     if ( count >= 1) {
//         let end = count + sliderLength + startIndex - 1;
//         let start = startIndex + count - 1;
//
//         if (end <= arr.length) {
//             let subArr = arr.slice(start, end);
//             startIndex += count;
//             createCards(subArr, parentElem);
//             clickCount++;
//         }
//
//         if (startIndex + sliderLength <= arr.length) {
//             let subArr = arr.slice(startIndex + count-1, startIndex * count);
//             console.log('start ', startIndex + count);
//             console.log('end ', startIndex * count)
//             startIndex += 1;
//
//             createCards(subArr, parentElem);
//             clickCount++;
//
//             console.log(arr)
//             console.log(subArr)
//         }
//
//     // } else if (count === 0) {
//     //     if (startIndex + sliderLength <= arr.length) {
//     //         let subArr = arr.slice(startIndex, startIndex + sliderLength);
//     //
//     //         startIndex += 1;
//     //         createCards(subArr, parentElem);
//     //         clickCount++;
//     //     }
//     } else {
//         console.error('Count should be equal  zero or positive integer');
//     }
//     console.log('INDEX ' , startIndex)
// }






// function getSignalForObservers(observers) {
//     if(Array.isArray(observers)) {
//         observers.forEach(observer => {
//             observer.signal = true;
//         })
//     } else {
//         console.error('Observers type is not array');
//     }
// }
//
// function createObserver(observer,callback) {
//     let obj = {
//         observer: observer,
//         signal: false,
//         update: callback()
//     }
//     return obj;
// }








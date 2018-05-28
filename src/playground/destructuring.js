//
// Object Destructuring
//

// const person = {
//     name: 'Alex',
//     age: 28,
//     location: {
//         city: 'petach-tiqwa',
//         temp: 92
//     }
// };
//Anonymous is a default value, using if person.name is not exists
// const {name: firstName = 'Anonymous' , age} = person;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// if(city && temperature){
//     console.log(`from ${city} in ${temperature}`);
// }

// console.log('-----------------------------------');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '191373'];

// const [street, city, state, zip] = address;  --- All items vars
const [, city = 'Default City', state] = address; // Use only 2 middle items
console.log(`You are in ${city} ${state}`);


const coffeeShop = ['Coffee (hot)', '2.00$', '2.50$', '2.75$'];
const [typeCoffee, , cost, ] = coffeeShop;

console.log(`A medium ${typeCoffee} costs ${cost}`);
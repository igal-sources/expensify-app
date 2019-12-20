//
// Object destructuring
//

// const person = {
//   name: "Andrew",
//   age: 26,
//   location: {
//     city: "Philadelphia",
//     temp: 92
//   }
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age} years old.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = 'Self-Publisher' } = book.publisher;

// if (publisherName) {
//   console.log(`It's ${publisherName}.`);
// }

//
// Array destructuring
//

const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"];
console.log(`You are in ${address[1]} ${address[2]}.`);

const [street, city] = address;
const [, , state] = address;

console.log(`You are in ${state} state.`);
console.log(`You are in ${city} ${state}.`);
// ============================================================================
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [first, second, third, ...num] = numbers;
console.log("first, second, third && ...num: ", first, second, third, ...num);
// ============================================================================

const item = ["Coffee (iced)", "$3.00", "$3.50", "$3.75"];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);

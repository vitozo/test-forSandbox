const cards = [
    {
        id: 1,
        balance: 100
    },
    {
        id: 2,
        balance: 200
    },
    {
        id: 3,
        balance: 20
    }
]

let cardsSum = 0;

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    cardsSum = cardsSum + card.balance
}

console.log();

//


////////////////////////////////////////////////////////////////////////////////////////////////

// const greet = (name) => name === "Johnny" ? "Hello, my love!" : "Hello," + name + "!";

// const greet = (name) => {
//     if (name === "Johnny") {
//         return (
//             "Hello, my love!"
//         );
//     }
//     return(
//         "Hello," + ' ' + name + "!"
//     );
// };

const greet = (name) => name === "Johnny" ? "Hello, my love!" : `Hello,  ${name}!`;

console.log(greet("Din"));

////////////////////////////////////////////////////////////////////////////////////////////////////

function findNthPower(array, N) {
    if (N >= 0 && N < array.length) {
        return Math.pow(array[N], N);
    } else {
        return -1;
    };
};


console.log(findNthPower([1, 2, 3, 4], 2)); // Output: 9
console.log(findNthPower([1, 2, 3], 3));   // Output: -1








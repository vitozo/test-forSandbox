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

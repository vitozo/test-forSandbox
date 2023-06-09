// const arr = [1, 2, 3, 4, 6, 7, 8];

// const findFirstNonConsecutive = (arr) => {

//     for (let i = 0; i < arr.length - 1; i++) {
//         const el = arr[i];
//         const next = arr[i + 1];
//         if (next - el !== 1) {
//             return next;
//         };
//     };
//     return null;
// };

const arr = [1, 2, 3, 4, 6, 7, 8];

const findFirstNonConsecutive = (arr) => {
    if (arr.length < 2) {
        return null;
    };

    for (let i = 1; i < arr.length; i++) {
        const el = arr[i];
        const previous = arr[i - 1];
        if (el - previous !== 1) {
            return el;
        };
    };
    return null;
};

console.log(findFirstNonConsecutive(arr));

//////////////////////////////////////

const justCheck = {
    checkOne: "Just Check GitHub",
    checkTwo: "After this action, i go to browser and reload it"
};

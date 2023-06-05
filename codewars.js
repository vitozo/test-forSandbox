const arr = [1, 2, 3, 4, 6, 7, 8];

const findFirstNonConsecutive = (arr) => {
    debugger;
    for (let i = 0; i < arr.length - 1; i++) {
        const el = arr[i];
        const next = arr[i + 1];
        if (next - el !== 1) {
            return next;
        };
    };
    return null;
};

console.log(findFirstNonConsecutive(arr)); 


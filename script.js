const arr1 = [2, 1, 3, 5, 3, 2];
const arr2 = [2, 2];
const arr3 = [2, 4, 3, 5, 1];

function firstDuplicate(a) {
    let indexes = [];

    for(let i = 0; i < a.length; i++) {
        const index = a.indexOf(a[i], i + 1);

        if (index !== -1) indexes.push(index);
    }

    if (!indexes.length) return -1;

    return a[Math.min(...indexes)];
}

console.log(firstDuplicate(arr1));
console.log(firstDuplicate(arr2));
console.log(firstDuplicate(arr3));

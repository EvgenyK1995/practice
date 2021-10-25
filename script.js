const arr1 = [2, 1, 3, 5, 3, 2];
const arr2 = [2, 2];
const arr3 = [2, 4, 3, 5, 1];

function firstDuplicate(a) {
    if (a.length <= 1) return -1;

    let indexes = {};

    for (let i = 0; i < a.length; i++) {
        let curVal = a[i];

        !indexes.hasOwnProperty(curVal)? indexes[curVal] = 1: indexes[curVal]++;

        if (indexes[curVal] > 1) return a[i];
    }

    return -1;
}

console.log(firstDuplicate(arr1));
console.log(firstDuplicate(arr2));
console.log(firstDuplicate(arr3));
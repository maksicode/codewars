// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

// function maps (array) {
//     const array2 = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i] * 2;
//         array2.push(element);
//     }
//     return array2;
// }

function maps(x) {
    return x.map(n => n * 2);
}

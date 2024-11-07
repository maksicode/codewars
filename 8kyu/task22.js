// Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.

// Решение с помощью метода reduce
function findAverage(array) {
    const total = array.reduce((sum, num) => sum + num, 0);
    if (array.length > 0) {
        return total / array.length;
    } else {
        return 0;
    }
}

// console.log(findAverage([1, 2, 3, 4, 5]));

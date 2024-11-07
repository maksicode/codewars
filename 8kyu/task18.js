// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


function sumArray(array) {

    let resultArray = [...array];
    const max = Math.max(...resultArray);
    const min = Math.min(...resultArray);
    const maxIndex = resultArray.indexOf(max);
    const minIndex = resultArray.indexOf(min);

    if (maxIndex > minIndex) {
        resultArray.splice(maxIndex, 1);
        resultArray.splice(minIndex, 1);
    } else {
        resultArray.splice(minIndex, 1);
        resultArray.splice(maxIndex, 1);
    }
    let sum = 0;

    for (let i = 0; i < resultArray.length; i++) {
        sum += resultArray[i];
    }
    return sum;
}

console.log(sumArray([1, 3, 5, 12, 8, 12]));
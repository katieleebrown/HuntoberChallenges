// Get the Mean of An Array

// Given array of numbers, always numbers, no strings, never empty
// return average of array, rounded DOWN

// Examples
// [2, 2, 2, 2] return 2
// [1, 2, 3, 4, 5] return 3

function findAverage(arr) {
    // find length of array
    let len = arr.length
    // reduce array
    let sum = arr.reduce((a, b) => a + b, 0)
    // return reduced/length rounded DOWN
    return Math.floor(sum / len)
}
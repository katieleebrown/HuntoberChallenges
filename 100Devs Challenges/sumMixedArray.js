// Sum Mixed Array

// Given array of numbers BUT some are string values, some are numbers
// Always have at least something in it

// Examples
// [9, 3, '7', '3'] => 22
// ['5', '0', 9, 3, 2, 1, '9', 6, 7] => 42

function findSum(arr) {
    // convert all items in array to Numbers
    // let nums = arr.map(x => Number(x))
    // return reduce that array
    // Updated code => convert to number while reducing
    return arr.reduce((a, b) => a + Number(b), 0)
}
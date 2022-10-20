// Sum of Array Singles

// Given an array of digits, only 2 nums will occur once, the rest twice. Return the sum of the two nums that occur once
// Only given arrays of nums, will always have 2 singles

// Results - [4, 5, 6, 7, 4, 6, 8, 5] => return 15 (7 + 8)

function findSumOfSingles(arr) {
    // filter for singles (find ones where first index == last index for that number)
    let singles = arr.filter((num, index) => arr.indexOf(num) == arr.lastIndexOf(num))

    // return those single numbers added together
    return singles.reduce((a, b) => a + b, 0)
}
// Huntober Day 8: Array Week, Day 1
// https://blog.barbaralaw.me/huntober-2022-day-8

function checkIfEqual(arr1, arr2) {
    let arr1Chars = []
    let arr2Chars = []

    arr1.forEach(arr => {
        for(let i = 0; i < arr.length; i++) {
            arr1Chars.push(arr[i])
        }
    })

    arr2.forEach(arr => {
        for(let i = 0; i < arr.length; i++) {
            arr2Chars.push(arr[i])
        }
    })

    return arr1Chars.join('') == arr2Chars.join('')
}
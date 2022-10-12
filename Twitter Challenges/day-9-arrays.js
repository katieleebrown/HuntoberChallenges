// Huntober Day 9: Arrays, Day 2
// https://blog.barbaralaw.me/huntober-2022-day-9

function moveLeft(str, arr) {
    let index = arr.indexOf(str)
    let newIndex = index - 1


    if(index <= 0) {
        return arr
    } else {
        arr.splice(index, 1)
    }

    arr.splice(newIndex, 0, str)

    return arr
}

function moveRight(str, arr) {
    let index = arr.indexOf(str)
    let newIndex = index + 1

    if(index >= arr.length) {
        return arr
    } else {
        arr.splice(index, 1)
    }

    arr.splice(newIndex, 0, str)
    return arr
}
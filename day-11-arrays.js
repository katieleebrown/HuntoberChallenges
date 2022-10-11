// Huntober Day 11: Arrays, Day 4
// https://blog.barbaralaw.me/huntober-2022-day-11

function moveUp(x, arr) {
    let arrIndex
    let indvIndex
    arr.forEach((array, inx) => {
        let i = array.indexOf(x)
        if(i != -1) {
            arrIndex = inx
            indvIndex = i
        }
    })

    if(arrIndex == 0) {
        return arr
    } else {
        let swapChar = arr[arrIndex - 1][indvIndex]
        arr[arrIndex - 1].splice(indvIndex, 1, x)
        arr[arrIndex].splice(indvIndex, 1, swapChar)
        return arr
    }
}

function moveDown(x, arr) {
    let arrIndex
    let indvIndex
    arr.forEach((array, inx) => {
        let i = array.indexOf(x)
        if(i != -1) {
            arrIndex = inx
            indvIndex = i
        }
    })

    if(arrIndex == (arr.length -1)) {
        return arr
    } else {
        let swapChar = arr[arrIndex + 1][indvIndex]
        arr[arrIndex + 1].splice(indvIndex, 1, x)
        arr[arrIndex].splice(indvIndex, 1, swapChar)
        return arr
    }
}
// Huntober Day 10: Arrays, Day 3
// https://blog.barbaralaw.me/huntober-2022-day-10

function rearrangeElements(arr) {
    let itemsWithA = []
    let itemsLongerThan3 = []
    let remainder = []

    arr.forEach(item => {
        if(item.split('').includes('a')) {
            itemsWithA.push(item)
        } else if (item.length > 3) {
            itemsLongerThan3.push(item)
        } else {
            remainder.push(item)
        }
    })

    let newArr = itemsWithA.concat(remainder).concat(itemsLongerThan3)
    return newArr
}
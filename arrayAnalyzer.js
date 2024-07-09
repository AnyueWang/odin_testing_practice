function analyzeArray (arr) {
    const average = arr.reduce((sum, num)=>sum+num, 0)/arr.length
    const sortedArr = arr.sort((a,b)=>a-b)
    const min = sortedArr.at(0)
    const max = sortedArr.at(-1)
    const length = arr.length
    return {
        average,
        min,
        max,
        length
    }
}

export default analyzeArray
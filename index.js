function findAllPermutations(string){
    if (string.split('').length === 1) {
        return [string]
    }
    let result = []
    let array = string.split('')
    for(let i = 0; i < array.length; i++) {
        let letter = [array[i]]
        let firstHalf = array.slice(0, i)
        let secondHalf = array.slice(i + 1)
        let remainder = firstHalf.concat(secondHalf)
        findAllPermutations(remainder.join('')).forEach(array =>result.push([letter.slice() + array]))
    }
    return result
}
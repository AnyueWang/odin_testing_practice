function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

function reverse(str) {
    let reversedStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    return reversedStr
}

export {
    capitalize,
    reverse,
}
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

function caesarCipher(str, shift) {
    let ciphedStr = ''
    const upperBegin = 65, lowerBegin = 97, numAlphabel = 26
    for (let i = 0; i < str.length; i++) {
        let shiftedCharCode
        const charCode = str.charCodeAt(i)
        if (upperBegin <= charCode && charCode < upperBegin + numAlphabel) {
            shiftedCharCode = (charCode + shift - upperBegin) % numAlphabel + upperBegin
        } else if (lowerBegin <= charCode && charCode < lowerBegin + numAlphabel) {
            shiftedCharCode = (charCode + shift - lowerBegin) % numAlphabel + lowerBegin
        } else {
            shiftedCharCode = charCode
        }
        ciphedStr += String.fromCharCode(shiftedCharCode)
    }
    return ciphedStr
}

export {
    capitalize,
    reverse,
    caesarCipher,
}
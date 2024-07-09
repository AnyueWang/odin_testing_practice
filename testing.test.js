import { capitalize, reverse, caesarCipher } from './stringProcessor'
import calculator from './calculator'

describe('basic string processor', () => {
    test('input "hello", we got "Hello"', () => {
        const capitalizedStr = capitalize('hello')
        expect(capitalizedStr).toBe('Hello')
    })

    test('input "hello", we got "olleh"', () => {
        const reversedStr = reverse('hello')
        expect(reversedStr).toBe('olleh')
    })
})

describe('calculators', () => {
    test('2 adding 4 is 6', () => {
        expect(calculator.add(2, 4)).toBe(6)
    })

    test('2 subtracting 4 is -2', () => {
        expect(calculator.subtract(2, 4)).toBe(-2)
    })

    test('2 multiplying 4 is 8', () => {
        expect(calculator.multiply(2, 4)).toBe(8)
    })

    test('2 dividing 4 is 0.5', () => {
        expect(calculator.divide(2, 4)).toBe(0.5)
    })
})

describe('caesar cipher', () => {
    test('caesar cipher processing "xyz" with shift factor 3 is "abc"', () => {
        const ciphedText = caesarCipher('xyz', 3)
        expect(ciphedText).toBe('abc')
    })

    test('caesar cipher processing "HeLLo" with shift factor 3 is "KhOOr"', () => {
        const ciphedText = caesarCipher('HeLLo', 3)
        expect(ciphedText).toBe('KhOOr')
    })

    test('caesar cipher processing "Hello, World!" with shift factor 3 is "Khoor, Zruog!"', () => {
        const ciphedText = caesarCipher('Hello, World!', 3)
        expect(ciphedText).toBe('Khoor, Zruog!')
    })
})




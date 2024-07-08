import {capitalize, reverse} from './stringProcessor'

test('input "hello", we got "Hello"', ()=>{
    const capitalizedStr = capitalize('hello')
    expect(capitalizedStr).toBe('Hello')
})

test('input "hello", we got "olleh"', ()=>{
    const reversedStr = reverse('hello')
    expect(reversedStr).toBe('olleh')
})
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    let result = '';
    
    // Перебираем каждый символ в строке
    for (let i = 0; i < str.length; i++) {
        // Добавляем символ дважды в результат
        result += str[i] + str[i];
    }
    
    return result;
}

console.log(doubleChar("String"));
console.log(doubleChar("Hello")); 
console.log(doubleChar("1234!_ "));


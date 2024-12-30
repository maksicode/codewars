// function expressionMatter(a, b, c) {
//     // Вычисляем все возможные комбинации
//     const expressions = [a + b + c, a + b * c, a * b + c, a * b * c, (a + b) * c, a * (b + c)];
//     // Возвращаем максимальное значение
//     return Math.max(...expressions);
// }


function expressionMatter(a, b, c) {
    // Вычисляем все возможные комбинации и возвращаем максимальное значение
    return Math.max(a + b + c, a + b * c, a * b + c, a * b * c, (a + b) * c, a * (b + c));
}

const total = expressionMatter(1, 2, 3);
console.log(total);
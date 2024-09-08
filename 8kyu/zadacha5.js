function problem(x) {
    
    if(typeof x === 'string') {
        return 'Error';
    }
    return x * 50 + 6;
}


const result = problem(6);
console.log(result);
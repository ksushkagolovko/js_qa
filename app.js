function pow(a, b) {
    let base = a;
    for(let i = 1; i < b; i++) {
        a = a*base;
    }
    return a;
}

let result2 = pow(2, 2);
let result3 = pow(2, 3);
let result4 = pow(2, 4);
console.log(`2 pow 2: ${result2}\n2 pow 3: ${result3}\n2 pow 4: ${result4}`);

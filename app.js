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
let result5 = Math.pow(2, 5);
console.log(`2 в степени 2: ${result2}\n2 в степени 3: ${result3}\n2 в степени 4: ${result4}`);
console.log(result5);
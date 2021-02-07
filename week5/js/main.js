function amIOldEnough(){
    var age = document.getElementById("age").value;
    debugger;
        if (age < 12) {
        debugger;
        document.getElementById("responseOne").innerHTML =  'No, sorry.';
        } else if (age < 18) {
        debugger;
        document.getElementById("responseOne").innerHTML =  'Only if you are accompanied by an adult.';
        } else {
        debugger;
        document.getElementById("responseOne").innerHTML =  'Yep, come on in!';
    }
}

function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError('You can\'t find the square root of negative numbers')
    }
    return Math.sqrt(number);
};

function imaginarySquareRoot() {
    'use strict';
    let number = document.getElementById("sqrt").value;
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch(error) {
        answer = squareRoot(-number)+"i";
    } finally {
        document.getElementById("responseTwo").innerHTML = `+ or - ${answer}`;
    }
}

function factorsOf(n) {
    n = parseInt(n);
    var res = document.getElementById("responseThree");
    if(Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if(n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if(!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i=1 , max = Math.sqrt(n); i <= max ; i++) {
        if (n%i === 0){
        factors.push(i,n/i);
        }
    }
res.innerHTML = factors.sort((a,b) => a - b);
return factors.sort((a,b) => a - b);
}

function isPrime() {
    try{
    let n = document.getElementById("factors").value;
    if(factorsOf(n).length === 2){
        document.getElementById("responseThree").innerHTML += " - " + n + " is prime.";
    }
} catch(error) {
    return false;
}
    }

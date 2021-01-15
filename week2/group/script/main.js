function moveText(){
    var input = document.getElementById("input").value;
    document.getElementById("output").innerHTML = input;
}

function addNumbers(){
    var total = 0;
    var input = document.getElementById("numberInput").value;
    if(!isNaN(input)){
        for(var i = 1; i <= input; i++){
            total += i;
        }
        document.getElementById("numberOutput").innerHTML = total;
    } else{
        document.getElementById("numberOutput").innerHTML = "Please provide a valid number.";
    }
}

function calculate(){
    var operator = document.getElementById("operator").value;
    var x = document.getElementById("numberOne").value;
    var y = document.getElementById("numberTwo").value;
    if(!isNaN(x) && !isNaN(y)){
        switch(operator){
        case 'add':
            add(x,y);
        break;
            
        case 'subtract':
            subtract(x,y);
        break;

        case 'multiply':
            const product = (x,y) => parseInt(x) * parseInt(y);
            document.getElementById("sumOutput").innerHTML = product(x,y);
        break;

        case 'divide':
            divide(x,y);
        break;
        }
    } else{
        document.getElementById("sumOutput").innerHTML = "Please provide two valid numbers.";
    }
}

function add(x, y){
    document.getElementById("sumOutput").innerHTML = parseInt(x) + parseInt(y);
}

const subtract = function(x,y){
    document.getElementById("sumOutput").innerHTML = parseInt(x) - parseInt(y);
}

function divide(x, y){
    document.getElementById("sumOutput").innerHTML = parseInt(x) / parseInt(y);
}
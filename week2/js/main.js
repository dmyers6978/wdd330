function clearBoard(){
    var divs = document.getElementsByTagName("div");
    for(var i = 0; i < divs.length; i++){
        divs[i].innerHTML = "";
    }
}

function buildTriangle(){
    clearBoard();
    for(var j = 1; j <= 7; j++){
        var elem = document.createElement("P");
    for(var i = 1; i <= j; i++){
        elem.innerHTML += "#";
    }
    document.getElementById("one").appendChild(elem);
    }
}

function buildChess(){
    clearBoard();
    var board = "";
    var divBoard = "";
    var size = document.getElementById("size").value;
    for(var i = 1; i <= size; i++){
        if(i % 2 == 0){
            for(var j = 1; j <= size; j++){
                if(j % 2 == 0){
                    board += " ";
                    divBoard += "&nbsp;";
                } else{
                    board += "#";
                    divBoard += "#";
                }
            }
            board += "\n";
            divBoard += "<br>";
        } else{
            for(var j = 1; j <= size; j++){
                if(j % 2 == 1){
                    board += " ";
                    divBoard += "&nbsp;";
                } else{
                    board += "#";
                    divBoard += "#";
                }
            }
            board += "\n";
            divBoard += "<br>";
        }
    }
    console.log(board);
    document.getElementById("two").innerHTML = divBoard;
}

function findMin(){
    clearBoard();
    var one = document.getElementById("numOne").value;
    var two = document.getElementById("numTwo").value;
    var minimum = min(one, two);
        document.getElementById("third").innerHTML = "The minimum number is " + minimum;
}

function min(one, two){
    if(one > two){
        return two;
    } else {
        return one;
    }
}

function isEven(number){
    clearBoard();
    if(number == 1){
        document.getElementById("fourth").innerHTML = "Odd";
    } else if(number == 0){
        document.getElementById("fourth").innerHTML = "Even";
    } else{
        isEven(number - 2);
    }
}

function countBs(bString){
    clearBoard();
    var counter = 0;
    for(var i = 0; i < bString.length; i++){
        if(bString[i] == "B"){
            counter++;
        }
    }
    console.log(counter);
    if(counter == 1){
    document.getElementById("fifth").innerHTML = "There is " + counter + " B in " + bString;
    } else{
    document.getElementById("fifth").innerHTML = "There are " + counter + " Bs in " + bString;
    }
}

function countChar(charString, char){
    clearBoard();
    if(char.length > 1){
    document.getElementById("sixth").innerHTML = "Please provide only one character to count."
    } else{
    var counter = 0;
    for(var i = 0; i < charString.length; i++){
        if(charString[i] == char){
            counter++;
        }
    }
    console.log(counter);
    if(counter == 1){
    document.getElementById("sixth").innerHTML = "There is " + counter + " " + char + " in " + charString;
    } else{
    document.getElementById("sixth").innerHTML = "There are " + counter + " " + char + "s in " + charString;
    }
}
}

function buildNumArray(start, end, step){
    start = parseInt(start);
    end = parseInt(end);
    step = parseInt(step);
    clearBoard();
    var numArr = [];
    if(start < end){
    for(var i = start; i <= end; i += step){
        numArr.push(i);
    }
} else{
    for(var i = start; i >= end; i += step){
        numArr.push(i);
    }
}
    console.log(numArr);
    document.getElementById("seventh").innerHTML = numArr + "<br>";
    sum(numArr);
}

function sum(numArr){
    var total = 0;
    for(var i = 0; i < numArr.length; i++){
        total = total + numArr[i];
    }
    console.log(total);
    document.getElementById("seventh").innerHTML += total;
}

function reverseArray(){
    clearBoard();
    var startArr = ["A", "B", "C"];
    var endArr = [];
    for(var i = startArr.length - 1; i >= 0; i--){
        endArr.push(startArr[i]);
    }
    console.log(startArr, endArr);
    document.getElementById("eight").innerHTML = startArr + "<br>" + endArr;
}

function reverseArrayInPlace(){
    clearBoard();
    var startArr = ["A", "B", "C", "D", "E", "F", "G"];
    for(var i = 0; i <= Math.floor(startArr.length/2)-1; i++){
         var first = startArr[i];
         var len = startArr.length -1- i;
         var last = startArr[len];
         console.log(first, last)
         startArr[i] = last;
         startArr[len] = first;
    }
    document.getElementById("nine").innerHTML = startArr;
}
function callHello(){
const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };
function sayHello(greeting='Hello'){
    return `${ greeting }, my name is ${ this.name }`;
}
document.getElementById('one').innerHTML = sayHello.call(clark, 'How do you do') + "<br>";
document.getElementById('one').innerHTML += sayHello.call(bruce);
}

function newPromise(){
    var two = document.getElementById("two");
    const dice = {
        sides: 6,
            roll() {
                return Math.floor(this.sides * Math.random()) + 1;
            }
        }
        console.log('Before the roll');
        const roll = new Promise( (resolve,reject) => {
            const n = dice.roll();
            if(n > 1){
                setTimeout(()=>{resolve(n)},n*200);
            } else {
                setTimeout(()=>reject(n),n*200);
            }
        });
        roll.then(result => two.innerHTML = `I rolled a ${result}` )
        .catch(result => two.innerHTML = `Drat! ... I rolled a ${result}` );
        console.log('After the roll');
}

const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

textButton.addEventListener('click', () => {
    fetch(textURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then( text => outputDiv.innerText = text )
    .catch( error => console.log('There was an error:', error))
},false);

apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = data.value )
    .catch( error => console.log('There was an error:', error))
},false);

const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);
function addTask(event) {
    event.preventDefault();
    const number = form.task.value;
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
    const data = JSON.stringify(task);
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url,
    {
        method: 'POST',
        header: headers,
        body: data
    }
    )
    fetch(request)
    .then( response => response.json() )
    .then( task => console.log(`Task saved with an id of ${task.id}`) )
    .catch( error => console.log('There was an error:', error))
}
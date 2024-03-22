/*var somma = 0;

for (var i = 1; i <= 100000; i++) {
    somma += i;
}

console.log("La somma dei numeri da 1 a 100000 e':", somma);

var somma = 0

for (var i = 0; i <= 100000; i++) {
    somma += i;
}

var h1 = document.getElementById('pippo');

h1[0].innerText = somma;*/

var counter = 0;

var upBtn = document.getElementById('up');
var downBtn = document.getElementById('down');

upBtn.addEventListener('click', up);
downBtn.addEventListener('click', down);

function up() {
        counter++;
        console.log('up', counter);
        render();
}

function down() {
        counter--;
        console.log('down', counter);
        render();
}

function render() {
    var h1 = document.getElementById('counter');
    h1.innerHTML = counter;
}


var listValues = [
    {label: 'fare la spesa', done: false },
    {label: 'pisciare il cane', done: false },
    {label: 'fare aperitivo', done: false },
];

var doneValues = [
    false,
    false,
    false
];

var lista = document.getElementById('lista');

function drawList() {
    lista.innerHTML = '';
    for(var item of listValues) {
        var li = document.createElement('li');
        var text = document.createElement('span');
        var delBtn = document.createElement('button');
        text.innerText = item.label;
        if(item.done === true) {
            text.classList.add('done');
        }
        delBtn.innerText = 'X';
        text.addEventListener('click', pippo);
        delBtn.addEventListener ('click', deleteItem);
        li.appendChild(text);
        li.appendChild(delBtn);
        lista.appendChild(li);
    }
}

drawList();

var addBtn = document.getElementById('add');

addBtn.addEventListener('click', addMario);

function addMario() {
    var input = document.getElementById('newvalue');
    var newObject = {
        label: input.value,
        done: false
    };
    listValues.push(newObject);
    drawList();
}

function pippo(e) {
    var li = e.target.parentElement;
    for(var i = 0; i < lista.children.length; i++) {
        if(lista.children[i] === li) {
                listValues[i].done = !listValues[i].done;
            }     
    }

    drawList();
}

function deleteItem(e) {
    var li = e.target.parentElement;
    for(var i = 0; i < lista.children.length; i++) {
        if(lista.children[i] === li) {
            listValues.splice(i, 1);
        }
    }

    drawList();
}




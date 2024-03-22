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

var lista = document.getElementById('lista');

for(var c of lista.children) {
    c.addEventListener('click', pippo)
}

var addBtn = document.getElementById('add');



addBtn.addEventListener('click', addMario);
function addMario() {
    var input = document.getElementById('newvalue')
    var li = document.createElement('li');
    var text = document.createElement('span');
    text.innerText = input.value;
    var delBtn = document.createElement('button');
    delBtn.innerText = 'X';
    delBtn.addEventListener('click', deleteItem);
    li.appendChild(text);
    li.appendChild(delBtn);
    li.addEventListener('click', pippo);

    lista.appendChild(li);
}


function pippo(e) {
    var li = e.target;
    li.className = 'done';
}

function deleteItem() {
    
}
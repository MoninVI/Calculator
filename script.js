var buttons = document.querySelectorAll(".add");
buttons.forEach(function(button){
    button.addEventListener('click', giveClick)
});
function giveClick(event){
    var but = event.currentTarget;
    var val = but.innerHTML;
    var inp = document.querySelector('input');
    inp.value = inp.value + val;
}

var result = document.querySelector('.result');
result.addEventListener('click', colculate);
function colculate(){
    var znak = document.querySelector('input').value; // 6+5*7/5

    var numbers = znak.split(/\+|\-|\×|\÷/g); // [6,5,7,5]

    var operators = znak.replace(/[0-9]|\./g, "").split(""); // [+,*,/]

    var division = operators.indexOf('÷'); // 2 - индекс
    while (division != -1) {
        numbers.splice(division, 2, numbers[division] / numbers[division + 1]); // [6,5,1.4]
        operators.splice(division, 1); // [+,*]
        division = operators.indexOf('÷'); // -1 - не найден
    }

    // добавить другие знаки (*, +, -)
    // работал ввод с клавиатуры (только числа, знаки и enter)
    // чтобы два и более знака не шли друг за другом
    
    znak = numbers[0];

    document.querySelector('input').value = znak
}

var clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', delInput);
function delInput (){
    var valueInput = document.querySelector('input');
    valueInput.value = '';
}

var minSyb = document.querySelector('.minSym');
minSyb.addEventListener('click', minusSymbol);
function minusSymbol(){
    var symbols = document.querySelector('input');
    symbols.value = symbols.value.slice(0, -1);
}

document.addEventListener('keydown', function(event){
    if (event.key == '0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'){
        var tap = document.querySelector('input');
        tap.value = tap.value + event.key;
    } else if (event.key == '='){
        var tap = document.querySelector('input');
        tap.value = result;
    
    } else {
        var tap = document.querySelector('input');
        tap.value = tap.value;
    }
});
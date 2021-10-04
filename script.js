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

    var numbers = znak.split(/\+|\−|\×|\÷/g); // [6,5,7,5]

    var operators = znak.replace(/[0-9]|\./g, "").split(""); // [+,*,/]

    var division = operators.indexOf('÷'); // 2 - индекс
    while (division != -1) {
        numbers.splice(division, 2, numbers[division] / numbers[division + 1]); // [6,5,1.4]
        operators.splice(division, 1); // [+,*]
        division = operators.indexOf('÷'); // -1 - не найден
    }
    var division2 = operators.indexOf('×'); 
    while (division2 != -1) {
        numbers.splice(division2, 2, numbers[division2] * numbers[division2 + 1]); 
        operators.splice(division2, 1); 
        division2 = operators.indexOf('×'); 
    }
    var division3 = operators.indexOf('−'); 
    while (division3 != -1) {
        numbers.splice(division3, 2, numbers[division3] - numbers[division3 + 1]); 
        operators.splice(division3, 1); 
        division3 = operators.indexOf('−'); 
    }
    var division4 = operators.indexOf('+'); 
    while (division4 != -1) {
        numbers.splice(division4, 2, Number(numbers[division4]) + Number(numbers[division4 + 1])); 
        operators.splice(division4, 1); 
        division4 = operators.indexOf('+'); 
    }
    // работал ввод с клавиатуры (знаки и enter)
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
    if (event.key =='0'||
        event.key =='1'||
        event.key =='2'||
        event.key =='3'||
        event.key =='4'||
        event.key =='5'||
        event.key =='6'||
        event.key =='7'||
        event.key =='8'||
        event.key =='9'){
        var tap = document.querySelector('input');
        tap.value = tap.value + event.key;
    } else if (event.key == '='||
            event.key == 'Enter'){
        colculate();
    } else if (event.key == '/'){
                    var tap2 = document.querySelector('input');
                    tap2.value = tap2.value + '÷';
                }else if (event.key == '+'){
                    var tap3 = document.querySelector('input');
                    tap3.value = tap3.value + '+';
                }
                

    document.querySelectorAll('button').forEach(function(button){
        button.blur();
    });


});

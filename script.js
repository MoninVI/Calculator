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
    var znak = document.querySelector('input');
    if (znak.value.indexOf('+') != -1){
        var XXX = znak.value.split('+');
        XXX[0] = parseInt(XXX[0]);
        XXX[1] = parseInt(XXX[1]);
        znak.value = XXX[0] + XXX[1];
    } else if (znak.value.indexOf('-') != -1){
        var YYY = znak.value.split('-');
        YYY[0] = parseInt(YYY[0]);
        YYY[1] = parseInt(YYY[1]);
        znak.value = YYY[0] - YYY[1];}
        else if (znak.value.indexOf('×') != -1){
            var ZZZ = znak.value.split('×');
            ZZZ[0] = parseInt(ZZZ[0]);
            ZZZ[1] = parseInt(ZZZ[1]);
            znak.value = ZZZ[0] * ZZZ[1];}
            else if (znak.value.indexOf('÷') != -1){
                var WWW = znak.value.split('÷');
                WWW[0] = parseInt(WWW[0]);
                WWW[1] = parseInt(WWW[1]);
                znak.value = WWW[0] / WWW[1];}
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
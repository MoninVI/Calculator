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
        znak.value = YYY[0] - YYY[1];
        
    }
}
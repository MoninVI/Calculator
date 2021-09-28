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
    console.log(znak.value.indexOf('+'))
    if (znak.value.indexOf('+') == 1){
        console.log('+');
    } else if (znak.value.indexOf('-')== 1){
        console.log('-');
    }
}
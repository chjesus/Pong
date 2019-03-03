const circle = document.getElementById('circle');
const barLeft = document.getElementById('bar-left');
const barRight = document.getElementById('bar-right');

var initSide;
var aux = true;
var initNumber, endNumber;
var auxInitLeft, auxInitRight;

init();

circle.addEventListener('animationend',() => animate(initSide) )

function init(){
    initSide = Math.floor(Math.random()*2);
    animate(initSide);
    initSide ? auxInitLeft = endNumber : auxInitRight = endNumber;
    aux = false;
}

function animate(sideNumber){
    sideNumber ? (
        auxInitRight = endNumber,
        animationCircle("rc")
    ) : (
        auxInitLeft = endNumber,
        animationCircle("lc")
    );
}

function animationCircle(type){
    aux ? initNumber = Math.floor(Math.random()*5)*25 : initNumber = endNumber;
    endNumber = Math.floor(Math.random()*5)*25;    
    animateBar(aux);
    circle.style.animationName = type+"-"+initNumber+"-to-"+endNumber;
    initSide = initSide ? 0 : 1; 
}

function animateBar(validate){
    let validateBar;
    let auxInit;
    validate ? (
        barLeft.style.animationName="bar-"+initNumber+"-to-"+endNumber,
        barRight.style.animationName="bar-"+initNumber+"-to-"+endNumber
    ) : (
        validateBar = initSide ? barLeft : barRight,
        auxInit = initSide ? auxInitLeft : auxInitRight,
        validateBar.style.animationName="bar-"+auxInit+"-to-"+endNumber
    );
}
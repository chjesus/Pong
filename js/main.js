const circle = document.getElementById('circle');
const barLeft = document.getElementById('bar-left');
const barRight = document.getElementById('bar-right');
const vector = ['0','25','50','75','100']


let initNumber;
let endNumber;
let initNumberString;
let value;
let initSide;
let aux = 1;
let auxInitLeft;
let auxInitRight;

init();

circle.addEventListener('animationend',()=>{
    if(initSide){ //derecha
        auxInitRight = endNumber;
        if(endNumber == 0){
            validateDown(value,"drc","mrc");
        }else if(endNumber == 100){
            validateUp(value,"urc","mrc");
        }else if(endNumber > 0 && endNumber < 100){
            validateInit(value,"urc","drc","mrc");
        }
        initSide = 0;
    }else{ //izquierda
        auxInitLeft = endNumber;
        if(endNumber == 0){
            validateDown(value,"dlc","mlc");
        }else if(endNumber == 100){
            validateUp(value,"ulc","mlc");
        }else if(endNumber > 0 && endNumber < 100){
            validateInit(value,"ulc","dlc","mlc");
        }
        initSide = 1;
    }
})

function validateInit(valuePosition,upType,downType,middleType){
    switch(valuePosition){
        case 0: animateDown(downType); break;
        case 1: animateMiddle(middleType); break;
        case 2: animateUp(upType); break;
    }
}

function validateDown(valueDirection,downType,middleType){
    switch(valueDirection){
        case 0: animateDown(downType); break;
        case 1: animateMiddle(middleType); break;
    }
}

function validateUp(valueDirection,upType,middleType){
    switch(valueDirection){
        case 0: animateUp(upType); break;
        case 1: animateMiddle(middleType);  break;
    }
}

function init(){
    
    let initPosition;
    initSide = Math.floor(Math.random()*2);
    if(initSide){ //derecha
        initPosition = Math.floor(Math.random()*3);
        validateInit(initPosition,"urc","drc","mrc");
        auxInitRight = endNumber;
        initSide = 0;
    }else{ //izquierda
        initPosition = Math.floor(Math.random()*3);
        validateInit(initPosition,"ulc","dlc","mlc");
        auxInitLeft = endNumber;
        initSide = 1;
    }
    aux = 0;
}

function animateUp(type){
    if(aux){
        initNumber = (Math.floor(Math.random()*4)+1)*25;
    }else{
        initNumber = endNumber;
    }

    initNumberString = initNumber.toString();
    for (let index = 0; index < vector.length; index++) {
        if(vector[index]==initNumberString){
            endNumber = Math.floor(Math.random()*index)*25;
        }
    }
    animateBar(aux);
    directionCircle();
    console.log("type: "+type+" initNumber: "+initNumber+" endNumber: "+endNumber);
    circle.style.animationName = type+"-"+initNumber+"-to-"+endNumber;
}

function animateDown(type){
    if(aux){
        initNumber = Math.floor(Math.random()*4)*25;
    }else{
        initNumber = endNumber;
    }

    initNumberString = initNumber.toString();
    for (let index = 0; index < vector.length; index++) {
        if(vector[index]==initNumberString){
            endNumber = Math.floor((Math.random()*((vector.length-1)-index))+1)*25;
            if(initNumber >= endNumber){
                 endNumber += initNumber;
             }
        }
    }
    animateBar(aux);
    directionCircle();
    console.log("type: "+type+" initNumber: "+initNumber+" endNumber: "+endNumber);
    circle.style.animationName = type+"-"+initNumber+"-to-"+endNumber;
}

function animateMiddle(type){
    if(aux){
        initNumber = Math.floor(Math.random()*5)*25;
    }else{
        initNumber = endNumber;
    }
    endNumber = initNumber;
    animateBar(aux);
    directionCircle();
    console.log("type: "+type+" initNumber: "+initNumber+" endNumber: "+endNumber);
    circle.style.animationName = type+"-"+initNumber+"-to-"+endNumber;
}

function animateBar(validate){
    let validateBar;
    let auxInit;
    let val = validate ? (
        barLeft.style.animationName="bar-"+initNumber+"-to-"+endNumber,
        barRight.style.animationName="bar-"+initNumber+"-to-"+endNumber
    ) : (
        validateBar = initSide ? barLeft : barRight,
        auxInit = initSide ? auxInitLeft : auxInitRight,
        validateBar.style.animationName="bar-"+auxInit+"-to-"+endNumber
    );
}

function directionCircle(){
    if(endNumber == 0){
        value = Math.floor(Math.random()*2);
    }else if(endNumber == 100){
        value = Math.floor(Math.random()*2);
    }else if(endNumber > 0 && endNumber < 100){
        value = Math.floor(Math.random()*3);
    }
}
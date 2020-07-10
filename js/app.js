var min = 0;
var sec = 0;
var msec = 0;
var countNum = 0;
var copyTime = document.getElementById('place');

var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
var startTime = document.getElementById('start');
var stopTime = document.getElementById('stop');
var resetTime = document.getElementById('reset')
var countTime = document.getElementById('count')


var interval;

function timer(){
    if(msec < 9){
        msec++;
        msecHeading.innerHTML = "0" + msec;
    }
    else{   
        msec++;
        msecHeading.innerHTML = msec;
    }
    if(msec >= 100){
        if(sec < 9){
            sec++;
            secHeading.innerHTML = "0" + sec;
            msec = 0;
        }
        else{
            sec++;
            secHeading.innerHTML = sec;
            msec = 0;
        }
    }
    else if(sec >= 59){
        if(min < 9){
            min++;
            minHeading.innerHTML = "0" + min;
            sec = 0;
        }
        else{
            min++;
            minHeading.innerHTML = min;
            sec = 0;
        }
    }
}

function start(){
    interval = setInterval(timer,10)
    startTime.disabled = true;
    stopTime.disabled = false;
    resetTime.disabled = false;
    countTime.disabled = false;
}

function stop(){
    clearInterval(interval)
    startTime.disabled = false;
    stopTime.disabled = true;
    resetTime.disabled = false;
}

function reset(){
    min = "00";
    sec = "00";
    msec = "00";
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
    startTime.disabled = false;
    resetTime.disabled = true;
    countTime.disabled = true;
}


function count(){
    countNum++;
    var head ='Lap' + countNum + '<br>';
    copyTime.setAttribute('id','place')
    copyTime.innerHTML += head + minHeading.innerHTML + ":" + secHeading.innerHTML + ":" + msecHeading.innerHTML +"<br><hr>";
}
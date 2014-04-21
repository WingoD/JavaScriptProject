// set initial timer time
var initialTime = Date.now();
var timeExpired = 0;
var paused = 0;
var aborted = 0;
var timePausedAt = 0;
var elapsedTime = 0;
var timerTime = 20*60*1000;  //fixme - hard coded 20min

function pause(){
    paused = 1;
    timePausedAt = Date.now();
    document.getElementById("pauseButton").disabled = "disabled";
    document.getElementById("resumeButton").disabled = "";
}

function resume(){
    paused = 0;
    var resumedTimerTime = Date.now();
    elapsedTime += resumedTimerTime - timePausedAt;
    document.getElementById("pauseButton").disabled = "";
    document.getElementById("resumeButton").disabled = "disabled";
}
function abort(){
  aborted = 1;
}

function checkTime(){
  if (paused == 1) {return;}
  if (timeExpired == 1) {return;}
  if (aborted == 1) {return;}
  var timeDifference = Date.now() - initialTime - elapsedTime;
  var timeLeft = (timerTime) - timeDifference;
  var formatted = convertTime(timeLeft);
  //call back to html page
  document.getElementById('countdown').innerHTML = '' + formatted;
}

// calculate time 
function convertTime(miliseconds) {
  var totalSeconds = Math.floor(miliseconds/1000);
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds%60;
  if (miliseconds >= 0){
    return ("0" + minutes).slice(-2) + ':' + ("0" + seconds).slice(-2);
  }
  else{
    return "Time is up.";
    timeExpired = 1; 
  }
}
// check time every 0.5 seconds
window.setInterval(checkTime, 500);
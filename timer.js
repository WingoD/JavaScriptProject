// set initial timer time
var initialTime = Date.now();
var timeExpired = 0;
var paused = 0;
var timerTime = 20*60*1000;  //fixme - hard coded 20min
function checkTime(){
  if (paused == 1) {return;}
  if (timeExpired == 1) {return;}
  var timeDifference = Date.now() - initialTime;
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
    return "00:00 Time is up."; 
    //"makes" time stop, need better solution maby
  }
}

function pause(){
    paused = 1;
    document.getElementById("pauseButton").disabled = "disabled";
    document.getElementById("resumeButton").disabled = "";
}


function resume(){
    paused = 0;
    document.getElementById("pauseButton").disabled = "";
    document.getElementById("resumeButton").disabled = "disabled";
}
// check time every 0.5 seconds
window.setInterval(checkTime, 500);
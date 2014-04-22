// set initial timer time
var started = 1;
var initialTime = 0;
var timeExpired = 0;
var paused = 0;
var aborted = 0;
var timePausedAt = 0;
var elapsedTime = 0;
var timeInput = .5;
var taskReminderText = "Time is up."

function task() {
  taskReminderText = document.getElementById("taskReminder").value;
  timeInput = document.getElementById("timerLength").value;
  //document.getElementById('countdown').innerHTML = document.getElementById('countdown').innerHTML + '    task'      //debuging tool
}

function start(){
  started = 0;
  initialTime = Date.now();
  //document.getElementById('countdown').innerHTML = document.getElementById('countdown').innerHTML + '    start'      //debuging tool
}

function reset(){
  started = 1;
  initialTime = 0;
  timeExpired = 0;
  paused = 0;
  aborted = 0;
  timePausedAt = 0;
  elapsedTime = 0;
  timeInput = .5;
  timerTime = timeInput*60*1000;
  document.getElementById("pauseButton").disabled = "";
  document.getElementById("resumeButton").disabled = "disabled";
  document.getElementById('countdown').innerHTML = '';
  //document.getElementById('countdown').innerHTML = document.getElementById('countdown').innerHTML + '    reset'      //debuging tool

}

function pause(){
    paused = 1;
    timePausedAt = Date.now();
    document.getElementById("pauseButton").disabled = "disabled";
    document.getElementById("resumeButton").disabled = "";
    //document.getElementById('countdown').innerHTML = document.getElementById('countdown').innerHTML + '    pause'      //debuging tool
}

function resume(){
    paused = 0;
    var resumedTimerTime = Date.now();
    elapsedTime += resumedTimerTime - timePausedAt;
    document.getElementById("pauseButton").disabled = "";
    document.getElementById("resumeButton").disabled = "disabled";
    //document.getElementById('countdown').innerHTML = document.getElementById('countdown').innerHTML + '    resume'      //debuging tool
}
function abort(){
  aborted = 1;
  document.getElementById('countdown').innerHTML = "Aborted";
  //document.getElementById('countdown').innerHTML = document.getElementById('countdown').innerHTML + '    abort'      //debuging tool
}

function checkTime(){
  if (paused == 1) {return;}
  if (started == 1) {return;}
  if (timeExpired == 1) {return;}
  if (aborted == 1) {return;}
  var timeDifference = Date.now() - initialTime - elapsedTime;
  var timeLeft = (timeInput*60*1000) - timeDifference;
  var formatted = convertTime(timeLeft);
  //call back to html page
  document.getElementById('countdown').innerHTML = '' + formatted + "   " + taskReminderText;
  //document.getElementById('countdown').innerHTML = document.getElementById('countdown').innerHTML + '    checkTime'      //debuging tool
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
    timeExpired = 1;
    return;
  }
}
// check time every 0.5 seconds
window.setInterval(checkTime, 500);
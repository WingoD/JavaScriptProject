// set initial timer time
var initialTime = Date.now();

function checkTime(){
  var timeDifference = Date.now() - initialTime;
  var formatted = convertTime(timeDifference);
  //call back to html page
  document.getElementById('countdown').innerHTML = '' + formatted;
}
// calculate time 
function convertTime(miliseconds) {
  var totalSeconds = Math.floor(miliseconds/1000);
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds - minutes * 60;
  return minutes + ':' + seconds;
}
// check time every 0.1 seconds
window.setInterval(checkTime, 100);
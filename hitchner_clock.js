// Assigning document elements to variables
var myClock = document.getElementById("text")
var face = document.getElementById("clock_block")



var myInterval = window.setInterval(function() {
  var myTime = new Date();
  var myHours = myTime.getHours();
  var myMinutes = myTime.getMinutes();
  var mySeconds = myTime.getSeconds();
//If statements
  if (myHours < 10) {
    myHours = "0" + myHours;
  }
  if (myMinutes < 10) {
    myMinutes = "0" + myMinutes;
  }
  if (mySeconds < 10) {
    mySeconds = "0" + mySeconds;
  }

  var outPut = "#" + myHours + myMinutes + mySeconds;
  face.style.backgroundColor = outPut;
  myClock.style.color = outPut;
  myClock.innerHTML = outPut;
} , 1000);

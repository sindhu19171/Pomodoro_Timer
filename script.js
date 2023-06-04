$(document).ready(function(){
  var wrkTimer = 1500000;
    var rstTimer = 300000;
    var curTimer = wrkTimer;
    var cntInterval;
    var timerSwitch = "work";
   
    
    function format(time) {
      var minutes = Math.floor((time/1000/60) % 60);
      var seconds = Math.floor((time / 1000) % 60); 
  if (seconds < 10) {
    return minutes + ":0" + seconds; 
  }
      else {
        return minutes + ":" + seconds;
      }  
    };
  
  function setTimer() {
    if (timerSwitch === "work") {
    curTimer = wrkTimer;
  } else if(timerSwitch === "rest") {
    curTimer = rstTimer;
  }} 
    
    
    function switchTimer() {
      if(timerSwitch === "work") {
        timerSwitch = "rest";
      }
      else {
        timerSwitch = "work";
      }
    }
    
  function update() {   
  $("#wrkTime").html(format(wrkTimer));  
  $("#restTime").html(format(rstTimer));
  $("#time").html(format(curTimer));
    $("#type").html(timerSwitch);
  };
    
   
    function countdown() {
      if (curTimer === 0) {
        switchTimer();
        setTimer();
        update();
      } else if( curTimer > 0 ) {
     curTimer = curTimer - 1000;
      }  
      update();   
   };
  
    $("#wrkUp").on("click",function(){
      wrkTimer = wrkTimer + 30000;
      setTimer();
      update();
    })
    
    $("#wrkDwn").on("click",function() {
      if(wrkTimer > 0) {
      wrkTimer = wrkTimer - 30000;
      setTimer();
      update();
      }
    })
    
    $("#restUp").on("click",function() {
      rstTimer = rstTimer + 30000;
      setTimer();
      update();
    })
    
    $("#restDwn").on("click",function() {
      if (rstTimer > 0) {
      rstTimer = rstTimer - 30000;
      setTimer();
      update();
      }
    })
    
    $("#start").on("click", function() {
      cntInterval = setInterval(countdown,1000);
    });
    
    $("#stop").on("click", function() {
      clearInterval(cntInterval);
    });
   
   update();
    
  });
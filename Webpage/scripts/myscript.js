/* var yes = 0;
var no = 0;

function refreshResults () {
  var results = document.getElementById('results');
  results.innerHTML = 'total: ' + (yes + no);
  results.innerHTML += '<br />yes: ' + yes;
  results.innerHTML += '<br />no: ' + no;
}

document.getElementById("yes-button").addEventListener('click', function () {
  yes++;
  refreshResults();
}

document.getElementById("no-button").addEventListener('click', function () {
  no++;
  refreshResults();
} */
/* $(document).ready(function(){
	

    var bar1Counter=0;
    var bar2Counter=0;
    var totalCount =0;
    
$("#option1").click(function(){  
    $("#bar1Count").text(
    bar1Counter=bar1Counter+1
    );
     
}); 
    
$("#option2").click(function(){  
    $("#bar2Count").text(
    bar2Counter=bar2Counter+1
    );  
}); 
    
    
$(".options").click(function(){
 
    totalCount = bar1Counter + bar2Counter;
    
    $("#totalCount").text(
       totalCount
    );
    
    
    
var bar1Perc = ((bar1Counter/totalCount)*100).toFixed(0);
    
$("#bar1perc").text(bar1Perc+"%");
  
var bar2Perc = ((bar2Counter/totalCount)*100).toFixed(0);    
    
$("#bar2perc  ").text(bar2Perc+"%");
  
    
$("#bar1").width((300*bar1Counter)/totalCount);
    
$("#bar2").width((300*bar2Counter)/totalCount);
   
    
});  
    
}); */
/* var buttons = document.querySelectorAll(".choice button"),
  tally = {
    1: 0,
    2: 0,
    3: 0,
    total: 0
  };

function vote(choice) {
  tally[choice]++;
  tally["total"]++;
  console.log(tally);
}

function barPercentage(node, tally) {
  var choice = node.dataset.choice;
  
  if (tally[choice])
    return tally[choice]/tally["total"] * 100;
  return 0;
}

function renderBars() {
  var bars = document.getElementsByClassName("bar");
  
  for (var i = 0; i < bars.length; i++) {
    var percentage = barPercentage(bars[i], tally);
    console.log(percentage)
    bars[i].style.height = percentage.toString() + "%";
  }
}

function setup() {
  // Set up event listeners
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
      vote(e.target.dataset["choice"]);
      renderBars();
    });
  }
  
  renderBars();
}

setup(); */
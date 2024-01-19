function getNumber(num){
    var results = document.getElementById('results');
    results.value += num;
}
function clearbutton(){
    var result = document.getElementById('clearResults');
   var results = document.getElementById('results');
   results.value = "";
}

function getResults(){
 var result = document.getElementById('results');
 result.value = eval(result.value);
}
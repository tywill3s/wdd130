function doStuff() {
  var button = document.getElementById("button");
  button.addEventListener('click', guess);
  var row = document.getElementById("row_1");  
  function guess(){
    var guessTxt = document.getElementById("guess");
    if (guessTxt.value == "guess"){
        row.innerHTML = guessTxt.value;
        console.log("YES")
    }else{
        console.log(guessTxt)
        row.innerHTML = guessTxt.value;
    }

    }
}
doStuff();






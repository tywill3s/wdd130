let initLink = "https://www.agaain.io/?utm_campaign=affiliate/utm_source=";
let dotIo = ".io"

function getName() {
    var name = document.getElementById("firstName");
    let newLink = initLink + name.value + dotIo;
    document.getElementById("output").innerHTML = newLink;
    document.getElementById("output").href = newLink;    
}

let button = document.getElementById("button");
button.addEventListener('click', getName);

let prompt = document.getElementById("firstName");
prompt.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button").click();
    }
});


function myFunction() {
    navigator.clipboard.writeText(newLink);
    alert("Copied the text: " + copyText);
  }
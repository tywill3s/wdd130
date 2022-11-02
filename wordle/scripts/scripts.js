var word = "guess";

function guess(){
    let guessTxt = document.getElementById("guess");
    item1.innerHTML = guessTxt.value.charAt(0);
    item2.innerHTML = guessTxt.value.charAt(1);
    item3.innerHTML = guessTxt.value.charAt(2);
    item4.innerHTML = guessTxt.value.charAt(3);
    item5.innerHTML = guessTxt.value.charAt(4);
}

function color(){
    let guessColor = document.getElementById("guess");
    const i1_color = document.querySelector('.item1');
    if (guessColor.value.charAt(0) == word.charAt(0)){
        i1_color.style.backgroundColor = 'green';
    }else if (word.indexOf(guessColor.value.charAt(0)) != -1){
        i1_color.style.backgroundColor = 'yellow';
    }else{
        i1_color.style.backgroundColor = 'grey';
    }
    const i2_color = document.querySelector('.item2');
    if (guessColor.value.charAt(1) == word.charAt(1)){
        i2_color.style.backgroundColor = 'green';
    }else if (word.indexOf(guessColor.value.charAt(1)) != -1){
        i2_color.style.backgroundColor = 'yellow';
    }else{
        i2_color.style.backgroundColor = 'grey';
    }
    const i3_color = document.querySelector('.item3');
    if (guessColor.value.charAt(2) == word.charAt(2)){
        i3_color.style.backgroundColor = 'green';
    }else if (word.indexOf(guessColor.value.charAt(2)) != -1){
        i3_color.style.backgroundColor = 'yellow';
    }else{
        i3_color.style.backgroundColor = 'grey';
    }
    const i4_color = document.querySelector('.item4');
    if (guessColor.value.charAt(3) == word.charAt(3)){
        i4_color.style.backgroundColor = 'green';
    }else if (word.indexOf(guessColor.value.charAt(3)) != -1){
        i4_color.style.backgroundColor = 'yellow';
    }else{
        i4_color.style.backgroundColor = 'grey';
    }
    const i5_color = document.querySelector('.item5');
    if (guessColor.value.charAt(4) == word.charAt(4)){
        i5_color.style.backgroundColor = 'green';
    }else if (word.indexOf(guessColor.value.charAt(4)) != -1){
        i5_color.style.backgroundColor = 'yellow';
    }else{
        i5_color.style.backgroundColor = 'grey';
    }
    guessColor.value = "";
}



var button = document.getElementById("guess");
let guessBox = button.value;
button.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button").click();
    }
});

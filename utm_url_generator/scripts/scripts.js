var initLink = "https://www.agaain.io/?";


function disable(button) {
    let test_button = document.getElementById(button);
    test_button.disabled = true;
    test_button.style.color = "grey";
    test_button.style.background = 'none';

}

function enable(button) {
    let test_button = document.getElementById(button);
    test_button.disabled = false;
    test_button.style.color = "black";
    test_button.style.background = 'white';
}

function reset() {
    enable('email_button');
    enable('social_button');
    enable('link_button');
    enable('google_button');
    enable('insta_button');
    enable('facebook_button');
    enable('ppc_button');
    enable('affiliate_button');
    initLink = "https://www.agaain.io/?";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = '';
    document.getElementById("output").href = none;
}


function addSource(word, id) {
    let source = "/utm_source=" + word;
    initLink += source;
    document.getElementById(id).style.background = 'skyblue';
    if (word == 'google') {
        disable('email_button');
        disable('social_button');
        disable('link_button');
    } else if(word == ('email')){
        disable('google_button');
        disable('social_button');
        disable('link_button');
    } else if(word == ('social')){
        disable('google_button');
        disable('email_button');
        disable('link_button');
    } else if(word == ('link')){
        disable('google_button');
        disable('social_button');
        disable('email_button');
    }
    
}

function addContent(word, id) {
    let content = "/utm_content=" + word;
    initLink += content;
    document.getElementById(id).style.background = 'skyblue';
    if (word == 'affiliate') {
        disable('insta_button');
        disable('facebook_button');
        disable('ppc_button');
    } else if(word == ('facebook')){
        disable('affiliate_button');
        disable('insta_button');
        disable('ppc_button');
    } else if(word == ('instagram')){
        disable('affiliate_button');
        disable('facebook_button');
        disable('ppc_button');
    } else if(word == ('ppc')){
        disable('affiliate_button');
        disable('facebook_button');
        disable('insta_button');
    }
}


function getName() {
    let initName = '/utm_name='
    let dotIo = ".io"
    var name = document.getElementById("firstName");
    console.log(name.value.length);
    if (name.value.length == 0) {
        document.getElementById("output").innerHTML = "Please Enter a Name";
        document.getElementById("output").style.color = 'red';
        document.getElementById("output").href = none;

    } else {
        let newLink = initLink + initName + name.value + dotIo;
        document.getElementById("output").innerHTML = newLink;
        document.getElementById("output").style.color = "grey";
        document.getElementById("output").href = newLink;
        initLink = "https://www.agaain.io/?";
    }

}

let generateButton = document.getElementById("button");
generateButton.addEventListener('click', getName);

let prompt = document.getElementById("firstName");
prompt.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button").click();
    }
});



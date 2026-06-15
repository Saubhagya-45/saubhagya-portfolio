const text = "Software Developer | Machine Learning Enthusiast";

let i = 0;

function typeWriter() {

    if(i < text.length){

        document.getElementById("typing-text").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 70);
    }
}

typeWriter();

const text = "Software Developer | Machine Learning Enthusiast";

const typingElement = document.getElementById("typing-text");

let index = 0;

function typeWriter() {

    if(index < text.length){

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 70);
    }
}

window.onload = () => {

    typingElement.innerHTML = "";

    typeWriter();
};


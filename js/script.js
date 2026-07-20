// ==============================
// Typing Effect
// ==============================

const words = [
    "Embedded Systems Engineer",
    "FPGA Developer",
    "ESP32 Developer",
    "Arduino Developer",
    "Python Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0, letterIndex++);

        if(letterIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typing.textContent = current.substring(0, letterIndex--);

        if(letterIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 90);

}

typeEffect();


// ==============================
// Fade In Sections
// ==============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

sections.forEach(section=>{

    observer.observe(section);

});
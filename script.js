const body = document.querySelector("body");
const emoji = document.querySelector(".slide-emoji");
const input = document.querySelector("input");
const bar = document.querySelector(".progress-bar");
const thumb = document.querySelector(".thumb");
input.oninput = () =>{
    let sliderValue = input.value;
    thumb.style.left = sliderValue + '%';
    bar.style.width = sliderValue + '%';
    if(sliderValue < 20){
        emoji.style.marginTop = "0px";
        body.classList.add("angry");
        body.classList.remove("Sad");
        body.classList.remove("shocked");
        body.classList.remove("neutral");
        body.classList.remove("happy");
    }
    if(sliderValue >= 20){
        emoji.style.marginTop = "-140px";
        body.classList.add("Sad");
        body.classList.remove("angry");
        body.classList.remove("shocked");
        body.classList.remove("neutral");
        body.classList.remove("happy");
    }
    if(sliderValue >= 40){
        emoji.style.marginTop = "-280px";
        body.classList.add("shocked");
        body.classList.remove("angry");
        body.classList.remove("Sad");
        body.classList.remove("neutral");
        body.classList.remove("happy");
    }
    if(sliderValue >= 60){
        emoji.style.marginTop = "-420px";
        body.classList.add("neutral");
        body.classList.remove("shocked");
        body.classList.remove("angry");
        body.classList.remove("Sad");
        body.classList.remove("happy");
    }
    if(sliderValue >= 80){
        emoji.style.marginTop = "-560px";
        body.classList.add("happy");
        body.classList.remove("neutral");
        body.classList.remove("shocked");
        body.classList.remove("angry");
        body.classList.remove("Sad");
    }
    if(sliderValue >= 120){
        emoji.style.marginTop = "-720px";
    }
   
}
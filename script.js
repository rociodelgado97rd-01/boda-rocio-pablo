/* ==========================
APERTURA INVITACIÓN
========================== */

const introScreen =
document.getElementById("intro-screen");

const mainContent =
document.getElementById("main-content");

const openBtn =
document.getElementById("openInvitation");

if(openBtn){

openBtn.addEventListener("click",()=>{

introScreen.style.opacity="0";

setTimeout(()=>{

introScreen.style.display="none";
mainContent.style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

},800);

});

}

/* ==========================
CUENTA REGRESIVA
========================== */

const weddingDate =
new Date("October 3, 2026 19:00:00").getTime();

function updateCountdown(){

const now =
new Date().getTime();

const distance =
weddingDate - now;

if(distance <= 0){

document.getElementById("days").innerHTML = "0";
document.getElementById("hours").innerHTML = "0";
document.getElementById("minutes").innerHTML = "0";
document.getElementById("seconds").innerHTML = "0";

return;
}

const days =
Math.floor(
distance /
(10006060*24)
);

const hours =
Math.floor(
(distance %
(1000606024))
/
(100060*60)
);

const minutes =
Math.floor(
(distance %
(10006060))
/
(1000*60)
);

const seconds =
Math.floor(
(distance %
(1000*60))
/
1000
);

document.getElementById("days").innerHTML =
days;

document.getElementById("hours").innerHTML =
hours;

document.getElementById("minutes").innerHTML =
minutes;

document.getElementById("seconds").innerHTML =
seconds;

}

updateCountdown();

setInterval(
updateCountdown,
1000
);

/* ==========================
CARRUSEL
========================== */

const slides =
document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

slides.forEach(slide=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

if(nextBtn){

nextBtn.addEventListener("click",()=>{

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

showSlide(currentSlide);

});

}

if(prevBtn){

prevBtn.addEventListener("click",()=>{

currentSlide--;

if(currentSlide < 0){

currentSlide =
slides.length - 1;

}

showSlide(currentSlide);

});

}

/* Cambio automático */

setInterval(()=>{

if(slides.length > 0){

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

showSlide(currentSlide);

}

},5000);

/* ==========================
MÚSICA
========================== */

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

let isPlaying = false;

if(musicBtn){

musicBtn.addEventListener("click",()=>{

if(!isPlaying){

music.play();

musicBtn.innerHTML = "🎵";

isPlaying = true;

}else{

music.pause();

musicBtn.innerHTML = "🎻";

isPlaying = false;

}

});

}

/* ==========================
COPIAR CLABE
========================== */

const copyBtn =
document.getElementById("copyClabe");

if(copyBtn){

copyBtn.addEventListener("click",()=>{

navigator.clipboard.writeText(
"638180000177770296"
);

copyBtn.innerHTML =
"✓ CLABE Copiada";

setTimeout(()=>{

copyBtn.innerHTML =
"Copiar CLABE";

},2500);

});

}

/* ==========================
PÉTALOS FLOTANTES
========================== */

function createPetal(){

const petal =
document.createElement("div");

petal.classList.add("petal");

petal.innerHTML = "❀";

petal.style.left =
Math.random()*100 + "vw";

petal.style.top =
"-30px";

petal.style.opacity =
Math.random();

petal.style.fontSize =
(15 + Math.random()*20) + "px";

document.body.appendChild(
petal
);

const duration =
8000 + Math.random()*5000;

{
transform:
"translateY(0px) rotate(0deg)"
},

{
transform:
"translateY(110vh) rotate(360deg)"
}

],{

duration:duration,
iterations:1

});

setTimeout(()=>{

petal.remove();

},duration);

}

setInterval(
createPetal,
700
);

/* ==========================
SCROLL SUAVE
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener(
"click",

function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

}

);

});

/* ==========================
EFECTO APARICIÓN
========================== */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

},

{
threshold:0.15
}

);

document
.querySelectorAll(
".section"
)
.forEach(section=>{

section.style.opacity = "0";

section.style.transform =
"translateY(50px)";

section.style.transition =
"all .8s ease";

observer.observe(section);

});

/* ==========================
MENSAJE CONSOLA
========================== */

console.log(
"Invitación Rocío & Pablo cargada correctamente 💍"
);

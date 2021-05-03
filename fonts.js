const fonts = ["Arial, sans-serif", "Helvetica, sans-serif", "Verdana, sans-serif", "Trebuchet MS, sans-serif", "Gill Sans, sans-serif", "Noto Sans, sans-serif", "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif", "Times, Times New Roman, serif", "Georgia, serif", "Andale Mono, monospace", "Courier, monospace"];
//11fonts
const btn = document.getElementById("btn");
const name = document.querySelector('.name');

btn.addEventListener("click", function(){
//get random number 0-10

const randomNumber = getRandomNumber();
console.log(randomNumber);


document.body.style.fontFamily = fonts[randomNumber];
name.textContent = fonts[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * fonts.length);
}

//Need to work on not getting numbers that are not in and array ex.13 14 

const fonts = ["Arial, sans-serif", "Helvetica, sans-serif", "Verdana, sans-serif", "Trebuchet MS, sans-serif", "Gill Sans, sans-serif", "Noto Sans, sans-serif", "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif", "Times, Times New Roman, serif", "Georgia, serif", "Andale Mono, monospace", "Courier, monospace", "Apple Chancery, cursive", "Snell Roundhand, cursive", "Impact, fantasy", "Luminari, fantasy", "Jazz LET, fantasy", "Blippo, fantasy", "Trattatello, fantasy"];
//18fonts
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


//Only gets up to 15

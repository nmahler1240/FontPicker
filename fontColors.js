const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "c", "D", "E", "F"];
// # f15025
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function(){
let hexColor = "#";
for (let i = 0; i < 6; i++) {
  hexColor += hex[getRandomNumber()];
}

document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length)
};

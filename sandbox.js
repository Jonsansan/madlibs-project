let Submitbutton = document.getElementById("Submit-button");
document.addEventListener("DOMContentLoaded", function () {
  Submitbutton.addEventListener("click", getWords);
});

let words = document.querySelectorAll('input[type="text"]');
console.log(words);
function getWords() {
  console.log(Submitbutton);
}

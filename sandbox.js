let submitButton = document.getElementById("Submit-button");
document.addEventListener("DOMContentLoaded", function () {
  submitButton.addEventListener("click", getWords);
});

function getWords() {
  let words = document.querySelectorAll('input[type="text"]');
  
  console.log(submitButton);

  let placeholders = document.querySelectorAll(".userInput");
console.log(words[index]0
  placeholders.forEach((placeholder, index) => {
    console.log(placeholder, index);
  });
}

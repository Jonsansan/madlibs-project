let submitButton = document.getElementById("Submit-button");

document.addEventListener("DOMContentLoaded", function () {
  submitButton.addEventListener("click", getWords);
});

function getWords() {
  let words = document.querySelectorAll('input[type="text"]');
  // console.log(submitButton);

  let placeholders = document.querySelectorAll(".userInput");

  placeholders.forEach((placeholder, index) => {
    if (index < words.length) {
      placeholder.innerHTML = words[index].value;
    }
  });

  words.forEach((word) => {
    console.log(word.value);
  });
}

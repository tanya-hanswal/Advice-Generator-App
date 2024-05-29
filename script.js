let adviceNumber = document.getElementById("advice-number");
let advice = document.getElementById("advice");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      adviceNumber.innerHTML = data.slip.id;
      advice.innerHTML = data.slip.advice;
    });
});

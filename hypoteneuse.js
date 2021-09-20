var show_ans = document.querySelector(".quiz-score");
show_ans.classList.add("hide");

var firstAngle = document.querySelector("#first-side");
var secondAngle = document.querySelector("#second-side");
var triangleButton = document.querySelector("#hypoteneuse-button");

triangleButton.addEventListener("click", function () {
  let first = Number(firstAngle.value);
  let second = Number(secondAngle.value);
  let third = Math.sqrt(first * first + second * second);

  show_ans.classList.remove("hide");
  show_ans.innerText = "Hypoteneuse: " + third;
});

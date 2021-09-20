var show_ans = document.querySelector(".quiz-score");
show_ans.classList.add("hide");

var firstAngle = document.querySelector("#first-angle");
var secondAngle = document.querySelector("#second-angle");
var thirdAngle = document.querySelector("#third-angle");
var triangleButton = document.querySelector("#tri-button");

triangleButton.addEventListener("click", function () {
  let sum =
    Number(firstAngle.value) +
    Number(secondAngle.value) +
    Number(thirdAngle.value);

  if (sum === 180) {
    show_ans.classList.remove("hide");
    show_ans.innerText = "It forms a valid triangle";
  } else {
    show_ans.classList.remove("hide");
    show_ans.innerText = "It does not form a valid triangle";
  }
});

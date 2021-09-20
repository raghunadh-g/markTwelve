var show_ans = document.querySelector(".quiz-score");
show_ans.classList.add("hide");

var firstAngle = document.querySelector("#first-side");
var secondAngle = document.querySelector("#second-side");
var thirdAngle = document.querySelector("#third-side");
var triangleButton = document.querySelector("#area-button");

triangleButton.addEventListener("click", function () {
  let first = Number(firstAngle.value);
  let second = Number(secondAngle.value);
  let third = Number(thirdAngle.value);
  console.log(first, second, third);
  let perimeter = Math.floor((first + second + third) / 2);
  console.log(perimeter);
  let area =
    perimeter *
    (perimeter - first) *
    (perimeter - second) *
    (perimeter - third);
  console.log(area);
  area = Math.sqrt(area);
  show_ans.classList.remove("hide");
  show_ans.innerText = "Area: " + area;
});

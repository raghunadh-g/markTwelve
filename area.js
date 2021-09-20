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

  let perimeter = Math.floor((first + second + third) / 2);

  let area =
    perimeter *
    (perimeter - first) *
    (perimeter - second) *
    (perimeter - third);
  let negFlag = false;
  if (area < 0) {
    negFlag = true;
    area = -area;
  }
  area = Math.sqrt(area);
  if (negFlag) area = -area;
  show_ans.classList.remove("hide");
  show_ans.innerText = "Area: " + area;
});

var question_num = document.querySelector(".quiz-question");
var question_content = document.querySelector(".quiz-content");
var prev_btn = document.querySelector(".quiz-prev");
var next_btn = document.querySelector(".quiz-next");
var submit_btn = document.querySelector(".quiz-submit");
var show_ans = document.querySelector(".quiz-score");

show_ans.classList.add("hide");

var i = 0;
var score = 0;

var questions = [
  {
    question:
      "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°? ",
    answer: "90",
    options: ["45", "60", "90"],
    correctOption: 3,
  },
  {
    question: "A triangle can have? ",
    answer: "1 right angle",
    options: ["1 right angle", "2 right angles", "3 right angles"],
    correctOption: 1,
  },
  {
    question: "The perimeter of scalene triangle with sides a, b, c is ? ",
    answer: "a+b+c",
    options: ["a+b+c", "3a", "none"],
    correctOption: 1,
  },
  {
    question: "A scalene triangle has ___ lines of symmetry ",
    answer: "0",
    options: ["1", "2", "0"],
    correctOption: 3,
  },
  {
    question:
      "There is a right triangle PQR where: angle Q = 90°; angle P = angle R. What is the measure of angles P and R?",
    answer: "45",
    options: ["30", "45", "60"],
    correctOption: 2,
  },
];

var answers = [-1, -1, -1, -1, -1];

var radioButtons = document.getElementsByName("rate");
for (let k = 0; k < radioButtons.length; k++) {
  radioButtons[k].onclick = function () {
    answers[i] = k;
  };
}

question_num.innerText = "Question " + (i + 1);
question_content.innerText = questions[i].question;
for (let j = 0; j < 3; j++) {
  var tmp = document.querySelector(".options" + CSS.escape(j + 1));
  tmp.innerText = questions[i].options[j];
  document
    .querySelector("#r" + CSS.escape(j + 1))
    .setAttribute("value", questions[i].options[j]);
  if (answers[i] !== -1) {
    if (j === answers[i]) {
      document.querySelector("#r" + CSS.escape(j + 1)).checked = true;
    } else {
      document.querySelector("#r" + CSS.escape(j + 1)).checked = false;
    }
  } else {
    document.querySelector("#r" + CSS.escape(j + 1)).checked = false;
  }
}
if (i === 0) {
  next_btn.classList.remove("hide");
} else if (i === questions.length - 1) {
  prev_btn.classList.remove("hide");
} else {
  prev_btn.classList.remove("hide");
  next_btn.classList.remove("hide");
}

next_btn.addEventListener("click", function () {
  i = i + 1;

  question_num.innerText = "Question " + (i + 1);
  question_content.innerText = questions[i].question;
  for (let j = 0; j < 3; j++) {
    var tmp = document.querySelector(".options" + CSS.escape(j + 1));
    tmp.innerText = questions[i].options[j];
    document
      .querySelector("#r" + CSS.escape(j + 1))
      .setAttribute("value", questions[i].options[j]);
    if (answers[i] !== -1) {
      if (j === answers[i]) {
        document.querySelector("#r" + CSS.escape(j + 1)).checked = true;
      } else {
        document.querySelector("#r" + CSS.escape(j + 1)).checked = false;
      }
    } else {
      document.querySelector("#r" + CSS.escape(j + 1)).checked = false;
    }
  }

  if (i === questions.length - 1) {
    next_btn.classList.add("hide");
    submit_btn.classList.remove("hide");
    return;
  }

  submit_btn.classList.add("hide");

  if (i === 0) {
    next_btn.classList.remove("hide");
  } else if (i === questions.length - 1) {
    prev_btn.classList.remove("hide");
  } else {
    prev_btn.classList.remove("hide");
    next_btn.classList.remove("hide");
  }
});

prev_btn.addEventListener("click", function () {
  i = i - 1;

  question_num.innerText = "Question " + (i + 1);
  question_content.innerText = questions[i].question;
  for (let j = 0; j < 3; j++) {
    var tmp = document.querySelector(".options" + CSS.escape(j + 1));
    tmp.innerText = questions[i].options[j];
    document.querySelector("#r" + CSS.escape(j + 1)).val =
      questions[i].options[j];
    console.log("i val:", i);
    console.log(answers);
    if (answers[i] !== -1) {
      if (j === answers[i]) {
        document.querySelector("#r" + CSS.escape(j + 1)).checked = true;
      } else {
        document.querySelector("#r" + CSS.escape(j + 1)).checked = false;
      }
    } else {
      document.querySelector("#r" + CSS.escape(j + 1)).checked = false;
    }
  }

  if (i === 0) {
    prev_btn.classList.add("hide");
    return;
  }
  submit_btn.classList.add("hide");
  if (i === 0) {
    next_btn.classList.remove("hide");
  } else if (i === questions.length - 1) {
    prev_btn.classList.remove("hide");
  } else {
    prev_btn.classList.remove("hide");
    next_btn.classList.remove("hide");
  }
});

submit_btn.addEventListener("click", function () {
  show_ans.classList.remove("hide");
  score = 0;
  for (let k = 0; k < questions.length; k++) {
    if (answers[k] + 1 === questions[k].correctOption) {
      score++;
    }
  }
  show_ans.innerText = "Score: " + score;
});

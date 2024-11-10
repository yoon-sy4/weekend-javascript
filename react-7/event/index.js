const helloButton = document.querySelector(".hello");

// 이벤트 추가하는 방법

//1. addEventListener 사용

// helloButton.addEventListener("click", () => {
//   alert("오늘을 일요일!");
// });

//2. onclick함수
const hello = () => {
  alert("오늘은 일요일!");
};

// 💛버튼이 누르면 💔

const heart = document.createElement("button");
heart.innerText = "💛";
heart.addEventListener("click", () => {
  if (heart.innerText == "💛") heart.innerText = "💔";
  else heart.innerText = "💛";
});

document.body.appendChild(heart);

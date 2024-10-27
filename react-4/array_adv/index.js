const arr = [1, 2, 3, 4, 5];
// const plusThree = (a) => a + 3;
// const returnTen = (a) => 10;
// const plusTwo =(a) =>a +2;

// // arr.map(plusThree);  // 각각 3 더하기
// arr.map((a) => a + 3);
// arr.map(returnTen);  // 모두 10으로 바꾸기

// 각각 2배
// 각각 제곱
// 홀수면 +10,  짝수면 -10
// 3이상이면 +3, 아니면 -3

arr.map((a) => a * 2);
arr.map((a) => a ** 2);

// const calc1 = (a) => {
//   if (a % 2 == 0) {
//     return a - 10;
//   } else {
//     return a + 10;
//   }
// };
// arr.map(calc1);
arr.map((a) => (a % 2 ? a + 10 : a - 10));

// const calc2 = (a) => {
//   if (a >= 3) {
//     return a + 3;
//   } else {
//     return a - 3;
//   }
// };

// arr.map(calc2);
arr.map((a) => (a >= 3 ? a + 3 : a - 3));

const fruits = ["apple", "orange", "kiwi", "mango", "watermelon", "melon"];

//문자의 길이가 5글자이하이면 모두 대문자화
//그게 아니면 이모지화...?
fruits.map((a) => (a.length <= 5 ? a.toUpperCase() : "banana"));

// some & every
const arr1 = [1, 3, 5, 7, 9];

arr.some((a) => a > 5); //true
arr.every((a) => a > 5); //false

//1. 과일 리스트엥서 a or e 가 모두 포함하는지 확인하는 로직 만들기!

// 2. 과일 리스트에서 글자가 모두 10글자 이하인지 확인하는 로직 만들기!

fruits.every((a) => a.includes("a") || a.includes("e"));
fruits.every((a) => a.length <= 10);

// 유저에게 아무 영단어를 입력받고
// aeiou(모음)이 들어갔는지 안들어갔는지 확인하는 로직 만들기!

const engWords = prompt("영단어 입력");
const existVowel = engWords.split("");

const vowels = "aeoiu".split("");

existVowel.some((a) =>
  vowels.some((y) => y == a) ? console.log("ok") : console.log("none")
);

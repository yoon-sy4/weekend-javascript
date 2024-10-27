// const cgvChoice = (movie, snack, drink) =>{
//     const movie = Number(prompt("영화를 선택해주세요 1. 보통의 가족 / 2. 베놈/ 3. 베테랑 / 4. 와일드 로봇 / 5. 대도시의 사랑법"));
//     const snack = Number(prompt("팝콘, 카라멜 팝콘, 치즈팝콘, 나쵸, 오징어구이"));
//     const drink = Number(prompt("콜라, 제로콜라, 스프라이트, 제로스프라이트"));
// }
// if cgvChoice.

// const movie = prompt(
//   "영화선택 1. 보통의 가족 / 2. 베놈/ 3. 베테랑 / 4. 와일드 로봇 / 5. 대도시의 사랑법 "
// );

// if (movie < 6 && movie > 0) {
//   alert("영화 선택 완료. 스낵류를 골라주세요 : ");
//   movie_price == 12000;
//   const snack = prompt("팝콘, 카라멜 팝콘, 치즈팝콘, 나쵸, 오징어구이");
//   if (snack.includes("팝콘")) {
//     alert("스낵류 선택 완료. 음료를 골라주세요");
//     const snack_price = 6000;
//     if (drink.includes("콜라")) {
//       alert(`음료 선택 완료. 영화${movie}, ${snack}, ${drink}값은 총합해서
//                 ${snack_price + movie_price + 3000}입니다.`);
//     } else {
//       alert(`음료 선택 완료. 영화${movie}, ${snack}, ${drink}값은 총합해서
//                 ${snack_price + movie_price + 2000}입니다.`);
//     }
//   } else if (!snack.includes("팝콘")) {
//     alert("스낵류 선택 완료. 음료를 골라주세요");
//     const snack_price = 4000;
//     if (drink.includes("콜라")) {
//       alert(`음료 선택 완료. 영화${movie}, ${snack}, ${drink}값은 총합해서
//                 ${snack_price + movie_price + 3000}입니다.`);
//     } else {
//       alert(`음료 선택 완료. 영화${movie}, ${snack}, ${drink}값은 총합해서
//                 ${snack_price + movie_price + 2000}입니다.`);
//     }
//   } else {
//     alert("해당하는 스낵이 없습니다.");
//   }
// } else {
//   alert("해당 영화 x");
// }

// cgv 프롬프트 프로그램

// 영화 : [보통의 가족, 베놈, 베테랑2, 와일드 로봇, 대도시의 사랑법]
// 영화 가격 : 12000
// 스낵류 : [팝콘, 카라멜 팝콘, 치즈팝콘, 나쵸, 오징어구이]
// 팝콘 : 6000 나머지 : 4000
// 음료류 : [콜라, 제로콜라, 스프라이트, 제로스프라이트]
// 콜라 : 3000 사이다 : 2000

// 구매하실 상품 선택 후 : 영화 [~~], 스낵류 [~~], 음료: [~~]
// 총 가격 : ~~~입니다.

const movie = [
  "보통의 가족",
  "베놈",
  "베테랑2",
  "와일드 로봇",
  "대도시의 사랑법",
];
const snack = ["팝콘", "카라멜 팝콘", "치즈팝콘", "나쵸", "오징어구이"];
const drink = ["콜라", "제로콜라", "스프라이트", "제로스프라이트"];

const selectedMovie = Number(prompt(movie + " 번호입력"));
const selectedSnack = Number(prompt(snack + " 번호입력"));
const selectedDrink = Number(prompt(drink + " 번호입력"));

const deterSnackPrice = (snacks) => {
  return snacks.includes("팝콘") ? 6000 : 4000;
};
const deterDrinkPrice = (drinks) => {
  return drinks.includes("콜라") ? 3000 : 2000;
};

console.log(`구매하신 제품 : 영화: 
     ${movie[selectedMovie]}. 스낵류: ${snack[selectedSnack]}, 음료: ${drink[selectedDrink]}`);
console.log(`총 가격
     ${
       12000 +
       deterSnackPrice(snack[selectedSnack]) +
       deterDrinkPrice(drink[selectedDrink])
     }`);

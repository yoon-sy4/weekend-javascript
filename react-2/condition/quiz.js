// 유저에게 프로그래밍 점수를 입력받고,
// 90점 이상 > A 80점 이상> B, 70점 이상 > C , 60점 이상 > D, 그 외에는 F

// const score = Number(prompt("프로그래밍 점수를 입력하세요"));
// if (score >= 90) {
//   console.log(`A`);
// } else if (score >= 80) {
//   console.log(`B`);
// } else if (score >= 70) {
//   console.log(`C`);
// } else if (score >= 60) {
//   console.log(`D`);
// } else {
//   console.log(`F`);
// }

// 유저에게 각도 (angle) 물어보고,
// 평각, 직각, 둔각, 예각 나타내기!

// const angle = Number(prompt("각도를 입력하세요"));
// if (angle % 180 > 90) {
//   console.log(`둔각`);
// } else if (angle % 180 == 90) {
//   console.log(`직각`);
// } else if (angle % 180 <90 && angle % 180 > 0) {
//   console.log(`예각`);
// } else if (angle % 180 === 0 || angle == 0) {
//   console.log(`평각`);
// }

// 버스 요금 계산기 프로그램

// 유저에게 1번. 마을버스 2. 시내버스 3. 광역버스 4. 고속버스 선택하고
// 유저에게 나이를 물어보기
//  어린이 : 50% 힐인 , 8~19살 : 30% 할인, 65세 이상 : 20% 할인

//모두 선택 후 콘솔로그 : ~~버스의 최종 금액은 ~~입니다.

const bus = Number(
  prompt(
    "원하시는 버스의 번호를 입력하세요 (1. 마을버스 2. 시내버스 3. 광역버스 4. 고속버스)"
  )
);
const age = Number(prompt("이용자의 나이를 입력해주세요"));
if (bus == 1) {
  const price = 10000;
  if (age < 8) {
    console.log(`마을버스의 최종 금액은 ${price * 0.5}입니다.`);
  } else if (age >= 8 && age < 19) {
    console.log(`마을버스의 최종 금액은 ${price * 0.7}입니다.`);
  } else if (age >= 65) {
    console.log(`마을버스의 최종 금액은 ${price * 0.8}입니다.`);
  } else {
    console.log(`마을버스의 최종 금액은 ${price}입니다.`);
  }
} else if (bus == 2) {
  const price = 20000;
  if (age < 8) {
    console.log(`시내버스의 최종 금액은 ${price * 0.5}입니다.`);
  } else if (age >= 8 && age < 19) {
    console.log(`시내버스의 최종 금액은 ${price * 0.7}입니다.`);
  } else if (age >= 65) {
    console.log(`시내버스의 최종 금액은 ${price * 0.8}입니다.`);
  } else {
    console.log(`시내버스의 최종 금액은 ${price}입니다.`);
  }
} else if (bus == 3) {
  const price = 30000;
  if (age < 8) {
    console.log(`광역버스의 최종 금액은 ${price * 0.5}입니다.`);
  } else if (age >= 8 && age < 19) {
    console.log(`광역버스의 최종 금액은 ${price * 0.7}입니다.`);
  } else if (age >= 65) {
    console.log(`광역버스의 최종 금액은 ${price * 0.8}입니다.`);
  } else {
    console.log(`광역버스의 최종 금액은 ${price}입니다.`);
  }
} else if (bus == 4) {
  const price = 40000;
  if (age < 8) {
    console.log(`고속버스의 최종 금액은 ${price * 0.5}입니다.`);
  } else if (age >= 8 && age < 19) {
    console.log(`고속버스의 최종 금액은 ${price * 0.7}입니다.`);
  } else if (age >= 65) {
    console.log(`고속버스의 최종 금액은 ${price * 0.8}입니다.`);
  } else {
    console.log(`고속버스의 최종 금액은 ${price}입니다.`);
  }
} else {
  console.log("옳지 않은 번호입니다.");
}

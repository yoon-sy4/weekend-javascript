// 타코 음식 만들기!

// 유저에게 타코 메뉴를 선택하고(🦐, 🥩, 🍗, 🧀)
// 요리하기 함수를 만들기 (요리시작! ~ 요리끝!)
// 타코 만들기 함수를 만들기
//1, 타코 준비 2. 메뉴넣기 3. 굽기 4. 타코완성
// 준비된 ~~타코가 나왔습니다.!

const cook = (food) => {
  console.log("요리 시작!");
  food();
  console.log("요리 끝!");
};

const taco = (menu) => {
  console.log("1. 타코 준비");
  console.log(`2. ${menu} 넣기`);
  console.log("3. 굽기");
  console.log("4. 타코 완성");
};
const menu = ["새우🦐", "돼지고기🥩", "닭고기🍗", "치즈🧀"];
const tacoCooking = Number(
  prompt("타코 메뉴 선택 : 1. 새우🦐 2. 돼지고기🥩 3. 닭고기🍗 4. 치즈🧀")
);

cook(() => taco(menu[tacoCooking - 1]));
console.log(`준비된 ${menu[tacoCooking - 1]} 타코가 나왔습니다.`);

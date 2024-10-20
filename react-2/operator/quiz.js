// 두 정수를 유저에게 입력 받고, 더 큰 숫자를 알럿으로 나타내기
// const n = prompt("첫 번째 정수 입력");
// const m = prompt("두 번째 정수 입력");

// alert(`${n}과 ${m} 중에 더 큰 숫자는 ${n > m ? n : m}`);

// 1. 도너츠 구매 개수를 입력, 도너츠 가격 입력
// 10개 이상이면 10% 할인, 20개 이상이면 20% 할인 해주고
// 콘솔로 나타내기
// const num_donuts = prompt("도너츠 개수 입력");
// const price_donuts = prompt("도너츠 가격 입력");
// const final_price =
//   10 <= num_donuts < 20
//     ? Number(num_donuts) * Number(price_donuts) * 0.9
//     : Number(num_donuts) * Number(price_donuts);
// console.log(`도넛의 가격은 ${final_price}`);

const donut_count = Number(prompt("도너츠 개수 입력"));
const donut_price = Number(prompt("도너츠 가격 입력"));
const total_price = donut_count * donut_price;

const isUnder10 = donut_count < 10;
const isOver10andUnder20 = 10 <= donut_count && donut_count < 20;
const isOver20 = 20 <= donut_count;

isUnder10 && alert(`총 금액 : ${total_price}`);
isOver10andUnder20 && alert(`총 금액 : ${total_price * 0.9}`);
isOver20 && alert(`총 금액 : ${total_price * 0.8}`);

// 2. 정수를 입력해서 홀수인지 짝수인지 알려주기
// 정수를 입력하면 콘솔 로그 ~~은 홀수/ 짝수 입니다.
const num = Number(prompt("정수 입력"));
const result = num % 2 === 1 ? "홀수" : "짝수"; // !!(num % 2) ? "홀수" : "짝수"
alert(`${num}은 ${result}입니다.`);

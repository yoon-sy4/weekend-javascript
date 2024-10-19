//1. 유저에게 첫 번째 숫자, 두 번째 숫자를 입력받고, 두 수의 합을 콘솔로그로 나타내기
//2. 유저에게 나이를 물어보고, 태어난 년도 콘솔로그로 나타내기!
//
//const num1 = prompt("첫번째 숫자 입력");
//const num2 = prompt("두번째 숫자 입력");
//console.log(Number(num1) + Number(num2));

//const age = prompt("유저의 나이는?");
//const year = 2024 - Number(age) +1; 
//console.log(`유저의 태어난 년도는 ${year}입니다.`);

// 3. 유저에게 한 변의 길이를 입력 받고, 정사각형의 넓이 나타내기

const num1 = prompt("정사각형의 한 변의 길이 입력");
console.log(Number(num1)*Number(num1));

//4. 유저에게 밑변과 높이를 입력받고,정삼각형의 넓이 나타내기
const num2 = prompt("삼각형의 밑변");
const num3 = prompt("삼각형의 높이");
console.log(Number(num2) * Number(num2) * 0.5);

//5, 유저에게 반지름 입력받고, 원의 넓이와 둘레 나타내기
const num4 = prompt("원의 반지름");
console.log(`원의 둘레는 ${Number(num4) * 2 * 3.14}이고, 원의 넓이는 ${Number(num4)*Number(num4) * 3.14 }입니다`);

//6. 유저에게 일본 여행 갈 여비를 엔화로 바꾸기
const won = prompt("여비를 치면 엔화로 바꿔드립니다.");
const yen = Number(won) * (109/1000);
console.log(`${won}원 -> ${yen}엔 환전`);
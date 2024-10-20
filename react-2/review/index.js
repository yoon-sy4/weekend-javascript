// 1. 유저에게 운동 3개를 물어보고 ,콘솔로 1번운동 ->2번운동 -> 3번운동
const exercise_1 = prompt("1번 운동 입력");
const exercise_2 = prompt("2번 운동 입력");
const exercise_3 = prompt("3번 운동 입력");
console.log(`${exercise_1} -> ${exercise_2} -> ${exercise_3}`);

// 2. 두 정수 m,n 입력 받고, m의 nㅈㅔ곱 결과를 콘솔로 나타내기
const m = prompt("정수 m 입력");
const n = prompt("정수 n 입력");
console.log(`m의 n 제곱은 ${Number(m ** n)}입니다`);

// 3. 달러를 입력하면 원화로 콘솔로 나타내기
const dollar = prompt("달라를 입력하세요");
const won = parseFloat(dollar * 1370.01);
console.log(`${dollar}달라는 ${won}원 입니다`);

// 4. 1000 이하의 정수를 입력받고, 분초로 나타내기 ( 65 > 1분 5초)
const integer = prompt("1000 이하의 정수를 입력하세요");
const time_min = parseInt(integer / 60);
const time_sec = Number(integer % 60);
console.log(`${integer}은 ${time_min}분 ${time_sec}초 입니다.`);

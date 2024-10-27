// 콜백함수 : 마술상자 안에 마술상자를 넣기

const recipe = (food) => {
  console.log("요리시작");
  food();
  console.log("요리완성");
};
const kimchiStew = () => {
  console.log("김치썰기");
  console.log("물끓이기");
  console.log("김치넣기");
  console.log("완성");
};
const kimchiRice = () => {
  console.log("김치썰기");
  console.log("프라이펜 달구기");
  console.log("김치랑 밥넣기");
  console.log("볶기");
  console.log("완성");
};
recipe(kimchiStew);

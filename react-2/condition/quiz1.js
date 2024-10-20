const bus = Number(
  prompt(
    "원하시는 버스의 번호를 입력하세요 (1. 마을버스 2. 시내버스 3. 광역버스 4. 고속버스)"
  )
);
const age = Number(prompt("이용자의 나이를 입력해주세요"));

const busData = {
  1: {
    name: "마을버스",
    price: 10000,
  },
  2: {
    name: "시내버스",
    price: 20000,
  },
  3: {
    name: "광역버스",
    price: 30000,
  },
  4: {
    name: "고속버스",
    price: 40000,
  },
};

console.log(
  `${busData[bus]["name"]}의 최종 금액은 ${busData[bus]["price"] * 1} 입니다.`
);

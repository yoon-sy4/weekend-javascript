//1. prompt로 유저에게 정수를 입력받고, 양수  or 0 or 음수를 알려주는 프로그램
const num = prompt("정수를 입력하세요");
if (num > 0) {
  console.log(`${num}은 양수입니다.`);
} else if (num == 0) {
  console.log(`0 입니다`);
} else if (num < 0) {
  console.log(`${num}은 음수입니다.`);
}

//2. prompt로 키와 몸무게를 입력받고, bmi지수에 따라서 결과 나타내기
// ex) 173 85 > 비만
const height = prompt("키(m)를 입력하세요");
const weight = prompt("몸무게를 입력하세요");

const bmi = weight / height ** 2;
if (bmi <= 18.5) {
  console.log("bim 저체중");
} else if (bmi <= 23 && bmi > 18.5) {
  console.log("bim 정상");
} else if (bmi <= 25 && bmi > 23) {
  console.log("bim 과체중");
} else if (bmi <= 30 && bmi > 25) {
  console.log("비만");
} else if (bmi > 30) {
  console.log("고도비만");
} else {
  console.log("다시 입력");
}

//3. prompt로 유저에게 태어난 년도를 입력받고, 띠 나타내기
// ex) 2000 -> 용띠, 2005 -> 닭띠

const year = prompt("태어난 년도를 입력하세요");
if (year > 2000) {
  const ani_ = (year - 2000) % 12;
  if (ani_ == 1) {
    console.log(`${year}년도 생은 뱀띠 입니다.`);
  } else if (ani_ == 2) {
    console.log(`${year}년도 생은 말띠 입니다.`);
  } else if (ani_ == 3) {
    console.log(`${year}년도 생은 양띠 입니다.`);
  } else if (ani_ == 4) {
    console.log(`${year}년도 생은 원숭이띠 입니다.`);
  } else if (ani_ == 5) {
    console.log(`${year}년도 생은 닭띠 입니다.`);
  } else if (ani_ == 6) {
    console.log(`${year}년도 생은 개띠 입니다.`);
  } else if (ani_ == 7) {
    console.log(`${year}년도 생은 돼지띠 입니다.`);
  } else if (ani_ == 8) {
    console.log(`${year}년도 생은 쥐띠 입니다.`);
  } else if (ani_ == 9) {
    console.log(`${year}년도 생은 소띠 입니다.`);
  } else if (ani_ == 10) {
    console.log(`${year}년도 생은 호랑이띠 입니다.`);
  } else if (ani_ == 11) {
    console.log(`${year}년도 생은 토끼띠 입니다.`);
  } else if (ani_ == 0) {
    console.log(`${year}년도 생은 용띠 입니다.`);
  }
} else if (year <= 2000) {
  const ani_ = (year - 1900) % 12;
  if (ani_ == 1) {
    console.log(`${year}년도 생은 소띠 입니다.`);
  } else if (ani_ == 2) {
    console.log(`${year}년도 생은 호랑이띠 입니다.`);
  } else if (ani_ == 3) {
    console.log(`${year}년도 생은 토끼띠 입니다.`);
  } else if (ani_ == 4) {
    console.log(`${year}년도 생은 용띠 입니다.`);
  } else if (ani_ == 5) {
    console.log(`${year}년도 생은 뱀띠 입니다.`);
  } else if (ani_ == 6) {
    console.log(`${year}년도 생은 말띠 입니다.`);
  } else if (ani_ == 7) {
    console.log(`${year}년도 생은 양띠 입니다.`);
  } else if (ani_ == 8) {
    console.log(`${year}년도 생은 원숭이띠 입니다.`);
  } else if (ani_ == 9) {
    console.log(`${year}년도 생은 닭띠 입니다.`);
  } else if (ani_ == 10) {
    console.log(`${year}년도 생은 개띠 입니다.`);
  } else if (ani_ == 11) {
    console.log(`${year}년도 생은 돼지띠 입니다.`);
  } else if (ani_ == 0) {
    console.log(`${year}년도 생은 쥐띠 입니다.`);
  }
}

// const year = prompt("태어난 년도 입력");
// const zodiac = year % 12;
// if(zodiac == 0){
//     console.log("원숭이")
// } ...

// const year...
//const zodiacAnimal = {
//  0: "원숭이" ,
//  1: "닭"...
//}
// consol.log(zodiacAnimal[zodiac]);

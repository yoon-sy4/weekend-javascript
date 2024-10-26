// "ice".toUpperCase() // 대문자로 바꿔주는 함수  => ICE
// ["고기", "야채"].push("해산물");

// 데이터타입.함수() : 데이터타입에 따른 함수

// String 함수

const a = "ice";
console.log(a.toUpperCase()); // 대문자화
console.log(a.includes("k")); // 포함하니? False
console.log(a.includes("i")); // 포함하니? True
console.log(a.repeat(2)); // iceice

const b = ["돼지고기", "소고기", "닭고기", "양고기"];
b.push("오리고기");
b.includes("오리고기"); // true
b.reverse(); // 배열순서 바뀜
console.log(b);

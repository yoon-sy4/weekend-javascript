// const user = !!prompt("유저의 이름 입력") || "Guest";
// alert(`닉네임 ${user}님 환영합니다.`);

// 유저에게 비밀번호 입력 : 1234
// 1234을 입력하면 알럿으로 로그인 축하!
// 그 외에는 아무것도 안일어남

const password = prompt("비밀번호 입력");
const login = password == "1234";
login && alert("로그인 축하");

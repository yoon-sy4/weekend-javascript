// 유저에게 비밀번호 확인을 입력받고
const pw = prompt("설정하실 비밀번호를 입력해주세요.");

// 1. 문자 길이가 4~12글자 사이가 아니면 -> alert
// 4글자보다 짧으면 비밀반로가 짧습니다.
// 12글자보다 길면 비밀번호가 깁니다.
if (pw.length < 4) {
  alert("비밀번호가 짧습니다.");
} else if (pw.length > 12) {
  alert("비밀번호가 깁니다.");
} else {
  if (pw.includes("!") || pw.includes("@") || pw.includes("#")) {
    if (pw.endsWith("z")) {
      alert("올바르게 비밀번호를 설정하였습니다");
    } else {
      alert("마지막 글자는 z로 끝나야 합니다.");
    }
  } else {
    alert("비밀번호에는 특수문자 !, @, #중 하나 이상이 들어가야 합니다.");
  }
}

// 2. 특수문자 !, #, @ 이거 셋중에 하나라도 포함안되면
// 특수문자가 반드시 들어가야합니다.

// 3. 마지막 글자가 z로 끝나지 않으면
// 마지막 글자는 z로 끝나야 합니다.

// 4. 위 케이스 통과하면
// 올바르게 비밀번호 설정하였습니다.!
